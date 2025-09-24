import { fireEvent, render, screen } from '@testing-library/react';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { formatBusinessHoursRange, HelpMenu, HelpMenuItem } from '.';
import { NavBar } from '../NavBar';
import { embeddedChatEvents } from './constants';
import { BusinessHoursResponse } from './hooks';

describe('HelpMenu', () => {
  let root: HTMLElement;

  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
    jest.useFakeTimers();
    jest.setSystemTime(0);
    global.fetch = jest.fn().mockImplementation((...args: Parameters<typeof fetch>) => {
      const [input,] = args;
      if (typeof input !== 'string') throw new Error('Expected string')
      if (input.indexOf('businesshours') !== -1) {
        const hours: BusinessHoursResponse = {
          businessHoursInfo: {
            businessHours: [
              {
                startTime: 0,
                endTime: 1000
              }
            ]
          }
        };
        return {
          json: jest.fn().mockResolvedValue(hours),
          ok: true,
        };
      }
      throw new Error(`404: ${input}`);
    })
  })

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', async () => {
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

    // Reveal the default button in the help menu
    fireEvent.click(await screen.findByText('Help'));
    screen.getByText(/Report an issue/i);

    expect(document.body).toMatchSnapshot();
  });

  it('replaces button when SDK is ready', async () => {
    // mock the global embeddedservice_bootstrap object
    const eventListeners: Parameters<typeof window.addEventListener>[] = [];
    const mockSvc = {
      init: jest.fn().mockImplementation(() => {
        // Find and call the ready event (in theory how it should work IRL)
        const ready = eventListeners.find(([name]) => name === embeddedChatEvents.READY);
        if (ready !== undefined) {
          (ready[1] as any)();
        }
      }),
      utilAPI: { launchChat: jest.fn() },
      prechatAPI: {
        setHiddenPrechatFields: jest.fn(),
        setVisiblePrechatFields: jest.fn(),
      },
      settings: {},
    };
    (window as any).embeddedservice_bootstrap = mockSvc;
    jest.spyOn(window, 'addEventListener').mockImplementation(
      (...args: Parameters<typeof window.addEventListener>) => {
        eventListeners.push(args);
      }
    );
  
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );
    fireEvent.click(await screen.findByText('Help'));
    fireEvent.click(await screen.findByRole('menuitem', { name: /chat with us/i }));

    expect(mockSvc.settings).toMatchInlineSnapshot(`
Object {
  "hideChatButtonOnLoad": true,
  "language": "en_US",
}
`);
    expect(
      eventListeners.filter(
        ([name]) => Object.values(embeddedChatEvents).includes(name as any))
      ).toMatchInlineSnapshot(`
Array [
  Array [
    "onEmbeddedMessagingReady",
    [Function],
  ],
  Array [
    "onEmbeddedMessagingBusinessHoursStarted",
    [Function],
  ],
  Array [
    "onEmbeddedMessagingBusinessHoursEnded",
    [Function],
  ],
]
`);
    expect(mockSvc.prechatAPI.setHiddenPrechatFields.mock.calls).toMatchInlineSnapshot(`Array []`);
    expect(mockSvc.prechatAPI.setVisiblePrechatFields.mock.calls).toMatchInlineSnapshot(`Array []`);
    expect(mockSvc.init).toHaveBeenCalled();
    expect(mockSvc.utilAPI.launchChat).toHaveBeenCalled();
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

