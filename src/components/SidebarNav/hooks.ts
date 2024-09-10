import React from "react";
import { useMatchMediaQuery } from "../../../src/hooks";
import { breakpoints } from "../../../src/theme";

export const useSidebarNavProps = ({
  mobileBreakpoint = `${breakpoints.mobileNavBreak}em`,
  ...props
}: {
  isMobile?: boolean;
  mobileBreakpoint?: string;
}) => {
  const mobileQueryMatches = useMatchMediaQuery(
    `(max-width: ${mobileBreakpoint})`,
  );
  const isMobile = props.isMobile ?? mobileQueryMatches;
  const [navIsCollapsed, setNavIsCollapsed] = React.useState(isMobile);

  return { isMobile, navIsCollapsed, setNavIsCollapsed };
};

export const useNavAnimation = () => {
  // Transition CSS rules won't work with the BodyPortal becase the
  // nodes get reinserted, so use a class name for @keyframes instead.
  // There is an awkward empty state here - we need to distinguish
  // "idle after an interaction" vs. the initial page load.
  const [navAnimation, setNavAnimation] = React.useState<
    "expanding" | "collapsing" | "idle" | ""
  >("");

  React.useEffect(() => {
    if (!navAnimation || navAnimation === "idle") {
      return;
    }

    const idleCallback = setTimeout(() => setNavAnimation("idle"), 300);
    return () => clearTimeout(idleCallback);
  }, [navAnimation, setNavAnimation]);

  return { navAnimation, setNavAnimation };
};
