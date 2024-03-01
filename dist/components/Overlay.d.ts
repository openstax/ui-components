/// <reference types="react" />
export declare const OverlayMask: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OverlayCloseButton: import("styled-components").StyledComponent<({ variant, ...props }: any) => JSX.Element, any, {}, never>;
export declare const OverlayWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OverlayBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Overlay: ({ className, onClose, children, show }: import("react").PropsWithChildren<{
    onClose: () => void;
    className?: string | undefined;
    show?: boolean | undefined;
}>) => JSX.Element | null;
