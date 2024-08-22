import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { LeftArrow } from "./svgs/LeftArrow";
import { RightArrow } from "./svgs/RightArrow";
import { breakpoints, colors, zIndex } from "../theme";
import { useMatchMediaQuery } from "../hooks";
import { FocusScope } from "react-aria";

const collapsedWidth = "5.6rem";
const expandedWidth = "24rem";

const Nav = styled.nav`
  --collapsed-width: ${collapsedWidth};
  --expanded-width: ${expandedWidth};
  width: var(--expanded-width);
  transition: width 300ms ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${colors.palette.neutralBright};
  color: ${colors.palette.neutralThin};
  z-index: ${zIndex.navbar - 1};

  @media (max-width: 15em) {
    --expanded-width: 100vw;
    width: 100vw;
  }

  &.collapsed {
    width: 5.6rem;
  }

  &.mobile {
    position: fixed;
    height: 100%;
  }

  &.mobile ~ main::before {
    content: "";
    background: none;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    position: fixed;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  &.mobile[aria-expanded="true"] ~ main::before,
  &.mobile[aria-expanded="true"] ~ [data-backdrop-target]::before {
    background: rgba(0 0 0 / .7);
    opacity: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const NavHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const NavBody = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const NavFooter = styled.footer`
  button {
    width: 100%;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: 1.8rem;
  width: 1.6rem;
  height: 2.4rem;
  background: #fff;
  padding: 0;
  border: 0;
  cursor: pointer;
  border: 0.1rem solid #959595;
  border-right: 0;
  border-radius: 0.4rem 0 0 0.4rem;
`;

type FunctionRender = (_: {
  navIsCollapsed: boolean;
  setNavIsCollapsed: (_: boolean) => void;
}) => React.ReactNode;

export const SidebarNav = styled(
  ({
    navHeader,
    navFooter,
    children,
    className,
    mobileBreakpoint = `${breakpoints.mobileBreak}em`,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    navHeader?: React.ReactNode | FunctionRender;
    navFooter?: React.ReactNode | FunctionRender;
    children: React.ReactNode | FunctionRender;
    isMobile?: boolean;
    mobileBreakpoint?: string;
  }) => {
    const mobileQueryMatches = useMatchMediaQuery(
      `(max-width: ${mobileBreakpoint})`,
    );
    const isMobile = props.isMobile ?? mobileQueryMatches;

    const [navIsCollapsed, setNavIsCollapsed] = React.useState(isMobile);
    const toggleButtonRef = React.useRef<HTMLButtonElement>(null);
    const sidebarNavRef = React.useRef<HTMLDivElement>(null);

    React.useLayoutEffect(() => {
      setNavIsCollapsed(isMobile);
    }, [isMobile]);

    React.useEffect(() => {
      if (!isMobile || navIsCollapsed) {
        return;
      }

      const handleOutsideEvent = (event: any) => {
        if (
          isMobile &&
          !navIsCollapsed &&
          sidebarNavRef.current &&
          !sidebarNavRef.current.contains(event.target)
        ) {
          setNavIsCollapsed(true);
        }
      };

      const handleKeyPress = (event: KeyboardEvent) => {
        if (isMobile && !navIsCollapsed && event.key === "Escape") {
          setNavIsCollapsed(true);
        }
      };

      document.addEventListener("mousedown", handleOutsideEvent);
      document.addEventListener("touchstart", handleOutsideEvent);
      document.addEventListener("keydown", handleKeyPress);

      return () => {
        document.removeEventListener("click", handleOutsideEvent);
        document.removeEventListener("touchstart", handleOutsideEvent);
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [isMobile, navIsCollapsed, setNavIsCollapsed, sidebarNavRef]);

    const functionRenderArguments = {
      navIsCollapsed,
      setNavIsCollapsed,
    };

    return (
      <FocusScope contain={isMobile && !navIsCollapsed}>
        <Nav
          ref={sidebarNavRef}
          aria-expanded={!navIsCollapsed}
          data-testid="sidebarnav"
          className={classNames(className, {
            collapsed: navIsCollapsed,
            mobile: isMobile,
          })}
          {...props}
        >
          <ToggleButton
            ref={toggleButtonRef}
            data-testid="sidebarnav-toggle"
            className={classNames({ collapsed: navIsCollapsed })}
            onClick={() => setNavIsCollapsed(!navIsCollapsed)}
            aria-label={
              navIsCollapsed ? "Expand navigation" : "Collapse navigation"
            }
          >
            {navIsCollapsed ? <RightArrow /> : <LeftArrow />}
          </ToggleButton>
          {navHeader ? (
            <NavHeader>
              {typeof navHeader === "function"
                ? navHeader(functionRenderArguments)
                : navHeader}
            </NavHeader>
          ) : null}
          <NavBody>
            {typeof children === "function"
              ? children(functionRenderArguments)
              : children}
          </NavBody>
          {navFooter ? (
            <NavFooter>
              {typeof navFooter === "function"
                ? navFooter(functionRenderArguments)
                : navFooter}
            </NavFooter>
          ) : null}
        </Nav>
      </FocusScope>
    );
  },
)``;

export const SidebarNavStyles = {
  Nav,
  NavHeader,
  NavBody,
  NavFooter,
  ToggleButton,
  expandedWidth,
  collapsedWidth,
};
