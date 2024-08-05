import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { SidebarNav } from "./SidebarNav";
import "@testing-library/jest-dom";

describe("SidebarNav", () => {
  let user: UserEvent;

  beforeAll(() => {
    user = userEvent.setup();
  });

  beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation(() => {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders header and footer when provided", () => {
    const header = <div>Header</div>;
    const footer = <div>Footer</div>;
    render(
      <SidebarNav
        navHeader={header}
        navFooter={footer}
        mobileBreakpoint="100px"
      >
        Content
      </SidebarNav>,
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders header and footer functions", () => {
    const header = <div>Header</div>;
    const footer = <div>Footer</div>;
    render(
      <SidebarNav
        navHeader={() => header}
        navFooter={() => footer}
        mobileBreakpoint="100px"
      >
        Content
      </SidebarNav>,
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("toggles nav collapse on button click", async () => {
    window.matchMedia = jest.fn().mockImplementation(() => {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const component = render(<SidebarNav>Content</SidebarNav>);
    expect(component.asFragment()).toMatchSnapshot();

    expect(screen.getByRole("navigation")).not.toHaveClass("collapsed");

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    expect(screen.getByRole("navigation")).toHaveClass("collapsed");
    expect(component.asFragment()).toMatchSnapshot();

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    expect(screen.getByRole("navigation")).not.toHaveClass("collapsed");

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });
    // Separate act so the classname gets updated
    act(() => {
      fireEvent.animationEnd(screen.getByTestId("sidebarnav"));
    });

    expect(screen.getByRole("navigation")).not.toHaveClass("expanding");
  });

  it("displays modal on mobile", async () => {
    render(
      <SidebarNav isMobile={true}>
        {({ setNavIsCollapsed }) => (
          <button
            data-testid="close-sidebar"
            onClick={() => setNavIsCollapsed(true)}
          >
            Close
          </button>
        )}
      </SidebarNav>,
    );

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    act(() => {
      user.type(document.body, "{Escape}");
    });

    await waitFor(() => {
      expect(screen.queryByTestId("sidebarnav-modal")).not.toBeInTheDocument();
    });
  });
});
