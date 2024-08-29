import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { BodyPortalSidebarNav, SidebarNav } from "./SidebarNav";
import "@testing-library/jest-dom";
import { BodyPortalSlotsContext } from "./BodyPortalSlotsContext";

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
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-expanded", "true");

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    expect(screen.getByRole("navigation")).toHaveClass("collapsed");
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-expanded", "false");
    expect(component.asFragment()).toMatchSnapshot();

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    expect(screen.getByRole("navigation")).not.toHaveClass("collapsed");
  });

  it("is dismissable on mobile", async () => {
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

    act(() => {
      user.type(document.body, "{Escape}");
    });

    await waitFor(() => {
      expect(screen.getByRole("navigation")).toHaveClass("collapsed");
    });
  });

  it("collapses on outside click", async () => {
    render(
      <SidebarNav isMobile={true}>
        Content
      </SidebarNav>
    );

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    fireEvent.mouseDown(screen.getByTestId("sidebarnav"));

    await waitFor(() => {
      expect(screen.getByTestId("sidebarnav")).not.toHaveClass("collapsed");
    });

    fireEvent.mouseDown(document);

    await waitFor(() => {
      expect(screen.getByTestId("sidebarnav")).toHaveClass("collapsed");
    });
  });

  it("doesn't collapse on outside click when mobile is false", async () => {
    render(
      <SidebarNav isMobile={false}>
        Content
      </SidebarNav>
    );

    await waitFor(() => {
      expect(screen.getByTestId("sidebarnav")).not.toHaveClass("collapsed");
    });

    fireEvent.mouseDown(screen.getByTestId("sidebarnav"));

    await waitFor(() => {
      expect(screen.getByTestId("sidebarnav")).not.toHaveClass("collapsed");
    });

    fireEvent.mouseDown(document);

    await waitFor(() => {
      expect(screen.getByTestId("sidebarnav")).not.toHaveClass("collapsed");
    });
  });

  it("uses a body portal", async () => {
    expect(render(
      <BodyPortalSlotsContext.Provider value={[
        'sidebar'
      ]}>
        <BodyPortalSidebarNav isMobile={false}>
          Content
        </BodyPortalSidebarNav>
      </BodyPortalSlotsContext.Provider>
    ).baseElement).toMatchSnapshot();
  });
});
