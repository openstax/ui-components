import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "react-aria-components";
import styled from "styled-components";
export const NavBarButton = styled(({ label, icon, className, "aria-label": ariaLabel, ...props }) => (_jsxs(Button, { className: className, "aria-label": ariaLabel, ...props, children: [icon &&
            (typeof icon === "string" ? (_jsx("img", { "aria-hidden": "true", src: icon, alt: "" })) : (icon)), label ? _jsx("span", { children: label }) : null] }))) `
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }

  img + *,
  svg + * {
    margin-left: 0.8rem;
  }
`;
