import { MenuItem, MenuProps, MenuTriggerProps } from 'react-aria-components';
import { ButtonVariant } from '../theme/buttons';
interface DropdownMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
    text?: string;
    variant: ButtonVariant;
    width?: string;
    disabled?: boolean;
}
export declare const DropdownMenu: <T extends object>({ text, children, variant, width, disabled, ...props }: DropdownMenuButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
export { MenuItem as DropdownMenuItem };
