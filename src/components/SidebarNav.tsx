import React from "react";
import classNames from "classnames";
import styled, { css } from "styled-components";
import { LeftArrow } from "./svgs/LeftArrow";
import { RightArrow } from "./svgs/RightArrow";
import { breakpoints, colors, zIndex } from "../theme";
import { useMatchMediaQuery } from "../hooks";
import { FocusScope } from "react-aria";
import { BodyPortal } from "./BodyPortal";

const collapsedWidth = "5.6rem";
const expandedWidth = "24rem";
const navStyles = css`
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
  z-index: ${zIndex.sidebar};

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

  &.mobile + nav,
  &.mobile + nav + main {
    margin-left: ${collapsedWidth};
  }

  &.mobile ~ main::before,
  &.mobile ~ [data-backdrop-target]::before {
    content: "";
    background: none;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    position: fixed;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    z-index: ${zIndex.main + 1};
  }

  &.mobile[aria-expanded="true"] ~ main::before,
  &.mobile[aria-expanded="true"] ~ [data-backdrop-target]::before {
    background: rgba(0 0 0 / 0.7);
    opacity: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
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
    animation: expandSidebarNav 300ms forwards;
  }
  &.collapsing {
    animation: collapseSidebarNav 300ms forwards;
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
  z-index: 1;
`;

type FunctionRender = (_: {
  navIsCollapsed: boolean;
  setNavIsCollapsed: (_: boolean) => void;
}) => React.ReactNode;

type SidebarNavSharedProps = {
  navHeader?: React.ReactNode | FunctionRender;
  navFooter?: React.ReactNode | FunctionRender;
  children: React.ReactNode | FunctionRender;
  isMobile?: boolean;
  mobileBreakpoint?: string;
  className?: string;
};

const SidebarNavBase = ({
  navHeader,
  navFooter,
  children,
  isMobile,
  navIsCollapsed,
  setNavIsCollapsed,
  ...props
}: SidebarNavSharedProps & {
  sidebarNavRef?: React.MutableRefObject<HTMLElement | null>;
  navIsCollapsed: boolean;
  setNavIsCollapsed: React.Dispatch<boolean>;
  isMobile: boolean;
}) => {
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);
  const sidebarNavRef = props.sidebarNavRef ?? React.useRef<HTMLElement>();

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
        sidebarNavRef?.current &&
        !sidebarNavRef?.current.contains(event.target)
      ) {
        setNavIsCollapsed(true);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (isMobile && !navIsCollapsed && event.key === "Escape") {
        setNavIsCollapsed(true);
      }
    };

    document.addEventListener("click", handleOutsideEvent);
    document.addEventListener("touchend", handleOutsideEvent);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleOutsideEvent);
      document.removeEventListener("touchend", handleOutsideEvent);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isMobile, navIsCollapsed, setNavIsCollapsed, sidebarNavRef]);

  const functionRenderArguments = {
    navIsCollapsed,
    setNavIsCollapsed,
  };

  return (
    <FocusScope contain={isMobile && !navIsCollapsed}>
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
    </FocusScope>
  );
};

export const SidebarNav = styled(
  ({
    mobileBreakpoint = `${breakpoints.mobileBreak}em`,
    className,
    ...props
  }: SidebarNavSharedProps) => {
    const mobileQueryMatches = useMatchMediaQuery(
      `(max-width: ${mobileBreakpoint})`,
    );
    const isMobile = props.isMobile ?? mobileQueryMatches;
    const [navIsCollapsed, setNavIsCollapsed] = React.useState(isMobile);

    const sidebarNavRef = React.useRef<HTMLElement>(null);

    return (
      <nav
        ref={sidebarNavRef}
        aria-expanded={!navIsCollapsed}
        data-testid="sidebarnav"
        className={classNames(className, {
          collapsed: navIsCollapsed,
          mobile: isMobile,
        })}
      >
        <SidebarNavBase
          {...props}
          sidebarNavRef={sidebarNavRef}
          isMobile={isMobile}
          navIsCollapsed={navIsCollapsed}
          setNavIsCollapsed={setNavIsCollapsed}
        >
          {props.children}
        </SidebarNavBase>
      </nav>
    );
  },
)`
  ${navStyles}
`;

export const BodyPortalSidebarNav = styled(
  ({
    mobileBreakpoint = `${breakpoints.mobileBreak}em`,
    className,
    ...props
  }: SidebarNavSharedProps) => {
    const mobileQueryMatches = useMatchMediaQuery(
      `(max-width: ${mobileBreakpoint})`,
    );
    const isMobile = React.useMemo(
      () => props.isMobile ?? mobileQueryMatches,
      [props.isMobile],
    );
    const [navIsCollapsed, setNavIsCollapsed] = React.useState(isMobile);
    const ref = React.useRef<HTMLElement>(document.createElement("NAV"));
    const [navAnimation, setNavAnimation] = React.useState<
      "expanding" | "collapsing" | "idle"
    >("idle");

    const handleSetNavIsCollapsed = (value: boolean) => {
      if (value !== navIsCollapsed) {
        setNavAnimation(value ? "collapsing" : "expanding");
      }

      setNavIsCollapsed(value);
    };

    React.useEffect(() => {
      if (navAnimation !== "idle") {
        setTimeout(() => setNavAnimation("idle"), 300);
      }
    }, [navAnimation]);

    return (
      <BodyPortal
        tagName="nav"
        slot="sidebar"
        aria-expanded={!navIsCollapsed}
        data-testid="sidebarnav"
        className={classNames(className, {
          collapsed: navIsCollapsed,
          mobile: isMobile,
          collapsing: navAnimation === "collapsing",
          expanding: navAnimation === "expanding",
        })}
      >
        <SidebarNavBase
          {...props}
          isMobile={isMobile}
          navIsCollapsed={navIsCollapsed}
          setNavIsCollapsed={handleSetNavIsCollapsed}
          sidebarNavRef={ref}
        />
      </BodyPortal>
    );
  },
)`
  ${navStyles}
`;

export const SidebarNavStyles = {
  NavHeader,
  NavBody,
  NavFooter,
  ToggleButton,
  expandedWidth,
  collapsedWidth,
};
