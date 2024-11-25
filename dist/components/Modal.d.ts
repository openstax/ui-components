/// <reference types="react" />
import * as RAC from "react-aria-components";
export declare const ModalCard: import("styled-components").StyledComponent<(props: RAC.DialogProps & import("react").RefAttributes<HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
export declare const ModalBodyHeading: import("styled-components").StyledComponent<"h3", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Mask: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
export declare const ModalWrapper: import("styled-components").StyledComponent<(props: RAC.ModalOverlayProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface ModalPropTypes {
    onModalClose: () => void;
    heading: string;
    className?: string;
    show?: boolean;
    variant?: 'default' | 'error';
}
export declare const Modal: ({ className, heading, onModalClose, children, show, variant }: React.PropsWithChildren<ModalPropTypes>) => import("react/jsx-runtime").JSX.Element | null;
