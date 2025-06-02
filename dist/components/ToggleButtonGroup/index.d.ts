/// <reference types="react" />
import { Key } from "react-aria-components";
export interface ToggleButtonGroupProps {
    items: {
        id: string;
        value: string;
    }[];
    selectedItems?: Iterable<Key>;
    onSelectionChange?: ((keys: Set<Key>) => void);
    selectionMode?: 'single' | 'multiple';
    className?: string;
}
export declare const ToggleButton: import("styled-components").StyledComponent<(props: import("react-aria-components").ToggleButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null, any, {}, never>;
export declare const ToggleButtonGroup: ({ items, selectedItems, onSelectionChange, selectionMode, ...props }: ToggleButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
