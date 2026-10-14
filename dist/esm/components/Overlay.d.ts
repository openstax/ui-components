import * as RAC from "react-aria-components";
import React from "react";
import './Overlay.css';
import '../theme/theme.css';
export declare const OverlayMask: React.ForwardRefExoticComponent<RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>>;
export declare const OverlayCloseButton: React.ForwardRefExoticComponent<Omit<import("./CloseModalButton").CloseModalButtonProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const OverlayWrapper: React.ForwardRefExoticComponent<Omit<RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const OverlayBody: React.ForwardRefExoticComponent<RAC.DialogProps & React.RefAttributes<HTMLElement>>;
/**
 * The labelling half of react-aria's `AriaLabelingProps`. Picked off
 * `DialogProps` rather than imported, since `react-aria-components` does not
 * re-export the interface and `@react-types/shared` is not a direct dependency.
 */
type DialogLabelingProps = Pick<RAC.DialogProps, 'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-details'>;
export type OverlayProps = React.PropsWithChildren<{
    onClose: () => void;
    className?: string;
    show?: boolean;
}>
/**
 * A dialog needs an accessible name, and `Overlay` has no heading of its own,
 * so unless the caller supplies a `<Heading slot='title'>` in `children` these
 * are the way to describe it. All of them go to `OverlayBody` (the dialog)
 * rather than being spread onto `OverlayMask` with the rest of the props —
 * they are handled as a set so no single `aria-*` prop lands somewhere
 * unexpected.
 */
 & DialogLabelingProps & RAC.ModalOverlayProps;
export declare const Overlay: ({ className, onClose, children, show, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, "aria-details": ariaDetails, ...props }: OverlayProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
