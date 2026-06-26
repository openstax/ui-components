import * as RAC from "react-aria-components";
import React from "react";
export declare const OverlayMask: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const OverlayCloseButton: import("styled-components").StyledComponent<({ variant, ...props }: any) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const OverlayWrapper: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null, any, {}, never>;
export declare const OverlayBody: import("styled-components").StyledComponent<(props: RAC.DialogProps & React.RefAttributes<HTMLElement>) => React.ReactElement | null, any, {}, never>;
export declare const Overlay: ({ className, onClose, children, show, ...props }: React.PropsWithChildren<{
    onClose: () => void;
    className?: string;
    show?: boolean;
}> & RAC.ModalOverlayProps) => import("react/jsx-runtime").JSX.Element | null;
