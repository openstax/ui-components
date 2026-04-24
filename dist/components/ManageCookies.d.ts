import React from 'react';
declare type ManageCookiesLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    wrapper?: (button: React.ReactElement) => React.ReactElement;
};
export declare const ManageCookiesLink: ({ children, className, wrapper, ...props }: ManageCookiesLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
