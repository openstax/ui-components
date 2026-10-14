import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
  cleanup,
} from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { createRef } from "react";
import {
  BodyPortalSidebarNav,
  SidebarNav,
  SidebarNavBase,
  SidebarNavStyles,
} from "./SidebarNav";
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

    render(<SidebarNav>Content</SidebarNav>);

    const nav = screen.getByRole("navigation");
    const toggle = screen.getByTestId("sidebarnav-toggle");

    expect(nav).not.toHaveClass("collapsed");
    expect(toggle).not.toHaveClass("collapsed");
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Collapse navigation");

    act(() => {
      fireEvent.click(toggle);
    });

    expect(nav).toHaveClass("collapsed", "collapsing");
    expect(toggle).toHaveClass("collapsed");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAccessibleName("Expand navigation");

    act(() => {
      fireEvent.click(toggle);
    });

    expect(nav).not.toHaveClass("collapsed");
    expect(nav).toHaveClass("expanding");
    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  // The theme defaults now come from src/theme/theme.css and are checked centrally by
  // src/theme/tokens.spec.ts; what is still this component's business is that consumer
  // className and style -- including the documented --sidebar-nav-* hooks -- get through.
  it("keeps consumer className and style alongside its own", () => {
    render(
      <SidebarNav
        className="consumer-class"
        style={{ top: "4rem", "--sidebar-nav-background": "rebeccapurple" }}
      >
        Content
      </SidebarNav>,
    );

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("sidebar-nav", "consumer-class");
    expect(nav.style.top).toBe("4rem");
    expect(nav.style.getPropertyValue("--sidebar-nav-background")).toBe(
      "rebeccapurple",
    );
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

      const nav = screen.getByRole("navigation");

      // The whole point of the portal: the nav escapes the render container and
      // is mounted directly on <body>, ahead of #root because "sidebar" comes
      // before "root" in the slot list.
      expect(root).not.toContainElement(nav);
      expect(nav.parentElement).toBe(document.body);
      expect(nav.nextElementSibling).toBe(root);
      expect(nav).toHaveAttribute("data-portal-slot", "sidebar");

      // ...and it still renders the nav's own content and classes.
      expect(nav).toHaveClass("sidebar-nav");
      expect(screen.getByTestId("nav-body")).toHaveTextContent("Sidebar Nav");
      expect(root).toHaveTextContent("Main");
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

  // These are public through SidebarNavStyles and used to be styled-components,
  // which forwarded refs for free.
  it("forwards refs from the exported sub-components", () => {
    const headerRef = createRef<HTMLElement>();
    const bodyRef = createRef<HTMLDivElement>();
    const footerRef = createRef<HTMLElement>();
    const toggleRef = createRef<HTMLButtonElement>();

    render(
      <div>
        <SidebarNavStyles.NavHeader ref={headerRef} />
        <SidebarNavStyles.NavBody ref={bodyRef} />
        <SidebarNavStyles.NavFooter ref={footerRef} />
        <SidebarNavStyles.ToggleButton ref={toggleRef} />
      </div>,
    );

    expect(headerRef.current).toBeInstanceOf(HTMLElement);
    expect(bodyRef.current).toBeInstanceOf(HTMLDivElement);
    expect(footerRef.current).toBeInstanceOf(HTMLElement);
    expect(toggleRef.current).toBeInstanceOf(HTMLButtonElement);
  });
});
