import { Placement } from 'react-aria';
export declare const StyledTooltip: import("styled-components").StyledComponent<(props: import("react-aria-components").TooltipProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null, any, {}, never>;
export declare const StyledTrigger: import("styled-components").StyledComponent<(props: import("react-aria-components").ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null, any, {}, never>;
type TooltipProps = {
    placement?: Placement;
    icon?: any;
    isOpen?: boolean;
    ariaLabel?: string;
};
export declare const Tooltip: ({ children, placement, icon, ...props }: React.PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
export declare const TooltipGroup: ({ icon, ariaLabel, ...props }: React.PropsWithChildren<TooltipProps>) => import("react/jsx-runtime").JSX.Element;
export declare const CustomTooltip: ({ state, ...props }: any) => import("react/jsx-runtime").JSX.Element;
export {};
