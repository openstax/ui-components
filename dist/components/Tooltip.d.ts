/// <reference types="react" />
import { Placement } from 'react-aria';
export declare const Tooltip: import("styled-components").StyledComponent<(props: import("react-aria-components").TooltipProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, {}, never>;
export declare const StyledTrigger: import("styled-components").StyledComponent<(props: import("react-aria-components").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, {}, never>;
declare type TooltipProps = {
    placement?: Placement;
    icon?: any;
    isOpen?: boolean;
};
export declare const TooltipGroup: ({ children, placement, icon, ...props }: React.PropsWithChildren<TooltipProps>) => JSX.Element;
export declare const CustomTooltip: ({ state, ...props }: any) => JSX.Element;
export {};
