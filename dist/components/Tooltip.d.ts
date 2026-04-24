/// <reference types="react" />
import { Placement } from 'react-aria';
export declare const StyledTooltip: import("styled-components").StyledComponent<(props: import("react-aria-components").TooltipProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
export declare const StyledTrigger: import("styled-components").StyledComponent<(props: import("react-aria-components").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
declare type TooltipProps = {
    placement?: Placement;
    icon?: any;
    isOpen?: boolean;
    ariaLabel?: string;
};
export declare const Tooltip: ({ children, placement, icon, ...props }: React.PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
export declare const TooltipGroup: ({ icon, ariaLabel, ...props }: React.PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
export declare const CustomTooltip: ({ state, ...props }: any) => import("react/jsx-runtime").JSX.Element;
export {};
