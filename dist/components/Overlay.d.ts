import * as RAC from "react-aria-components";
import React from "react";
export declare const OverlayMask: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, {}, never>;
export declare const OverlayCloseButton: import("styled-components").StyledComponent<({ variant, ...props }: any) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const OverlayWrapper: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, {}, never>;
export declare const OverlayBody: import("styled-components").StyledComponent<(props: RAC.DialogProps & React.RefAttributes<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, {}, never>;
export declare const Overlay: ({ className, onClose, children, show }: React.PropsWithChildren<{
    onClose: () => void;
    className?: string | undefined;
    show?: boolean | undefined;
}>) => import("react/jsx-runtime").JSX.Element | null;
