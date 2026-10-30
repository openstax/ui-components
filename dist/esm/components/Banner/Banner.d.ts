import React from "react";
import { CSSPropertiesWithVariables } from "../../types";
import './Banner.css';
import '../../theme/theme.css';
export type BannerSeverity = 'note' | 'warning' | 'error';
type WithVariableStyle<E extends keyof JSX.IntrinsicElements> = Omit<React.ComponentPropsWithoutRef<E>, 'style'> & {
    style?: CSSPropertiesWithVariables;
};
export declare const Severity: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref">, "style"> & {
    style?: CSSPropertiesWithVariables;
} & React.RefAttributes<HTMLSpanElement>>;
export interface StyledBannerProps extends WithVariableStyle<'div'> {
    severity: BannerSeverity;
}
export declare const StyledBanner: React.ForwardRefExoticComponent<StyledBannerProps & React.RefAttributes<HTMLDivElement>>;
export interface CloseButtonProps extends WithVariableStyle<'button'> {
    severity: BannerSeverity;
}
export declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * A message box that does not announce itself. For a banner that appears or changes because of
 * something the user or the app did, such as a failed request, use `BannerRegion`.
 */
export declare const Banner: (props: {
    messages: string[];
    severity: BannerSeverity;
    onDismiss?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export {};
