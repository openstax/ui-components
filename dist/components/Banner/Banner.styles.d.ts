export declare type BannerSeverity = 'note' | 'warning' | 'error';
export declare const Severity: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const StyledBanner: import("styled-components").StyledComponent<"div", any, {
    severity: BannerSeverity;
}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<(props: import("../Button").ButtonProps | import("../Button").WaitingButtonProps) => import("react/jsx-runtime").JSX.Element, any, {
    severity: BannerSeverity;
}, never>;
