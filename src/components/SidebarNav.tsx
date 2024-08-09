import React from "react";
import classNames from "classnames";
import styled, { createGlobalStyle } from "styled-components";
import { LeftArrow } from "./svgs/LeftArrow";
import { RightArrow } from "./svgs/RightArrow";
import { breakpoints, colors } from "../theme";
import { Dialog, Modal } from "react-aria-components";
import { useMatchMediaQuery } from "../hooks";

const collapsedWidth = "5.6rem";
const expandedWidth = "24rem";

const GlobalStyle = createGlobalStyle`
  .react-aria-ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: rgba(0 0 0 / .7);
    z-index: 100;
  }
`;

const StyledModal = styled(Modal)`
  position: fixed;
  outline: none;
  left: 0;
`;

const Nav = styled.nav`
  --collapsed-width: ${collapsedWidth};
  --expanded-width: ${expandedWidth};
  width: var(--expanded-width);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: -0.2rem 0 0.4rem rgba(0, 0, 0, 0.1) inset;
  background: ${colors.palette.neutralBright};
  color: ${colors.palette.neutralThin};

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

  @keyframes expandSidebarNav {
    from {
      width: var(--collapsed-width);
    }
    to {
      width: var(--expanded-width);
    }
  }

  @keyframes collapseSidebarNav {
    from {
      width: var(--expanded-width);
    }
    to {
      width: var(--collapsed-width);
    }
  }

  &.expanding {
    animation: expandSidebarNav 0.3s forwards;
  }

  &.collapsing {
    animation: collapseSidebarNav 0.3s forwards;
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
    const [navAnimation, setNavAnimation] = React.useState<
      "expanding" | "collapsing" | "idle"
    >("idle");
    const toggleButtonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      setNavIsCollapsed(isMobile);
    }, [isMobile]);

    const handleCollapseChange = (value: boolean) => {
      setNavIsCollapsed(value);
      setNavAnimation(value ? "collapsing" : "expanding");
    };

    const MaybeModal = ({ children }: React.PropsWithChildren<React.ReactNode>) =>
      isMobile && !navIsCollapsed ? (
        <StyledModal
          data-testid="sidebarnav-modal"
          defaultOpen={true}
          isDismissable={true}
          onOpenChange={() => handleCollapseChange(true)}
        >
          <Dialog aria-label={props["aria-label"] || "Navigation"}>
            {children}
          </Dialog>
        </StyledModal>
      ) : (
        <>{children}</>
      );

    const functionRenderArguments = {
      navIsCollapsed,
      setNavIsCollapsed: handleCollapseChange,
    };

    return (
      <MaybeModal>
        <GlobalStyle />
        <Nav
          aria-expanded={!navIsCollapsed}
          data-testid="sidebarnav"
          className={classNames(className, {
            collapsed: navIsCollapsed,
            mobile: isMobile,
            collapsing: navAnimation === "collapsing",
            expanding: navAnimation === "expanding",
          })}
          aria-label="Navigation"
          onAnimationEnd={() => {
            if (navAnimation !== "idle") {
              setTimeout(() => toggleButtonRef.current?.focus(), 0);
              setNavAnimation("idle");
            }
          }}
          {...props}
        >
          <ToggleButton
            ref={toggleButtonRef}
            data-testid="sidebarnav-toggle"
            className={classNames({ collapsed: navIsCollapsed })}
            onClick={() => handleCollapseChange(!navIsCollapsed)}
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
          <NavBody className={classNames({ collapsed: navIsCollapsed })}>
            {typeof children === "function"
              ? children(functionRenderArguments)
              : children}
          </NavBody>
          {navFooter ? (
            <NavFooter className={classNames({ collapsed: navIsCollapsed })}>
              {typeof navFooter === "function"
                ? navFooter(functionRenderArguments)
                : navFooter}
            </NavFooter>
          ) : null}
        </Nav>
      </MaybeModal>
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
  collapsedWidth
};
