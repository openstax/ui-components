import React from 'react';
export declare const styledMenu: {
    Button: import("styled-components").StyledComponent<(props: import("./NavBarMenuButtons").NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
    Item: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null), any, {}, never>;
};
export declare const useHelpMenu: (actions?: {
    label: string;
    callback: () => void;
}[]) => readonly [({ contactFormParams }: {
    contactFormParams: {
        key: string;
        value: string;
    }[];
}) => import("react/jsx-runtime").JSX.Element, () => import("react/jsx-runtime").JSX.Element | null];
