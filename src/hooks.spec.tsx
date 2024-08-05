import { act, render, screen } from "@testing-library/react";
import { useSetAppError, useMatchMediaQuery } from "./hooks";
import sentryTestkit from "sentry-testkit";
import * as Sentry from "@sentry/react";
import { ErrorContext } from "./contexts";

const { testkit, sentryTransport } = sentryTestkit();

const MediaComponent = ({ query }: { query: string }) => {
  const matches = useMatchMediaQuery(query);
  return (
    <div data-testid="result">{matches ? "Matches" : "Does not match"}</div>
  );
};

describe("useSetAppError", () => {
  let setErrorMock: jest.Mock;

  beforeEach(() => {
    Sentry.init({
      dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
      transport: sentryTransport,
    });
    setErrorMock = jest.fn();
    testkit.reset();
  });

  it("should capture exception with Sentry and set error", () => {
    const ErrorComponent = () => {
      useSetAppError()(new Error("test"));
      return null;
    };

    render(
      <ErrorContext.Provider value={{ error: null, setError: setErrorMock }}>
        <ErrorComponent />
      </ErrorContext.Provider>,
    );

    expect(testkit.reports()).toHaveLength(1);
    expect(setErrorMock).toHaveBeenCalledWith({
      error: new Error("test"),
      type: "Error",
      eventId: testkit.reports()[0].originalReport.event_id,
    });
  });

  it("should clear error when called with null", () => {
    const ResetComponent = () => {
      useSetAppError()(null);
      return null;
    };

    render(
      <ErrorContext.Provider value={{ error: null, setError: setErrorMock }}>
        <ResetComponent />
      </ErrorContext.Provider>,
    );

    expect(testkit.reports()).toHaveLength(0);
    expect(setErrorMock).toHaveBeenCalledWith(null);
  });
});

describe("useMatchMediaQuery", () => {
  let listener: (e: MediaQueryListEvent) => void;

  beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => {
      return {
        matches: query === "(min-width: 600px)",
        addListener: (fn: (e: MediaQueryListEvent) => void) => {
          listener = fn;
        },
        removeListener: jest.fn(),
      };
    });
  });

  test("it updates based on media query", () => {
    render(<MediaComponent query="(min-width: 600px)" />);
    expect(screen.getByTestId("result").textContent).toBe("Matches");
  });

  test("it updates when the media query changes", () => {
    const component = render(<MediaComponent query="(min-width: 600px)" />);

    act(() => {
      listener!({ matches: false } as MediaQueryListEvent);
      component.rerender(<MediaComponent query="(min-width: 600px)" />);
    });
    expect(screen.getByTestId("result").textContent).toBe("Does not match");

    act(() => {
      listener!({ matches: true } as MediaQueryListEvent);
      component.rerender(<MediaComponent query="(min-width: 600px)" />);
    });
    expect(screen.getByTestId("result").textContent).toBe("Matches");
  });

  test("it attaches and detaches event listeners", () => {
    const mock = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    } as any as MediaQueryList;

    jest.spyOn(window, "matchMedia").mockImplementation(() => mock);

    const component = render(<MediaComponent query={"(min-width: 20rem)"} />);

    act(() => {});

    expect(mock.addEventListener).toHaveBeenCalled();

    component.unmount();

    expect(mock.removeEventListener).toHaveBeenCalled();
  });
});
