import * as RAC from "react-aria-components";
import React from "react";
export declare const ModalCard: import("styled-components").StyledComponent<(props: RAC.DialogProps & React.RefAttributes<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, {}, never>;
export declare const ModalBodyHeading: import("styled-components").StyledComponent<"h3", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Mask: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const ModalWrapper: (props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface ModalPropTypes {
    onModalClose: () => void;
    heading: string;
    className?: string;
    show?: boolean;
    variant?: 'default' | 'error';
}
export declare const Modal: ({ className, heading, onModalClose, children, show, variant, ...props }: React.PropsWithChildren<ModalPropTypes> & RAC.ModalOverlayProps) => import("react/jsx-runtime").JSX.Element | null;
