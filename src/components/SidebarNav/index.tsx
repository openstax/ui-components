import React from "react";
import classNames from "classnames";
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";
import { FocusScope } from "react-aria";
import { BodyPortal } from "../BodyPortal";
import { CSSPropertiesWithVariables } from "../../types";

import { collapsedWidth, expandedWidth } from "./constants";
import {
  useNavAnimation,
  useSidebarNavProps,
  useClickOutside,
  useEscapeKey,
  useScrollRestoration,
  useNavCollapseHandler,
} from "./hooks";
import "./SidebarNav.css";
import "../../theme/theme.css";

const NavHeader = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={classNames("sidebar-nav-header", className)}
      {...props}
    />
  ),
);
NavHeader.displayName = "NavHeader";

const NavBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames("sidebar-nav-body", className)}
      {...props}
    />
  ),
);
NavBody.displayName = "NavBody";

const NavFooter = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={classNames("sidebar-nav-footer", className)}
      {...props}
    />
  ),
);
NavFooter.displayName = "NavFooter";

const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={classNames("sidebar-nav-toggle", className)}
    {...props}
  />
));
ToggleButton.displayName = "ToggleButton";

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
  style?: CSSPropertiesWithVariables;
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

export const SidebarNav = ({
  className,
  style,
  id,
  ariaLabel,
  ...props
}: SidebarNavSharedProps) => {
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
      style={style}
      className={classNames("sidebar-nav", className, {
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
};

export const BodyPortalSidebarNav = ({
  className,
  style,
  id,
  ariaLabel,
  ...props
}: SidebarNavSharedProps) => {
  const { isMobile, navIsCollapsed, setNavIsCollapsed } =
    useSidebarNavProps(props);

  const ref = React.useRef<HTMLElement | null>(
    typeof document !== "undefined" ? document.createElement("NAV") : null,
  );
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
      style={style}
      className={classNames("sidebar-nav", className, {
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
};

export const SidebarNavStyles = {
  NavHeader,
  NavBody,
  NavFooter,
  ToggleButton,
  expandedWidth,
  collapsedWidth,
};
