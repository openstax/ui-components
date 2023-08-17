import React from 'react';
declare type ManageCookiesLinkProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    children?: (button: React.ReactElement) => React.ReactElement;
};
export declare const ManageCookiesLink: (props: ManageCookiesLinkProps) => JSX.Element | null;
export {};
