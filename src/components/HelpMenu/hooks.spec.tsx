// __tests__/useScript.test.tsx
import { act, renderHook } from '@testing-library/react-hooks';
import { EmbedInterface, getChatEmbed, useBusinessHours, usePreChatFields, useScript, WindowWithEmbed } from './hooks';   // ← your hook
import { embeddedChatEvents } from './constants';


describe('useScript', () => {
  const src = 'http://localhost/foo.js';
  
  afterEach(() => {
    document.querySelectorAll('script').forEach((s) => s.remove());
  });

  it('returns ready=true immediately if the script already exists', () => {
    // ── Setup ──
    const existing = document.createElement('script');
    existing.src = src;
    document.body.appendChild(existing);

    // ── Render Hook ──
    const { result } = renderHook(() => useScript(src));

    // ── Assertions ──
    expect(result.current.ready).toBe(true);
    expect(result.current.error).toBeNull();
    // No new script should have been appended
    const scripts = document.querySelectorAll(`script[src="${src}"]`);
    expect(scripts.length).toBe(1);
  });

  it('appends a script and sets ready=true on load', () => {
    const { result } = renderHook(() => useScript(src));

    // At the beginning the hook has not yet fired the onload
    expect(result.current.ready).toBe(false);
    expect(result.current.error).toBeNull();

    // Grab the script that was just inserted
    const script = document.querySelector(`script[src="${src}"]`);
    expect(script).not.toBeNull();

    // ── Simulate load event ──
    act(() => {
      script?.dispatchEvent(new Event('load'));
    });

    // After the event the state should be ready
    expect(result.current.ready).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('sets error when the script fails to load', () => {
    const { result } = renderHook(() => useScript(src));

    // Grab the script that was just inserted
    const script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
    expect(script).not.toBeNull();

    // ── Simulate error event ──
    act(() => {
      script?.dispatchEvent(new Event('error'));
    });

    expect(result.current.error).toEqual(
      new Error(`Failed to load ${src}`)
    );
    expect(result.current.ready).toBe(false);
  });

  it('re-runs effect when src changes', () => {
    const newSrc = 'http://localhost/bar.js';
    const { result, rerender } = renderHook(
      ({ url }) => useScript(url),
      { initialProps: { url: src } }
    );

    // First load
    const script1 = document.querySelector(`script[src="${src}"]`);
    act(() => { script1?.dispatchEvent(new Event('load')) });

    expect(result.current.ready).toBe(true);

    // Now change the prop
    rerender({ url: newSrc });

    // New script should be inserted
    const script2 = document.querySelector(`script[src="${newSrc}"]`);
    expect(script2).not.toBeNull();
    expect(script1).not.toBe(script2);

    // Simulate its load
    act(() => { script2?.dispatchEvent(new Event('load')) });

    expect(result.current.ready).toBe(true);
  });

  it('does not append a duplicate script when the same src is used in multiple hook instances', () => {
    const { result: result1 } = renderHook(() => useScript(src));
    const { result: result2 } = renderHook(() => useScript(src));

    const scripts = document.querySelectorAll(`script[src="${src}"]`);
    // Even though we rendered the hook twice, only one <script> should exist
    expect(scripts.length).toBe(1);

    // Both hook instances should see the same ready state
    const script = scripts[0];
    act(() => { script.dispatchEvent(new Event('load')) });

    expect(result1.current.ready).toBe(true);
    expect(result2.current.ready).toBe(true);
  });
});

describe('useBusinessHours', () => {
  const makeResponse = (body: any, ok = true, status = 200) => ({
    ok,
    status,
    json: async () => body,
  });

  const createMockFetch = (handler: (input: RequestInfo, init?: RequestInit) => Promise<any>) => {
    return jest.fn(handler) as jest.Mock;
  };

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

  it('fetches business hours and sets hours on success', async () => {
    const validResp = {
      businessHoursInfo: {
        businessHours: [{ startTime: 1000, endTime: 2000 }],
      },
    };

    global.fetch = createMockFetch(() => Promise.resolve(makeResponse(validResp)));

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });

    // Wait for the first async fetch to resolve
    await waitForNextUpdate();

    expect(result.current.hours).toEqual(validResp);
    expect(result.current.error).toBeNull();
  });

  it('sets error when response shape is invalid', async () => {
    const badResp = { bogus: 'data' };

    global.fetch = createMockFetch(() => Promise.resolve(makeResponse(badResp)));

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });

    await waitForNextUpdate();

    expect(result.current.hours).toBeNull();
    expect(result.current.error).toEqual(new Error('Invalid business hours response'));
  });

  it('sets error on HTTP error', async () => {
    global.fetch = createMockFetch(() =>
      Promise.resolve(makeResponse({}, false, 500))
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });

    await waitForNextUpdate();

    expect(result.current.hours).toBeNull();
    expect(result.current.error).toEqual(new Error('HTTP 500'));
  });

  it('cancels previous request on new fetch and ignores AbortError', async () => {
    const controllerStub = Object.assign(new AbortController(), {
      abort: jest.fn()
    });
    jest.spyOn(global, 'AbortController').mockReturnValue(controllerStub);

    const fetchStub = createMockFetch(() => Promise.reject({ name: 'AbortError' }));

    global.fetch = fetchStub as any;

    const { result, unmount } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    // Act: Trigger READY (the hook will start the fetch)
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });

    // Immediately unmount before the promise resolves
    unmount();
 
    // abort() should have been called
    expect(controllerStub.abort).toHaveBeenCalled();
    // No error should be set because the promise was aborted
    expect(result.current.error).toBeNull();
  });

  it('aborts the previous request when a new fetch starts', async () => {
    const controllerStub = Object.assign(new AbortController(), {
      abort: jest.fn()
    });
    jest.spyOn(global, 'AbortController').mockReturnValue(controllerStub);

    // First fetch never resolves, second fetch resolves immediately
    global.fetch = createMockFetch(() => {
      new Promise((resolve) => { setTimeout(resolve, Infinity) }); // First – stuck
      throw new Error('unreachable');
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY))} );
    
    // Now we do a real response, the first should be aborted
    global.fetch = createMockFetch(() => Promise.resolve(makeResponse({
      businessHoursInfo: {
        businessHours: [{ startTime: 1000, endTime: 2000 }],
      },
    })));

    // Trigger a BUSINESS_HOURS_STARTED event – this should start a *new* fetch
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_STARTED))} );

    // `abort()` of the previous controller must have run
    expect(controllerStub.abort).toHaveBeenCalledTimes(1);

    await waitForNextUpdate();  // second update from the hook

    expect(result.current.hours).not.toBeNull();
  });

  it('does not refetch when last fetch is within timeout', async () => {
    const resp = {
      businessHoursInfo: {
        businessHours: [{ startTime: 1000, endTime: 2000 }],
      },
    };

    global.fetch = createMockFetch(() => Promise.resolve(makeResponse(resp)));

    const { waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); })

    await waitForNextUpdate(); // first fetch

    // 3 seconds later – still within 5s timeout
    act(() => {
      jest.advanceTimersByTime(3000);
      window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_STARTED));
    });

    // The fetch should *not* have been called a second time
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('clears hours on business hours end', async () => {
    const resp = {
      businessHoursInfo: { businessHours: [{ startTime: 0, endTime: 10_000 }] },
    };

    global.fetch = createMockFetch(() => Promise.resolve(makeResponse(resp)));

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });

    await waitForNextUpdate();

    expect(result.current.hours).toEqual(resp);

    // Simulate the end event
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_ENDED)) });

    expect(result.current.hours).toBeNull();
  });

  it('aborts fetch and removes listeners on unmount', async () => {
    const controller = new AbortController();
    const controllerStub = Object.assign(controller, {
      abort: jest.spyOn(controller, 'abort'),
    });
    jest.spyOn(global, 'AbortController').mockReturnValue(controllerStub);

    global.fetch = createMockFetch(async () => {
      await new Promise((reject) => {
        const doAbort = () => {
          controller.signal.removeEventListener('abort', doAbort);
          reject({ name: 'AbortError' });
        };
        controller.signal.addEventListener('abort', doAbort);
      });
    });

    const { unmount } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); });

    unmount();

    expect(controllerStub.abort).toHaveBeenCalled(); // abort called in cleanup
  });

  it('only fetches once per READY event', async () => {
    const resp = {
      businessHoursInfo: { businessHours: [{ startTime: 0, endTime: 1000 }] },
    };

    global.fetch = createMockFetch(() => Promise.resolve(makeResponse(resp)));

    const { waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    // Trigger two READY events
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY))} );
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY))} );

    await waitForNextUpdate();

    expect(global.fetch).toHaveBeenCalledTimes(1); // only one fetch
  });

  it('refetches after timeout expires', async () => {
    const now = 12345678;

    const first = { businessHoursInfo: { businessHours: [{ startTime: now - 1000, endTime: now + 1000 }] } };
    const second = { businessHoursInfo: { businessHours: [{ startTime: now - 2000, endTime: now + 2000 }] } };

    let callCount = 0;
    global.fetch = createMockFetch(() => {
      callCount += 1;
      return Promise.resolve(makeResponse(callCount === 1 ? first : second));
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });

    await waitForNextUpdate();  // first fetch
    expect(result.current.hours).toEqual(first);

    // Wait 4 seconds – still within the 5s timeout
    act(() => { jest.advanceTimersByTime(4000) });
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_STARTED)) });

    expect(global.fetch).toHaveBeenCalledTimes(1); // no refetch

    // Wait 2 more seconds – now outside the timeout
    act(() => { jest.advanceTimersByTime(2000) });
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_STARTED)) });

    await waitForNextUpdate(); // new fetch
    expect(result.current.hours).toEqual(second);
  });

  it('responds correctly to all event types', async () => {
    const resp = { businessHoursInfo: { businessHours: [{ startTime: 0, endTime: 10_000 }] } };
    global.fetch = createMockFetch(() => Promise.resolve(makeResponse(resp)));

    const { result, waitForNextUpdate } = renderHook(() =>
      useBusinessHours('http://localhost/api', 5000)
    );

    // Simulate each event sequentially
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)) });
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_STARTED)) });
    await waitForNextUpdate();
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.BUSINESS_HOURS_ENDED)) });

    expect(result.current.hours).toBeNull();
  });
})

describe('getChatEmbed', () => {
  const buildResponse = (intervals: { start: number; end: number }[]) => ({
    businessHoursInfo: {
      businessHours: intervals.map((i) => ({
        startTime: i.start,
        endTime: i.end,
      })),
    },
  });

  const setWindowBootstrap = (launchChatMock: jest.Mock<any>) => {
    (window as any).embeddedservice_bootstrap = {
      utilAPI: {
        launchChat: launchChatMock,
      },
    };
  };

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('returns null when the current time is outside all business hours', () => {
    const now = Date.UTC(2025, 9);
    // Set the fake clock *outside* the only interval.
    jest.setSystemTime(now);

    const response = buildResponse([
      { start: now + 1_000, end: now + 2_000 }, // starts in the future
    ]);

    const result = getChatEmbed(response);
    expect(result).toBeNull();
  });

  it('returns the matching hour with an openChat function when the current time is inside a single interval', async () => {
    const now = Date.UTC(2025, 9);
    jest.setSystemTime(now);

    const interval = { start: now - 10_000, end: now + 10_000 }; // open now
    const response = buildResponse([interval]);

    const launchMock = jest.fn().mockResolvedValue('chat-launched');
    setWindowBootstrap(launchMock);

    const embed = getChatEmbed(response);
    expect(embed).not.toBeNull();
    if (!embed) throw new Error('embed null');
    expect(embed.startTime).toBe(interval.start);
    expect(embed.endTime).toBe(interval.end);

    // The returned openChat is a *function* that calls launchChat
    const result = await embed.openChat();
    expect(launchMock).toHaveBeenCalledTimes(1);
    expect(result).toBe('chat-launched');
  });

  it('returns the first matching interval when multiple overlap', () => {
    const now = Date.UTC(2025, 9);
    jest.setSystemTime(now);

    // Two overlapping intervals – only the first should be chosen.
    const intervals = [
      { start: now - 20_000, end: now + 20_000 }, // should match
      { start: now - 5_000, end: now + 5_000 },   // also matches
    ];
    const response = buildResponse(intervals);

    const embed = getChatEmbed(response);
    expect(embed).not.toBeNull();
    if (!embed) throw new Error('embed null');
    expect(embed.startTime).toBe(intervals[0].start);
    expect(embed.endTime).toBe(intervals[0].end);
  });

  it('returns undefined from openChat when embeddedservice_bootstrap is not present', async () => {
    const now = Date.UTC(2025, 9);
    jest.setSystemTime(now);

    (window as any).embeddedservice_bootstrap = undefined;

    const response = buildResponse([
      { start: now - 10_000, end: now + 10_000 },
    ]);

    // Do NOT set the window.bootstrap mock.
    const embed = getChatEmbed(response);
    expect(embed).not.toBeNull();
    if (!embed) throw new Error('embed null');

    const result = await embed.openChat(); // should not throw
    expect(result).toBeUndefined();
  });

  it('does not call launchChat until openChat is invoked', async () => {
    const now = Date.UTC(2025, 9);
    jest.setSystemTime(now);

    const response = buildResponse([{ start: now - 10_000, end: now + 10_000 }]);

    const launchMock = jest.fn().mockResolvedValue('chat-launched');
    setWindowBootstrap(launchMock);

    const embed = getChatEmbed(response);
    expect(launchMock).not.toHaveBeenCalled();
    if (!embed) throw new Error('embed null');

    // Call it now
    await embed.openChat();
    expect(launchMock).toHaveBeenCalledTimes(1);
  });

  it('treats the endTime as exclusive', async () => {
    const now = Date.UTC(2025, 9);
    jest.setSystemTime(now);

    const interval = { start: now - 10_000, end: now }; // ends exactly at now
    const response = buildResponse([interval]);

    const embed = getChatEmbed(response);
    // `now` is equal to endTime → should be *outside* the interval
    expect(embed).toBeNull();
  });

  it('does not reuse the same reference across calls', () => {
    const now = Date.UTC(2025, 9);
    jest.setSystemTime(now);

    const interval = { start: now - 10_000, end: now + 10_000 };
    const response = buildResponse([interval]);

    const firstCall = getChatEmbed(response);
    const secondCall = getChatEmbed(response);

    expect(firstCall).not.toBe(secondCall);
    if (!firstCall) throw new Error('firstCall null');
    if (!secondCall) throw new Error('secondCall null');
    // but both should contain the same hour data
    expect(firstCall.startTime).toBe(secondCall.startTime);
    expect(firstCall.endTime).toBe(secondCall.endTime);
  });
});

describe('usePreChatFields', () => {
  let setVisiblePrechatFields: jest.Mock;
  let setHiddenPrechatFields: jest.Mock;
  let mockService: Pick<EmbedInterface, 'prechatAPI'>;
    

  beforeEach(() => {
    setVisiblePrechatFields = jest.fn();
    setHiddenPrechatFields = jest.fn();
    mockService = {
      prechatAPI: {
        setVisiblePrechatFields,
        setHiddenPrechatFields,
      },
    };
    (window as WindowWithEmbed).embeddedservice_bootstrap = mockService as any;
  })

  it('sets hidden pre-chat fields', () => {
    const fields = [
      {key: 'contextId', value: '1'},
      {key: 'userEmail', value: 't@t'},
      {key: 'b', value: '2'},
    ];
    const { unmount } = renderHook(() => usePreChatFields(fields));

    // Should run twice
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); });
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); });

    // Should remove event listener
    unmount();

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); });

    expect(setVisiblePrechatFields.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    Object {
      "_email": Object {
        "isEditableByEndUser": false,
        "value": "t@t",
      },
      "_firstName": Object {
        "isEditableByEndUser": true,
        "value": "",
      },
      "_lastName": Object {
        "isEditableByEndUser": true,
        "value": "",
      },
    },
  ],
  Array [
    Object {
      "_email": Object {
        "isEditableByEndUser": false,
        "value": "t@t",
      },
      "_firstName": Object {
        "isEditableByEndUser": true,
        "value": "",
      },
      "_lastName": Object {
        "isEditableByEndUser": true,
        "value": "",
      },
    },
  ],
]
`);
    expect(setHiddenPrechatFields.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    Object {
      "Context_Id": "1",
      "Email": "t@t",
    },
  ],
  Array [
    Object {
      "Context_Id": "1",
      "Email": "t@t",
    },
  ],
]
`);
  });

  it('immediately sets fields if ready', async () => {
    const { rerender } = renderHook(
      (contactFormParams: {key: string; value: string}[]) => usePreChatFields(contactFormParams),
      { initialProps: [] as {key: string; value: string}[] }
    );

    rerender([{ key: 'userName', value: 'should not set this since we are not ready' } ]);
    rerender([{ key: 'userName', value: 'Echo Zulu November Alpha Mike Echo' }, { key: 'd', value: '2' } ]);
    
    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); });

    rerender([
      { key: 'userFirstName', value: 'Som' },
      { key: 'userLastName', value: 'Buddy' }
    ]);
    
    expect(setVisiblePrechatFields.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    Object {
      "_email": Object {
        "isEditableByEndUser": true,
        "value": "",
      },
      "_firstName": Object {
        "isEditableByEndUser": true,
        "value": "Echo Zulu November Alpha Mike",
      },
      "_lastName": Object {
        "isEditableByEndUser": true,
        "value": "Echo",
      },
    },
  ],
  Array [
    Object {
      "_email": Object {
        "isEditableByEndUser": true,
        "value": "",
      },
      "_firstName": Object {
        "isEditableByEndUser": false,
        "value": "Som",
      },
      "_lastName": Object {
        "isEditableByEndUser": false,
        "value": "Buddy",
      },
    },
  ],
]
`);
    expect(setHiddenPrechatFields.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    Object {},
  ],
  Array [
    Object {
      "First_Name": "Som",
      "Last_Name": "Buddy",
    },
  ],
]
`);
  });

  it('doesn\'t explode when the service is missing', () => {
    const fields = [
      {key: 'c', value: '1'},
      {key: 'd', value: '2'},
    ];
    renderHook(() => usePreChatFields(fields));

    delete (window as WindowWithEmbed).embeddedservice_bootstrap;

    act(() => { window.dispatchEvent(new Event(embeddedChatEvents.READY)); });

    expect(setVisiblePrechatFields).not.toHaveBeenCalled();
    expect(setHiddenPrechatFields).not.toHaveBeenCalled();
  });
});
