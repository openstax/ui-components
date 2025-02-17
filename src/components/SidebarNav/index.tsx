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
import { useNavAnimation, useSidebarNavProps } from "./hooks";

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

  React.useEffect(() => {
    if (!isMobile || navIsCollapsed) {
      return;
    }

    const handleOutsideEvent = (event: any) => {
      if (
        isMobile &&
        !navIsCollapsed &&
        sidebarNavRef?.current &&
        !sidebarNavRef.current.contains(event.target) &&
        document.body.contains(event.target)
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
    isMobile,
  };

  React.useEffect(() => {
    if (navAnimation === "idle") {
      (toggleButtonRef.current as HTMLButtonElement).focus();
    }
  }, [navAnimation]);

  const navBodyRef = React.useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  requestAnimationFrame(() => {
    if (navBodyRef.current) {
      navBodyRef.current.scrollTop = scrollPosition;
    }
  });

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

    const handleSetNavIsCollapsed = (value: boolean) => {
      if (value !== navIsCollapsed) {
        setNavAnimation(value ? "collapsing" : "expanding");
      }

      setNavIsCollapsed(value);
    };

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

    const handleSetNavIsCollapsed = (value: boolean) => {
      if (value !== navIsCollapsed) {
        setNavAnimation(value ? "collapsing" : "expanding");
      }

      setNavIsCollapsed(value);
    };

    return (
      <BodyPortal
        ref={ref}
        id={id}
        tagName="nav"
        slot="sidebar"
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
