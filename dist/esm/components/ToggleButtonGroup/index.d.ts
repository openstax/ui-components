import { ToggleButtonGroupProps as RACToggleButtonGroupProps, ToggleButtonProps as RACToggleButtonProps, Key } from "react-aria-components";
export interface ToggleButtonGroupProps extends RACToggleButtonGroupProps {
    items: (RACToggleButtonProps & {
        value: string;
    })[];
    selectedItems?: Iterable<Key>;
}
export declare const ToggleButton: import("styled-components").StyledComponent<(props: RACToggleButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null, any, {}, never>;
export declare const ToggleButtonGroup: ({ items, selectedItems, ...props }: ToggleButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
