/// <reference types="react" />
export declare const ModalCard: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalBodyHeading: import("styled-components").StyledComponent<"h3", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Mask: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalWrapper: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    role?: string | undefined;
    slot?: string | undefined;
    tagName?: string | undefined;
    id?: string | undefined;
    'data-testid'?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>, any, {}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface ModalPropTypes {
    onModalClose: () => void;
    heading: string;
    className?: string;
    show?: boolean;
    variant?: 'default' | 'error';
}
export declare const Modal: ({ className, heading, onModalClose, children, show, variant }: React.PropsWithChildren<ModalPropTypes>) => import("react/jsx-runtime").JSX.Element | null;
