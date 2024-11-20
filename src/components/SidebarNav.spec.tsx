import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
  cleanup,
} from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { BodyPortalSidebarNav, SidebarNav, SidebarNavBase } from "./SidebarNav";
import "@testing-library/jest-dom";
import { BodyPortalSlotsContext } from "./BodyPortalSlotsContext";

jest.useFakeTimers();

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
    expect(screen.getByTestId("sidebarnav-toggle")).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    act(() => {
      fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
    });

    expect(screen.getByRole("navigation")).toHaveClass("collapsed");
    expect(screen.getByTestId("sidebarnav-toggle")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
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
    render(<SidebarNav isMobile={true}>Content</SidebarNav>);

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
    render(<SidebarNav isMobile={false}>Content</SidebarNav>);

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

  describe("SidebarNavBase", () => {
    it("outside clicks don't set nav to collapsed if the ref is null", () => {
      const setNavCollapsedFn = jest.fn();
      render(
        <SidebarNavBase
          isMobile={true}
          navIsCollapsed={false}
          setNavIsCollapsed={setNavCollapsedFn}
        >
          Content
        </SidebarNavBase>
      );
      // setNavIsCollapsed fires on mount
      expect(setNavCollapsedFn).toHaveBeenCalledTimes(1);
      setNavCollapsedFn.mockReset();
      
      fireEvent.click(document);

      expect(setNavCollapsedFn).not.toHaveBeenCalled();

      cleanup();

      render(
        <SidebarNavBase
          isMobile={true}
          navIsCollapsed={false}
          setNavIsCollapsed={setNavCollapsedFn}
          sidebarNavRef={{ current: null }}
        >
          Content
        </SidebarNavBase>
      );

      setNavCollapsedFn.mockReset();
      fireEvent.click(document);

      expect(setNavCollapsedFn).not.toHaveBeenCalled();
    });
  });

  describe("BodyPortalSidebarNav", () => {
    let root: HTMLElement;

    beforeEach(() => {
      root = document.createElement("main");
      root.id = "root";
      document.body.append(root);
    });

    it("uses a BodyPortal", async () => {
      render(
        <BodyPortalSlotsContext.Provider value={["sidebar", "root"]}>
          <BodyPortalSidebarNav isMobile={false}>
            Sidebar Nav
          </BodyPortalSidebarNav>
          Main
        </BodyPortalSlotsContext.Provider>,
        { container: root },
      );

      expect(document.body).toMatchInlineSnapshot(`
<body>
  <nav
    class="sc-jSMfEi cTSawD"
    data-portal-slot="sidebar"
    data-testid="sidebarnav"
  >
    <span
      data-focus-scope-start="true"
      hidden=""
    />
    <button
      aria-expanded="true"
      aria-label="Collapse navigation"
      class="sc-hKMtZM brWRpF"
      data-testid="sidebarnav-toggle"
    >
      <svg
        fill="none"
        height="10"
        viewBox="0 0 8 10"
        width="8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.1266 5.38862L5.57702 9.83902C5.79166 10.0537 6.13964 10.0537 6.35426 9.83902L6.87333 9.31995C7.0876 9.10568 7.08801 8.75841 6.87424 8.54363L3.34721 4.99999L6.87424 1.45637C7.08801 1.24159 7.0876 0.89432 6.87333 0.680047L6.35426 0.160979C6.13962 -0.0536598 5.79164 -0.0536598 5.57702 0.160979L1.12662 4.61138C0.911981 4.826 0.911981 5.17398 1.1266 5.38862Z"
          fill="#959595"
        />
      </svg>
    </button>
    <div
      class="sc-gsnTZi hSiqlK"
      data-testid="nav-body"
    >
      Sidebar Nav
    </div>
    <span
      data-focus-scope-end="true"
      hidden=""
    />
  </nav>
  <main
    id="root"
  >
    Main
  </main>
</body>
`);
    });

    it("adds animation classes when opening and closing", () => {
      // Start expanded
      render(
        <BodyPortalSlotsContext.Provider value={["sidebar", "root"]}>
          <BodyPortalSidebarNav isMobile={false}>
            Sidebar Nav
          </BodyPortalSidebarNav>
          Main
        </BodyPortalSlotsContext.Provider>,
        { container: root },
      );

      expect(screen.getByRole("navigation")).not.toHaveClass("collapsing");
      expect(screen.getByRole("navigation")).not.toHaveClass("expanding");

      // collapse
      act(() => {
        fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
      });

      expect(screen.getByRole("navigation")).toHaveClass("collapsing");
      expect(screen.getByRole("navigation")).not.toHaveClass("expanding");

      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(screen.getByRole("navigation")).not.toHaveClass("collapsing");

      // expand
      act(() => {
        fireEvent.click(screen.getByTestId("sidebarnav-toggle"));
      });

      expect(screen.getByRole("navigation")).not.toHaveClass("collapsing");
      expect(screen.getByRole("navigation")).toHaveClass("expanding");

      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(screen.getByRole("navigation")).not.toHaveClass("expanding");
    });
  });

  it("handles the onScroll event", async () => {
    render(
      <SidebarNav isMobile={false}>
        {() => <div style={{ height: "200vh" }}>Content</div>}
      </SidebarNav>,
    );

    const navBody = screen.getByTestId("nav-body");

    act(() => {
      fireEvent.scroll(navBody, { target: { scrollTop: 100 } });
    });

    await waitFor(() => {
      expect(navBody.scrollTop).toBe(100);
    });
  });
});
