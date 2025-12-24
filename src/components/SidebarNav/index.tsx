import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";
import { FocusScope } from "react-aria";
import { BodyPortal } from "../BodyPortal";

import {
  NavBody,
  NavFooter,
  NavHeader,
  ToggleButton,
  expandedWidth,
  collapsedWidth,
  navStyles,
} from "./styles";
import {
  useNavAnimation,
  useSidebarNavProps,
  useClickOutside,
  useEscapeKey,
  useScrollRestoration,
  useNavCollapseHandler,
} from "./hooks";

type FunctionRender = (_: {
  navIsCollapsed: boolean;
  setNavIsCollapsed: (_: boolean) => void;
  isMobile: boolean;
}) => React.ReactNode;

interface SidebarNavSharedProps {
  id?: string;
  navHeader?: React.ReactNode | FunctionRender;
  navFooter?: React.ReactNode | FunctionRender;
  children: React.ReactNode | FunctionRender;
  mobileBreakpoint?: string;
  isMobile?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const SidebarNavBase = ({
  sidebarNavRef,
  navHeader,
  navFooter,
  children,
  navIsCollapsed,
  setNavIsCollapsed,
  navAnimation,
  isMobile,
}: SidebarNavSharedProps & {
  sidebarNavRef?: React.MutableRefObject<HTMLElement | null>;
  navIsCollapsed: boolean;
  setNavIsCollapsed: React.Dispatch<boolean>;
  navAnimation?: string;
  isMobile: boolean;
}) => {
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useLayoutEffect(() => {
    setNavIsCollapsed(isMobile);
  }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close navigation when clicking outside or pressing Escape on mobile
  const handleClose = React.useCallback(() => {
    setNavIsCollapsed(true);
  }, [setNavIsCollapsed]);

  useClickOutside(
    sidebarNavRef as React.RefObject<HTMLElement | null>,
    handleClose,
    isMobile && !navIsCollapsed,
  );

  useEscapeKey(handleClose, isMobile && !navIsCollapsed);

  const functionRenderArguments = {
    navIsCollapsed,
    setNavIsCollapsed,
    isMobile,
  };

  React.useEffect(() => {
    if (navAnimation === "idle") {
      (toggleButtonRef.current as HTMLButtonElement).focus();
    }
  }, [navAnimation]);

  const navBodyRef = React.useRef<HTMLDivElement>(null);
  const setScrollPosition = useScrollRestoration(navBodyRef);

  return (
    <FocusScope contain={isMobile && !navIsCollapsed}>
      <ToggleButton
        aria-expanded={!navIsCollapsed}
        ref={toggleButtonRef}
        data-testid="sidebarnav-toggle"
        className={classNames({ collapsed: navIsCollapsed })}
        onClick={(e) => {
          setNavIsCollapsed(!navIsCollapsed);
          e.stopPropagation();
        }}
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
      <NavBody
        data-testid="nav-body"
        ref={navBodyRef}
        onScroll={(e) =>
          setScrollPosition((e.target as HTMLDivElement).scrollTop)
        }
      >
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
  ({ className, id, ariaLabel, ...props }: SidebarNavSharedProps) => {
    const { isMobile, navIsCollapsed, setNavIsCollapsed } =
      useSidebarNavProps(props);
    const sidebarNavRef = React.useRef<HTMLElement>(null);
    const { navAnimation, setNavAnimation } = useNavAnimation();

    const handleSetNavIsCollapsed = useNavCollapseHandler(
      navIsCollapsed,
      setNavIsCollapsed,
      setNavAnimation,
    );

    return (
      <nav
        id={id}
        ref={sidebarNavRef}
        data-testid="sidebarnav"
        aria-label={ariaLabel}
        className={classNames(className, {
          collapsed: navIsCollapsed,
          mobile: isMobile,
          collapsing: navAnimation === "collapsing",
          expanding: navAnimation === "expanding",
        })}
      >
        <SidebarNavBase
          {...props}
          sidebarNavRef={sidebarNavRef}
          navIsCollapsed={navIsCollapsed}
          setNavIsCollapsed={handleSetNavIsCollapsed}
          isMobile={isMobile}
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
  ({ className, id, ariaLabel, ...props }: SidebarNavSharedProps) => {
    const { isMobile, navIsCollapsed, setNavIsCollapsed } =
      useSidebarNavProps(props);

    const ref = React.useRef<HTMLElement>(document.createElement("NAV"));
    const { navAnimation, setNavAnimation } = useNavAnimation();

    const handleSetNavIsCollapsed = useNavCollapseHandler(
      navIsCollapsed,
      setNavIsCollapsed,
      setNavAnimation,
    );

    return (
      <BodyPortal
        ref={ref}
        id={id}
        tagName="nav"
        slot="sidebar"
        data-testid="sidebarnav"
        ariaLabel={ariaLabel}
        className={classNames(className, {
          collapsed: navIsCollapsed,
          mobile: isMobile,
          collapsing: navAnimation === "collapsing",
          expanding: navAnimation === "expanding",
        })}
      >
        <SidebarNavBase
          {...props}
          navIsCollapsed={navIsCollapsed}
          setNavIsCollapsed={handleSetNavIsCollapsed}
          sidebarNavRef={ref}
          navAnimation={navAnimation}
          isMobile={isMobile}
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
  collapsedWidth
};
