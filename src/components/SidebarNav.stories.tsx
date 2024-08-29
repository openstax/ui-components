import { useMatchMediaQuery } from "../../src/hooks";
import styled, { createGlobalStyle, css } from "styled-components";
import {
  BodyPortalSidebarNav,
  SidebarNav,
  SidebarNavStyles,
} from "./SidebarNav";
import React from "react";
import { BodyPortalSlotsContext } from "./BodyPortalSlotsContext";
import { BodyPortal } from "./BodyPortal";
import { NavBar } from "./NavBar";
import { NavBarLogo } from "./NavBarLogo";

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
  grid-template-areas:
    "sidebar nav"
    "sidebar main";
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

.ladle-background, #ladle-root {
display: none;
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

const StyledSidebarNav = styled(SidebarNav)`
  ${sidebarStyles}
`;

const StyledBodyPortalSidebarNav = styled(BodyPortalSidebarNav)`
  ${sidebarStyles}
`;

const StyledMain = styled.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
`;

const StyledBodyPortalMain = styled(BodyPortal)`
  .mobile + & {
    margin-left: 5.6rem;
  }

  padding: 4rem;
  margin-left: ${(props: { isMobile: boolean }) =>
    props.isMobile ? SidebarNavStyles.collapsedWidth : ""};
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

const SidebarNavAndMain = () => {
  const isMobile = useMatchMediaQuery("(max-width: 620px)");
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <StyledSidebarNav isMobile={isMobile}>
          {({ setNavIsCollapsed, navIsCollapsed }) => (
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

const BodyPortalSidebarNavAndMain = () => {
  const isMobile = useMatchMediaQuery("(max-width: 620px)");
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <BodyPortalSlotsContext.Provider value={["sidebar", "nav", "main"]}>
      <BodyPortalGlobalStyle />
      <Wrapper>
        <StyledBodyPortalSidebarNav
          isMobile={isMobile}
          navHeader={<NavBarLogo alt="logo" />}
        >
          {({ setNavIsCollapsed, navIsCollapsed }) => (
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
          )}
        </StyledBodyPortalSidebarNav>
        <NavBar>
          <h1>Title</h1>
        </NavBar>
        <StyledBodyPortalMain tagName="main" slot="main" isMobile={isMobile}>
          <h1>
            Main content
            <p>
              <a href="#">focusable element</a>
            </p>
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
