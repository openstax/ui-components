import { act, render, screen } from "@testing-library/react";
import { useSetAppError, useMatchMediaQuery } from "./hooks";
import { ErrorContext } from "./contexts";

const MediaComponent = ({ query }: { query: string }) => {
  const matches = useMatchMediaQuery(query);
  return (
    <div data-testid="result">{matches ? "Matches" : "Does not match"}</div>
  );
};

describe("useSetAppError", () => {
  let setErrorMock: jest.Mock;

  beforeEach(() => {
    setErrorMock = jest.fn();
  });

  it("should pass error to context setError", () => {
    const ErrorComponent = () => {
      useSetAppError()(new Error("test"));
      return null;
    };

    render(
      <ErrorContext.Provider value={{ initialized: true, error: null, setError: setErrorMock }}>
        <ErrorComponent />
      </ErrorContext.Provider>,
    );

    expect(setErrorMock).toHaveBeenCalledWith(new Error("test"));
  });

  it("should clear error when called with null", () => {
    const ResetComponent = () => {
      useSetAppError()(null);
      return null;
    };

    render(
      <ErrorContext.Provider value={{ initialized: true, error: null, setError: setErrorMock }}>
        <ResetComponent />
      </ErrorContext.Provider>,
    );

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
