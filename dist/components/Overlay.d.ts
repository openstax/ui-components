/// <reference types="react" />
export declare const OverlayMask: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OverlayCloseButton: import("styled-components").StyledComponent<({ variant, ...props }: any) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const OverlayWrapper: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    role?: string | undefined;
    slot?: string | undefined;
    tagName?: string | undefined;
    id?: string | undefined;
    'data-testid'?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>, any, {}, never>;
export declare const OverlayBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Overlay: ({ className, onClose, children, show }: import("react").PropsWithChildren<{
    onClose: () => void;
    className?: string | undefined;
    show?: boolean | undefined;
}>) => import("react/jsx-runtime").JSX.Element | null;
