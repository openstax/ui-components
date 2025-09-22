// __tests__/useScript.test.tsx
import { act, renderHook } from '@testing-library/react-hooks';
import { BusinessHours, BusinessHoursResponse, getBusinessHours, getChatEmbed, useScript } from './hooks';   // ← your hook


describe('useScript', () => {
  const src = 'https://example.com/foo.js';
  
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
    const newSrc = 'https://example.com/bar.js';
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

class Response {
  constructor(
    private readonly bodyInit: any,
    private readonly options: { status: number }
  ) {}

  async json() {
    return Promise.resolve(JSON.parse(this.bodyInit));
  }

  get status() {
    return this.options.status;
  }

  get ok() {
    return this.options.status === 200;
  }
}

describe('getBusinessHours', () => {
  const testUrl = 'https://example.com/api/businessHours';
  const fetchMock = jest.fn();
  const originalFetch = global.fetch;

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(0);
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  beforeEach(() => {
    // Reset the fetch spy before every test
    global.fetch = fetchMock;
  });

  it('resolves with the JSON body when the HTTP status is OK', async () => {
    const mockJson = { foo: 'bar' };
    const fetchSpy = fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(mockJson), { status: 200 })
      );

    const result = await getBusinessHours(testUrl);
    expect(fetchSpy).toHaveBeenCalledWith(testUrl, { signal: undefined });
    expect(result).toEqual(mockJson);
  });

  it('throws an error when the response status is not OK', async () => {
    const fetchSpy = fetchMock
      .mockResolvedValueOnce(new Response(null, { status: 404 }));

    await expect(getBusinessHours(testUrl)).rejects.toThrow('HTTP 404');
    expect(fetchSpy).toHaveBeenCalledWith(testUrl, { signal: undefined });
  });

  it('propagates fetch rejections (network errors)', async () => {
    const fetchSpy = fetchMock.mockRejectedValueOnce(
      new Error('network failure')
    );

    await expect(getBusinessHours(testUrl)).rejects.toThrow('network failure');
    expect(fetchSpy).toHaveBeenCalledWith(testUrl, { signal: undefined });
  });

  it('passes through the AbortSignal when provided', async () => {
    const abort = new AbortController();
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({}), { status: 200 }));

    await getBusinessHours(testUrl, abort.signal);
    expect(global.fetch).toHaveBeenCalledWith(testUrl, { signal: abort.signal });
  });
});


// Helper – a minimal BusinessHoursResponse that matches the shape your real code expects
const makeMockResponse = (
  isActive: boolean,
  hours: BusinessHours[] = []
): BusinessHoursResponse => ({
  businessHoursInfo: {
    isActive,
    businessHours: hours,
  },
});
describe('getChatEmbed', () => {
  const testUrl = 'https://example.com/api/businessHours';
  const fetchMock = jest.fn();
  const originalFetch = global.fetch;

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(Date.UTC(2025, 9, 0, 1, 0, 0));
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });
  
  beforeEach(() => {
    global.fetch = fetchMock;
    jest.spyOn(global, 'fetch').mockReset();
    delete (window as any).embeddedservice_bootstrap;
  });

  const mockHours: BusinessHours[] = [
    {
      startTime: Date.UTC(2025, 9, 0, 0, 0, 0),
      endTime: Date.UTC(2025, 9, 0, 235, 0, 0)
    },
  ];

  it('returns null if the business hours block is inactive', async () => {
    fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(makeMockResponse(false, mockHours)), {
          status: 200,
        })
      );

    const res = await getChatEmbed(testUrl);
    expect(res).toBeNull();
  });

  it('returns null when today\'s hours are missing', async () => {

    const fakeHours: BusinessHours[] = [
      {
        startTime: Date.UTC(2025, 8, 0, 0, 0, 0),
        endTime: Date.UTC(2025, 8, 0, 5, 0, 0)
      },
    ];

    fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(makeMockResponse(true, fakeHours)), {
          status: 200,
        })
      );

    const res = await getChatEmbed(testUrl);
    expect(res).toBeNull();
  });

  it('returns the today\'s hours record + an openChat thunk when active', async () => {
    const fetchSpy = fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(makeMockResponse(true, mockHours)), {
          status: 200,
        })
      );

    // Mock the global service that the real implementation calls
    const launchChatMock = jest.fn().mockResolvedValueOnce('chat launched');
    const svcMock = {
      utilAPI: { launchChat: launchChatMock },
    };

    // We need to expose it on window
    const win = window as any;
    win.embeddedservice_bootstrap = svcMock;

    const result = await getChatEmbed(testUrl);

    // The result should contain all properties of todaysHours *and* the openChat thunk
    expect(result).not.toBeNull();

    // openChat should still be a function
    expect(typeof result?.openChat).toBe('function');

    // Calling the thunk should use the mocked launchChat
    const chatRes = await result?.openChat();
    expect(launchChatMock).toHaveBeenCalledTimes(1);
    expect(chatRes).toBe('chat launched');

    // fetch should have been called with the original URL + signal
    expect(fetchSpy).toHaveBeenCalledWith(testUrl, { signal: undefined });
  });

  it('openChat resolves to undefined if the bootstrap service is missing', async () => {
    // Normal active response
    fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(makeMockResponse(true, mockHours)), {
          status: 200,
        })
      );

    // Do *not* attach embeddedservice_bootstrap to window
    const res = await getChatEmbed(testUrl);
    // The thunk still exists but returns undefined when invoked
    const chatRes = await res?.openChat();
    expect(chatRes).toBeUndefined();
  });

  it('openChat does not get called when getChatEmbed returns null', async () => {
    // Inactive – nothing should be returned, so openChat thunk is never created
    fetchMock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(makeMockResponse(false)), {
          status: 200,
        })
      );

    const res = await getChatEmbed(testUrl);
    expect(res).toBeNull();
  });

  it('throws if fetch inside getBusinessHours throws', async () => {
    // Let getBusinessHours throw – that exception should bubble out of getChatEmbed
    fetchMock
      .mockRejectedValueOnce(new Error('network failure'));

    await expect(getChatEmbed(testUrl)).rejects.toThrow('network failure');
  });
});
