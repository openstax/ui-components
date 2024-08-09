import { useMatchMediaQuery } from "../../src/hooks";
import styled, { createGlobalStyle } from "styled-components";
import { SidebarNav, SidebarNavStyles } from "./SidebarNav";

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

export const Default = () => {
  const isMobile = useMatchMediaQuery("(max-width: 620px)");

  return <>
    <GlobalStyle />
    <Wrapper>
      <StyledSidebarNav aria-label="Example Sidebar Nav" isMobile={isMobile}>
        {({ navIsCollapsed, setNavIsCollapsed }) => (
          <>
            <ul>
              <li>
                <a href="#" onClick={() => setNavIsCollapsed(!navIsCollapsed)}>
                  {navIsCollapsed ? "H" : "Home"}
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setNavIsCollapsed(!navIsCollapsed)}>
                  {navIsCollapsed ? "A" : "About"}
                </a>
              </li>
            </ul>
            {!navIsCollapsed ? <p>Some other content</p> : null}
          </>
        )}
      </StyledSidebarNav>
        <StyledMain style={{ padding: "4rem", marginLeft: (isMobile ? SidebarNavStyles.collapsedWidth : '') }}>
        <h1>Main content</h1>
      </StyledMain>
    </Wrapper>
  </>
};
