/// <reference types="react" />
export declare const OverlayMask: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OverlayCloseButton: import("styled-components").StyledComponent<({ variant, ...props }: any) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const OverlayWrapper: import("styled-components").StyledComponent<({ children, className, role, slot, tagName }: import("react").PropsWithChildren<{
    className?: string | undefined;
    role?: string | undefined;
    slot?: string | undefined;
    tagName?: string | undefined;
}>) => import("react").ReactPortal, any, {}, never>;
export declare const OverlayBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Overlay: ({ className, onClose, children, show }: import("react").PropsWithChildren<{
    onClose: () => void;
    className?: string | undefined;
    show?: boolean | undefined;
}>) => import("react/jsx-runtime").JSX.Element | null;
