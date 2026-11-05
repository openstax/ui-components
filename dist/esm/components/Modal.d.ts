import * as RAC from "react-aria-components";
import React from "react";
import './Modal.css';
import '../theme/theme.css';
export declare const ModalCard: React.ForwardRefExoticComponent<RAC.DialogProps & React.RefAttributes<HTMLElement>>;
export declare const ModalBodyHeading: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export declare const ModalBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const Mask: React.ForwardRefExoticComponent<RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>>;
export declare const ModalWrapper: (props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export declare const ModalFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export interface ModalPropTypes {
    onModalClose: () => void;
    heading: string;
    className?: string;
    show?: boolean;
    variant?: 'default' | 'error';
}
export declare const Modal: ({ className, heading, onModalClose, children, show, variant, ...props }: React.PropsWithChildren<ModalPropTypes> & RAC.ModalOverlayProps) => import("react/jsx-runtime").JSX.Element | null;
