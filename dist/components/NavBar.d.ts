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
}>;
export declare const NavBar: ({ logo, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ...props }: NavBarProps) => JSX.Element;
export {};
