import { useMatchMediaQuery } from "../../src/hooks";
import styled, { createGlobalStyle, css } from "styled-components";
import { SidebarNav, SidebarNavStyles } from "./SidebarNav";
import React from "react";

const GlobalStyle = createGlobalStyle`
  html, body, #ladle-root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #ladle-root {
    display: flex;
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

const StyledSidebarNav = styled(SidebarNav)`
  overflow: auto;
  grid-area: nav;
  padding: 6rem 2rem;

  ul {
    list-style: none;
    padding: 0;
  }
`;

const StyledMain = styled.main`
  .mobile + & {
    margin-left: 5.6rem;
  }
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

const items = ["Home", "About", "Services", "Contact", ...Array.from({length: 50}, (_, i)=> (i + 1).toString())];

export const Default = () => {
  const isMobile = useMatchMediaQuery("(max-width: 620px)");
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return <>
    <GlobalStyle />
    <Wrapper>
      <StyledSidebarNav isMobile={isMobile}>
        {({ setNavIsCollapsed, navIsCollapsed }) =>
            <ul>
              {items.map((item, index) => (
                <NavItem key={index} active={activeItem === item}>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    if (navIsCollapsed) {
                      setNavIsCollapsed(false);
                    } else {
                      setActiveItem(item);
                      setNavIsCollapsed(isMobile);
                    }
                  }}>
                    {item}
                  </a>
                </NavItem>
              ))}
            </ul>
        }
      </StyledSidebarNav>
      <StyledMain style={{ padding: "4rem", marginLeft: (isMobile ? SidebarNavStyles.collapsedWidth : '') }}>
        <h1>
          Main content
          <p><a href="#">focusable element</a></p>
        </h1>
      </StyledMain>
    </Wrapper>
  </>
};
