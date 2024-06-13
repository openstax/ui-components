/// <reference types="react" />
import { ButtonProps } from "react-aria-components";
export declare type NavBarButtonProps = {
    label?: string;
    icon?: string | React.ReactNode;
    className?: string;
    "aria-label"?: string;
} & ({
    label: string;
} | {
    "aria-label": string | undefined;
});
export declare const NavBarButton: import("styled-components").StyledComponent<({ label, icon, className, "aria-label": ariaLabel, ...props }: Omit<ButtonProps, "aria-label"> & NavBarButtonProps) => JSX.Element, any, {}, never>;
