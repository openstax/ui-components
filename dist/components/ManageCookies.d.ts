import React from 'react';
declare type ManageCookiesLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ssr?: boolean;
    wrapper?: (button: React.ReactElement) => React.ReactElement;
};
export declare const ManageCookiesLink: (props: ManageCookiesLinkProps) => JSX.Element | null;
export {};
