// __tests__/useScript.test.tsx
import { renderHook } from '@testing-library/react-hooks';
import { ApiError, BusinessHours, BusinessHoursResponse, formatBusinessHoursRange, getPreChatFields, useBusinessHours, useChatController, useHoursRange } from './hooks';
import { act } from 'react-test-renderer';

const makeBusinessHours = (startTime: number, endTime: number): BusinessHours => ({
  startTime, endTime
});
const makeBusinessHoursResponse = (now: number, ...businessHours: BusinessHours[]): BusinessHoursResponse => ({
  businessHoursInfo: { businessHours },
  timestamp: now,
});
const makeResponse = ({ hours, err }: { hours?: BusinessHoursResponse, err?: ApiError}) => ({
  hours, err
});

describe('useBusinessHours', () => {
  // Reset fetch before each test
  beforeEach(() => {
    global.fetch = undefined as any;
    jest.clearAllMocks();
  });

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(123456);
  });

  afterAll(() => {
    jest.useRealTimers();
  })

  it('uses business hours', async () => {
    const now = Date.now();
    const active = makeBusinessHours(now - 1000, now + 5 * 60 * 1000);
    const inactive = makeBusinessHours(now + 10000, now + 5 * 60 * 1000);
    const hours = makeBusinessHoursResponse(now, inactive, active);
    const response = makeResponse({ hours });
    const timeoutSpy = jest.spyOn(global, 'setTimeout');

    const { result } = renderHook(() => useBusinessHours(response, 0));

    expect(timeoutSpy.mock.lastCall[1]).toBe(active.endTime - now);
    expect(result.current?.hours).toEqual(active);
    expect(result.current?.err).not.toBeDefined();
  });

  it('returns undefined when no hoursResponse is provided', () => {
    const { result } = renderHook(() => useBusinessHours(undefined));
    expect(result.current).toBeUndefined();
  });

  it('returns the error object when hoursResponse contains err', () => {
    const err = { message: 'something bad' } as any;   // just a dummy error
    const { result } = renderHook(() => useBusinessHours({ err }));
    expect(result.current).toEqual({ err });
  });

  it('returns the hour while the window is active', () => {
    const start = Date.now() - 1000;
    const end   = Date.now() + 1000;
    const response = makeResponse({
      hours: makeBusinessHoursResponse(Date.now(), makeBusinessHours(start, end))
    });
  
    const { result } = renderHook(() =>
      useBusinessHours(response, 0)
    );
  
    // The hook runs once immediately
    expect(result.current).toEqual({ hours: { startTime: start, endTime: end } });
  
    // The timeout is scheduled for max(end-now, 1000) → 1s
    act(() => { jest.advanceTimersByTime(999) });
    expect(result.current).toEqual({ hours: { startTime: start, endTime: end } });
  
    act(() => { jest.advanceTimersByTime(1) });
    expect(result.current).toBeUndefined();          // timeout cleared the state
  });

  it('has grace period that allows a match slightly before the start', () => {
    const gracePeriod = 5000;
    const start = Date.now() + 4000;
    const end   = Date.now() + 10000;
    const response = makeResponse({
      hours: makeBusinessHoursResponse(Date.now(), makeBusinessHours(start, end))
    });
  
    const { result } = renderHook(() =>
      useBusinessHours(response, gracePeriod)
    );
  
    // Because start – grace <= now, we should still match
    expect(result.current).toEqual({
      hours: { startTime: start, endTime: end }
    });
  });

  it('returns undefined when no hour matches the window', () => {
    const start = Date.now() + 10000;
    const end   = Date.now() + 20000;
    const response = makeResponse({
      hours: makeBusinessHoursResponse(Date.now(), makeBusinessHours(start, end))
    });
  
    const { result } = renderHook(() =>
      useBusinessHours(response, 0)
    );
  
    expect(result.current?.hours).toBeUndefined();
  });
  
  it('clears timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    const start = Date.now() - 1000;
    const end   = Date.now() + 1000;
    const response = makeResponse({
      hours: makeBusinessHoursResponse(Date.now(), makeBusinessHours(start, end))
    });
  
    const { unmount } = renderHook(() =>
      useBusinessHours(response, 5000)
    );
  
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();        // ensure the cleanup cleared the timer
  });
});

describe('formatBusinessHoursRange', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {/* squelch */});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('formats a normal range in 12-hour format with a short TZ for the end', () => {
    const start = new Date('2023-01-01T09:00:00').getTime();   // 9 AM
    const end   = new Date('2023-01-01T17:00:00').getTime();   // 5 PM

    const result = formatBusinessHoursRange(start, end);

    // We can’t pin down the exact TZ label (it depends on the CI machine),
    // but we know the shape is: <start> - <end> <TZ>.
    // <TZ> Could be something like CST or maybe GMT-7
    expect(result).toMatch(/^9\s*AM\s*-\s*5\s*PM\s*[A-Z0-9-]+$/);
  });

  it('handles noon to midnight correctly', () => {
    const start = new Date('2023-01-01T12:00:00').getTime(); // 12 PM
    const end   = new Date('2023-01-01T00:00:00').getTime(); // 12 AM next day

    const result = formatBusinessHoursRange(start, end);
    expect(result).toMatch(/^12\s*PM\s*-\s*12\s*AM\s*[A-Z0-9-]+$/);
  });

    it('returns an empty string when start or end is NaN', () => {
    expect(formatBusinessHoursRange(NaN, 123456)).toBe('');
    expect(formatBusinessHoursRange(123456, NaN)).toBe('');
    expect(formatBusinessHoursRange(NaN, NaN)).toBe('');
  });

  it('returns an empty string when timestamps cannot be parsed to a Date', () => {
    // A value that is a number but is outside the safe integer range
    const big = Number.MAX_SAFE_INTEGER + 1;
    expect(formatBusinessHoursRange(big, big)).toBe('');
  });

  it('falls back to raw hour numbers when Intl.DateTimeFormat throws', () => {
    // 1.  Mock the constructor so that *any* call throws
    jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => {
      throw new Error('forced failure');
    });

    const start = new Date('2023-01-01T09:00:00').getTime();
    const end   = new Date('2023-01-01T17:00:00').getTime();

    const result = formatBusinessHoursRange(start, end);

    expect(result).toBe(`${new Date(start).getHours()} - ${new Date(end).getHours()}`);
  });

  it('calls console.warn with the expected message', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => { /* nothing */ });

    // Force an error from Intl
    jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => {
      throw new Error('boom');
    })

    formatBusinessHoursRange(
      new Date('2023-01-01T09:00:00').getTime(),
      new Date('2023-01-01T17:00:00').getTime(),
    );

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Intl.DateTimeFormat not available'),
      expect.any(Error),
    );
  });
});

describe('useHoursRange', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(Date.UTC(2025, 1, 1, 5));
  });

  it('returns formatted range', () => {
    const now = Date.now();
    const active = makeBusinessHours(now - 1000, now + 5 * 60 * 1000);
    const inactive = makeBusinessHours(now + 10000, now + 5 * 60 * 1000);
    const hours = makeBusinessHoursResponse(now, inactive, active);
    const response = makeResponse({ hours });
    const { result } = renderHook(() => useHoursRange(response));

    expect(result.current.range).toBe(
      formatBusinessHoursRange(active.startTime, active.endTime)
    );
    expect(result.current.err).toBeUndefined();
  });

  it('returns errors', () => {
    const err = { type: 'test', detail: 'test' };
    const response = makeResponse({ err });
    const { result } = renderHook(() => useHoursRange(response));

    expect(result.current.range).toBeUndefined();
    expect(result.current.err).toStrictEqual(err);
  });

  it('returns default error', () => {
    const { result } = renderHook(() => useHoursRange({}));
    
    expect(result.current.range).toBeUndefined();
    expect(result.current.err).toBeUndefined();
  });

  it('memoizes correctly', async () => {
    const now = Date.now();
    const response1 = makeResponse(
      {
        hours: makeBusinessHoursResponse(now, makeBusinessHours(now - 1000, now + 2 * 3600 * 1000))
      }
    );
    const response2 = makeResponse(
      {
        hours: makeBusinessHoursResponse(now, makeBusinessHours(now - 1000, now + 1 * 3600 * 1000))
      }
    );

    const { result, rerender } = renderHook(
      (props: Parameters<typeof useHoursRange>) => useHoursRange(...props),
      { initialProps: [response1, 0] },
    );

    rerender([response1, 0]);
    expect(result.current).toMatchInlineSnapshot(`
Object {
  "range": "10 PM - 1 AM CST",
}
`);


    rerender([response2, 0]);
    expect(result.current).toMatchInlineSnapshot(`
Object {
  "range": "10 PM - 12 AM CST",
}
`);
  });
});

describe('getPreChatFields', () => {
  it('returns preChat fields', () => {
    const params: Parameters<typeof getPreChatFields>[0] = [
      { key: 'assignmentId', value: '1' },
      { key: 'userName', value: 'Thomas Andrews' },
    ]
    const result = getPreChatFields(params);
    expect(result).toMatchInlineSnapshot(`
Object {
  "hiddenFields": Object {
    "Assignment_Id": "1",
  },
  "visibleFields": Object {
    "School": Object {
      "isEditableByEndUser": true,
      "value": "",
    },
    "_email": Object {
      "isEditableByEndUser": true,
      "value": "",
    },
    "_firstName": Object {
      "isEditableByEndUser": true,
      "value": "Thomas",
    },
    "_lastName": Object {
      "isEditableByEndUser": true,
      "value": "Andrews",
    },
  },
}
`);
  });
  it('makes visible fields readonly when set with info from accounts', () => {
    const params: Parameters<typeof getPreChatFields>[0] = [
      { key: 'assignmentId', value: '1' },
      { key: 'userFirstName', value: 'Thomas' },
      { key: 'userLastName', value: 'Andrews' },
      { key: 'userEmail', value: 't@t' },
      { key: 'organizationName', value: 'Some place' },
    ]
    const result = getPreChatFields(params);
    expect(result).toMatchInlineSnapshot(`
Object {
  "hiddenFields": Object {
    "Assignment_Id": "1",
    "Email": "t@t",
    "First_Name": "Thomas",
    "Last_Name": "Andrews",
    "School": "Some place",
  },
  "visibleFields": Object {
    "School": Object {
      "isEditableByEndUser": true,
      "value": "Some place",
    },
    "_email": Object {
      "isEditableByEndUser": false,
      "value": "t@t",
    },
    "_firstName": Object {
      "isEditableByEndUser": false,
      "value": "Thomas",
    },
    "_lastName": Object {
      "isEditableByEndUser": false,
      "value": "Andrews",
    },
  },
}
`);
  });
});

const createMockPopup = () => ({
  postMessage: jest.fn(),
  closed: false,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
});

describe('useChatController', () => {
  const mockOpen = jest.fn();
  const mockAddEventListener = jest.fn();
  const mockRemoveEventListener = jest.fn();
  const mockClearInterval = jest.fn();
  const mockSetInterval = jest.fn();
  const mockClearTimeout = jest.fn();
  const mockSetTimeout = jest.fn();

  beforeAll(() => {
    global.window.open = mockOpen;
    global.window.addEventListener = mockAddEventListener;
    global.window.removeEventListener = mockRemoveEventListener;
    global.setInterval = mockSetInterval as any;
    global.clearInterval = mockClearInterval;
    global.setTimeout = mockSetTimeout as any;
    global.clearTimeout = mockClearTimeout;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const preChatFields = getPreChatFields([
    { key: 'userEmail', value: 'alice@example.com' },
  ]);

  const path = 'https://example.com/chat';

  /** 2.1. Hook returns an empty object when `path` is undefined */
  it('returns {} when path is undefined', () => {
    const { result } = renderHook(() => useChatController(undefined, preChatFields));
    expect(result.current).toEqual({});
  });

  /** 2.2. `openChat` is defined only when a path is present */
  it('exposes openChat when path is defined', () => {
    const { result } = renderHook(() => useChatController(path, preChatFields));
    expect(typeof result.current.openChat).toBe('function');
  });

  /** 2.3. `openChat` does nothing if a popup is already open */
  it('does not open a new popup if one is already open', () => {
    const mockPopup = createMockPopup();
    // fake a previous open
    mockOpen.mockReturnValue(mockPopup);
    const { result } = renderHook(() => useChatController(path, preChatFields));

    act(() => {
      // simulate that the first call already created a popup
      result.current.openChat?.();
    });

    // Second call – popup already exists
    act(() => {
      result.current.openChat?.();
    });

    expect(mockOpen).toHaveBeenCalledTimes(1);
  });

  /** 2.3. `openChat` creates a window with correct geometry */
  it('opens a popup with the correct size and position', () => {
    const mockWindow = createMockPopup();
    mockOpen.mockReturnValue(mockWindow);

    const { result } = renderHook(() => useChatController(path, preChatFields));

    act(() => {
      result.current.openChat?.();
    });

    // 1. `window.open` called once
    expect(mockOpen).toHaveBeenCalledTimes(1);

    // 2. Check the options string
    const optionsString = mockOpen.mock.calls[0][2];
    expect(optionsString).toMatch(/width=[^,]+/);
    expect(optionsString).toMatch(/height=[^,]+/);
    expect(optionsString).toMatch(/top=[^,]+/);   // bottom-right calc – exact values are hard to test reliably
    expect(optionsString).toMatch(/left=[^,]+/);   // bottom-right calc – exact values are hard to test reliably
    expect(optionsString).toContain('popup=true');
  });

  /** 2.4. `postMessage` flow – popup receives ready → preChatFields → open */
  it('sends preChatFields and open messages when the child signals ready', () => {
    const mockPopup = createMockPopup();
    mockOpen.mockReturnValue(mockPopup);

    const mockHandleMessage = jest.fn();
    mockAddEventListener.mockImplementation((event: string, cb: () => void) => {
      if (event === 'message') mockHandleMessage.mockImplementation(cb);
    });

    // Set up the interval that checks for `closed`
    mockSetInterval.mockImplementation(() => 42 as any); // fake interval id

    const { result } = renderHook(() => useChatController(path, preChatFields));

    act(() => {
      result.current.openChat?.();
    });

    // After opening the popup we register a `handleMessage` listener
    expect(mockAddEventListener).toHaveBeenCalledWith('message', expect.any(Function), false);

    // Simulate the chat window posting `"ready"`
    const event: MessageEvent = {
      source: mockPopup,
      data: { type: 'ready' } as any,
    } as any;

    // Grab the actual `handleMessage` that was added
    const handleMessage = mockAddEventListener.mock.calls.find(
      (args) => args[0] === 'message'
    )?.[1];
    expect(handleMessage).toBeDefined();
    act(() => {
      handleMessage(event);
    });

    // `init` should have been called → sends `preChatFields` then `open`
    expect(mockPopup.postMessage).toHaveBeenCalledTimes(2);
    expect(mockPopup.postMessage).toHaveBeenNthCalledWith(
      1,
      { type: 'preChatFields', data: preChatFields },
      new URL(path).origin
    );
    expect(mockPopup.postMessage).toHaveBeenNthCalledWith(
      2,
      { type: 'open' },
      new URL(path).origin
    );
  });

  /** 2.5. `openChat` cleans up the interval when the popup closes */
  it('clears the polling interval and removes the message listener when popup closes', () => {
    const mockPopup = createMockPopup();
    const intervalId = 99;
    mockOpen.mockReturnValue(mockPopup);
    mockSetInterval.mockReturnValue(intervalId as any); // fake interval id

    const { result } = renderHook(() => useChatController(path, preChatFields));

    act(() => {
      result.current.openChat?.();
    });

    // Simulate that the popup is closed after 1 tick
    mockPopup.closed = true;  // set closed flag
    act(() => {
      // this calls the interval callback
      const checkClosed = mockSetInterval.mock.calls[0][0];
      checkClosed();
    });

    // Verify cleanup
    expect(mockRemoveEventListener).toHaveBeenCalledWith('message', expect.any(Function), false);
    expect(mockClearInterval).toHaveBeenCalledWith(intervalId);
  });

  /** 2.6. `sendMessage` respects the origin – if the origin does not match it does nothing */
  it('does not postMessage if popup origin does not match path origin', () => {
    const mismatchedPath = 'https://evil.com/evil';
    const { result } = renderHook(() => useChatController(mismatchedPath, preChatFields));

    act(() => {
      result.current.openChat?.();
    });

    // popup opened with wrong origin – postMessage will not be called
    const mockPopup = mockOpen.mock.results[0].value as any;
    expect(mockPopup.postMessage).not.toBeCalled();
  });

  /** 2.7. The effect that watches `preChatFields` sends a message immediately on mount and whenever the preChatFields object changes */
  it('re-sends preChatFields when the payload changes', () => {
    const { result, rerender } = renderHook(
      ({ path, fields }) => useChatController(path, fields),
      {
        initialProps: { path, fields: preChatFields },
      }
    );

    // First render triggers the effect
    const firstPopup = createMockPopup();
    mockOpen.mockReturnValue(firstPopup);

    act(() => {
      result.current.openChat?.();
    });

    const event: MessageEvent = {
      source: firstPopup,
      data: { type: 'ready' } as any,
    } as any;

    // Grab the actual `handleMessage` that was added
    const handleMessage = mockAddEventListener.mock.calls.find(
      (args) => args[0] === 'message'
    )?.[1];
    expect(handleMessage).toBeDefined();
    act(() => {
      handleMessage(event);
    });

    // Now change the fields
    const newFields = getPreChatFields([
      { key: 'userEmail', value: 'bob@example.com' },
    ]);

    act(() => {
      rerender({ path, fields: newFields });
    });

    expect(firstPopup.postMessage).toHaveBeenCalledTimes(3);
    const lastCall = firstPopup.postMessage.mock.lastCall;
    expect(lastCall[0]).toEqual({ type: 'preChatFields', data: newFields });
  });

  /** 2.8. `sendMessage` is a no-op if no popup has been opened */
  it('does not sendMessage when popup.current is null', () => {
    const { rerender } = renderHook(
      ({ path, fields }) => useChatController(path, fields),
      {
        initialProps: { path, fields: preChatFields },
      }
    );

    // First render triggers the effect
    const firstPopup = createMockPopup();
    mockOpen.mockReturnValue(firstPopup);

    // Now change the fields
    const newFields = getPreChatFields([
      { key: 'userEmail', value: 'bob@example.com' },
    ]);

    act(() => {
      rerender({ path, fields: newFields });
    });

    expect(firstPopup.postMessage).toHaveBeenCalledTimes(0);
  });
});
