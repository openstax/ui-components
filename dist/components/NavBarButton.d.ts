/// <reference types="react" />
import { ButtonProps } from "react-aria-components";
export declare type NavBarButtonProps = Omit<ButtonProps, "aria-label"> & {
    label?: string;
    icon?: string | React.ReactNode;
    className?: string;
    "aria-label"?: string;
} & ({
    label: string;
} | {
    "aria-label": string;
});
export declare const NavBarButton: import("styled-components").StyledComponent<({ label, icon, className, "aria-label": ariaLabel, ...props }: NavBarButtonProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
