import { useMatchMediaQuery } from "../hooks";
import {
  BodyPortalSidebarNav,
  SidebarNav,
  SidebarNavStyles,
} from "./SidebarNav";
import { BodyPortalSlotsContext } from "./BodyPortalSlotsContext";
import { BodyPortal } from "./BodyPortal";
import { NavBar } from "./NavBar";
import { NavBarLogo } from "./NavBarLogo";
import React from "react";
import { breakpoints } from "../theme";
import { NavBarPopoverButton, PopoverContainer } from "./NavBarMenuButtons";
import "./SidebarNav.stories.css";
import "../theme/theme.css";

const GlobalStyle = () => <style>{`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`}</style>;

const BodyPortalGlobalStyle = () => <style>{`
  body {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "sidebar nav" "sidebar main";
    overflow: hidden;
    height: 100vh;
    background: #fff;

    nav[data-portal-slot="sidebar"] {
      grid-area: sidebar;
    }

    /* Not tag-qualified: NavBar's element is configurable via tagName */
    [data-portal-slot="nav"] {
      grid-area: nav;
    }

    main {
      grid-area: main;
      overflow: hidden auto;
      display: flex;
      flex-direction: column;
      place-content: center;
      align-items: center;
      text-align: center;
    }
  }

  #ladle-root {
    position: absolute;
    right: 0;
  }
`}</style>;

const items = [
  "Home",
  "About",
  "Services",
  "Contact",
  ...Array.from({ length: 50 }, (_, i) => (i + 1).toString()),
];

const NavItemsList = ({
  items,
  setNavIsCollapsed,
  navIsCollapsed,
  isMobile,
}: {
  items: string[];
  setNavIsCollapsed: (_: boolean) => void;
  navIsCollapsed: boolean;
  isMobile: boolean;
}) => {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="story-sidebar-nav-item">
          <a
            href="#"
            style={activeItem === item ? { backgroundColor: "#007bff", color: "white" } : undefined}
            onClick={(e) => {
              e.preventDefault();
              if (navIsCollapsed) {
                setNavIsCollapsed(false);
              } else {
                setActiveItem(item);
                setNavIsCollapsed(isMobile);
              }
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

const SidebarNavAndMain = () => {
  const isMobile = useMatchMediaQuery(
    `(max-width: ${breakpoints.mobileNavBreak}em)`,
  );

  return (
    <>
      <GlobalStyle />
      <div className="story-sidebar-wrapper">
        <SidebarNav className="story-sidebar-nav" ariaLabel="Main navigation">
          {({ setNavIsCollapsed, navIsCollapsed, isMobile }) => (
            <NavItemsList
              items={items}
              setNavIsCollapsed={setNavIsCollapsed}
              navIsCollapsed={navIsCollapsed}
              isMobile={isMobile}
            />
          )}
        </SidebarNav>
        <main
          className="story-sidebar-main"
          style={{
            padding: "4rem",
            marginLeft: isMobile ? SidebarNavStyles.collapsedWidth : "",
          }}
        >
          <h1>
            Main content
            <p>
              <a href="#">focusable element</a>
            </p>
          </h1>
        </main>
      </div>
    </>
  );
};

const BodyPortalSidebarNavAndMain = () => {
  return (
    <BodyPortalSlotsContext.Provider value={["sidebar", "nav", "main"]}>
      <BodyPortalGlobalStyle />
      <div className="story-sidebar-wrapper">
        <BodyPortalSidebarNav className="story-sidebar-nav" ariaLabel="Header navigation" navHeader={<NavBarLogo alt="logo" />}>
          {({ setNavIsCollapsed, navIsCollapsed, isMobile }) => (
            <NavItemsList
              items={items}
              setNavIsCollapsed={setNavIsCollapsed}
              navIsCollapsed={navIsCollapsed}
              isMobile={isMobile}
            />
          )}
        </BodyPortalSidebarNav>
        <NavBar ariaLabel="Main navigation">
          <h1>Title</h1>
          <NavBarPopoverButton className="story-sidebar-info-button" label="Menu">
            <PopoverContainer>
              <button>Example button</button>
              <button>Another button</button>
            </PopoverContainer>
          </NavBarPopoverButton>
        </NavBar>
        <BodyPortal className="story-sidebar-main story-sidebar-main-portal" tagName="main" slot="main">
          <h1>
            Main content
            <p>
              <a href="#">focusable element</a>
            </p>
            <p>{Date.now().toString()}</p>
          </h1>
        </BodyPortal>
      </div>
    </BodyPortalSlotsContext.Provider>
  );
};

export const UsingBodyPortal = () => {
  return (
    <BodyPortalSlotsContext.Provider value={["sidebar", "nav", "main"]}>
      <BodyPortalSidebarNavAndMain />
    </BodyPortalSlotsContext.Provider>
  );
};

export const WithoutBodyPortal = () => {
  return <SidebarNavAndMain />;
};
