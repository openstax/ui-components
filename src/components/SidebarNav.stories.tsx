import { useMatchMediaQuery } from "../../src/hooks";
import styled, { createGlobalStyle, css } from "styled-components";
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
import { breakpoints, colors } from "../../src/theme";
import { NavBarPopoverButton, PopoverContainer } from "./NavBarMenuButtons";

const GlobalStyle = createGlobalStyle`
  html, body, #ladle-root {
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    height: 100vh;
  }
`;

const BodyPortalGlobalStyle = createGlobalStyle`
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

    nav[data-portal-slot="nav"] {
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
`;

const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template: "nav main" / auto 1fr;
  overflow: hidden;
  height: 100%;

  main {
    grid-area: main;
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    text-align: center;
  }
`;

const sidebarStyles = css`
  overflow: auto;
  grid-area: nav;
  padding: 2rem;

  ul {
    list-style: none;
    padding: 0;
  }

  ${SidebarNavStyles.ToggleButton} {
    margin-top: 3.2rem;
  }
`;

const mainStyles = css`
  .mobile + & {
    margin-left: 5.6rem;
  }
`;

const StyledSidebarNav = styled(SidebarNav)`
  ${sidebarStyles}
`;

const StyledBodyPortalSidebarNav = styled(BodyPortalSidebarNav)`
  ${sidebarStyles}
`;

const StyledMain = styled.main`
  ${mainStyles}
`;

const StyledBodyPortalMain = styled(BodyPortal)`
  ${mainStyles}
  padding: 4rem;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: black;
    padding: 0.5rem 1rem;
    display: block;
    border-radius: 4px;

    ${(props: { active: boolean }) =>
      props.active &&
      css`
        background-color: #007bff;
        color: white;
      `}
  }
`;

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
        <NavItem key={index} active={activeItem === item}>
          <a
            href="#"
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
        </NavItem>
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
      <Wrapper>
        <StyledSidebarNav ariaLabel="Main navigation">
          {({ setNavIsCollapsed, navIsCollapsed, isMobile }) => (
            <NavItemsList
              items={items}
              setNavIsCollapsed={setNavIsCollapsed}
              navIsCollapsed={navIsCollapsed}
              isMobile={isMobile}
            />
          )}
        </StyledSidebarNav>
        <StyledMain
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
        </StyledMain>
      </Wrapper>
    </>
  );
};

const InfoMenuButton = styled(NavBarPopoverButton)`
  &:hover {
    svg path {
      fill: ${colors.palette.lightBlue};
    }
  }
`;


const BodyPortalSidebarNavAndMain = () => {
  return (
    <BodyPortalSlotsContext.Provider value={["sidebar", "nav", "main"]}>
      <BodyPortalGlobalStyle />
      <Wrapper>
        <StyledBodyPortalSidebarNav ariaLabel="Header navigation" navHeader={<NavBarLogo alt="logo" />}>
          {({ setNavIsCollapsed, navIsCollapsed, isMobile }) => (
            <NavItemsList
              items={items}
              setNavIsCollapsed={setNavIsCollapsed}
              navIsCollapsed={navIsCollapsed}
              isMobile={isMobile}
            />
          )}
        </StyledBodyPortalSidebarNav>
        <NavBar ariaLabel="Main navigation">
          <h1>Title</h1>
          <InfoMenuButton label="Menu">
            <PopoverContainer>
              <button>Example button</button>
              <button>Another button</button>
            </PopoverContainer>
          </InfoMenuButton>
        </NavBar>
        <StyledBodyPortalMain tagName="main" slot="main">
          <h1>
            Main content
            <p>
              <a href="#">focusable element</a>
            </p>
            <p>{Date.now().toString()}</p>
          </h1>
        </StyledBodyPortalMain>
      </Wrapper>
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
