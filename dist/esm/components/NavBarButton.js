import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Button, composeRenderProps } from "react-aria-components";
import classNames from "classnames";
import "./NavBarButton.css";
import "../theme/theme.css";
export const NavBarButton = React.forwardRef(({ label, icon, className, "aria-label": ariaLabel, ...props }, ref) => (_jsxs(Button, { ref: ref, className: composeRenderProps(className, (resolved) => classNames("navbar-button", resolved)), "aria-label": ariaLabel, ...props, children: [icon &&
            (typeof icon === "string" ? (_jsx("img", { "aria-hidden": "true", src: icon, alt: "" })) : (icon)), label ? _jsx("span", { children: label }) : null] })));
NavBarButton.displayName = "NavBarButton";
