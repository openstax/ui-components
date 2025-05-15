/// <reference types="react" />
declare type Logo = React.HTMLProps<HTMLAnchorElement> & {
    alt?: string;
};
declare type NavBarProps = React.PropsWithChildren<{
    maxWidth?: number;
    navDesktopHeight?: number;
    navMobileHeight?: number;
    logo?: boolean | Logo;
    justifyContent?: string;
    ariaLabel?: string;
}>;
export declare const NavBar: ({ logo, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, ...props }: NavBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
