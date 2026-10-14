import React from 'react';
import { ButtonProps as AriaButtonProps, TooltipProps as AriaTooltipProps } from 'react-aria-components';
import { Placement } from 'react-aria';
import { CSSPropertiesWithVariables } from '../types';
import './Tooltip.css';
import '../theme/theme.css';
type ClassNameAndStyle = {
    className?: string;
    style?: CSSPropertiesWithVariables;
};
type TooltipProps = ClassNameAndStyle & {
    placement?: Placement;
    isOpen?: boolean;
};
type TooltipGroupProps = TooltipProps & {
    icon?: any;
    ariaLabel?: string;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
};
/**
 * @deprecated The styles now live in the `.tooltip` class in Tooltip.css. Prefer `Tooltip`;
 * this remains so consumers that composed the old styled-component keep working.
 */
export declare const StyledTooltip: React.ForwardRefExoticComponent<Omit<AriaTooltipProps, "className" | "style"> & ClassNameAndStyle & React.RefAttributes<HTMLDivElement>>;
/**
 * @deprecated The styles now live in the `.tooltip-trigger` class in Tooltip.css. Prefer
 * `TooltipGroup`; this remains so consumers that composed the old styled-component keep working.
 */
export declare const StyledTrigger: React.ForwardRefExoticComponent<Omit<AriaButtonProps, "className" | "style"> & ClassNameAndStyle & React.RefAttributes<HTMLButtonElement>>;
export declare const Tooltip: ({ children, placement, className, style, ...props }: React.PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
/**
 * An info icon that reveals a tooltip. The trigger is a button: pressing it toggles the tooltip.
 *
 * `isOpen`, `defaultOpen` and `onOpenChange` go to `TooltipTrigger`, not `Tooltip`. Giving
 * either prop to `Tooltip` makes react-aria build a second state the trigger cannot see, so
 * `aria-describedby` is never set and Escape stops dismissing it.
 *
 * react-aria closes the tooltip on `onPointerDown` and `onKeyDown`, before `onPress`. So
 * `onPress` closes it only for a press with neither, such as a screen reader click
 * (pointerType "virtual"), and the state at press start is recorded in `onPressStart`.
 */
export declare const TooltipGroup: ({ icon, ariaLabel, isOpen, defaultOpen, onOpenChange, ...props }: React.PropsWithChildren<TooltipGroupProps>) => import("react/jsx-runtime").JSX.Element;
export declare const CustomTooltip: ({ state, ...props }: any) => import("react/jsx-runtime").JSX.Element;
export {};
