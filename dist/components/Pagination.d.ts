import React from 'react';
export declare const LinkForPage: import("styled-components").StyledComponent<({ page, current, href, onClick, className }: {
    page: number;
    current?: boolean | undefined;
    href?: string | undefined;
    className?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const Pagination: import("styled-components").StyledComponent<(props: {
    className?: string | undefined;
    Page: (props: {
        page: number;
        current: boolean;
    }) => React.ReactElement;
    currentPage: number;
    totalPages: number;
    totalItems?: number | undefined;
    pageSize?: number | undefined;
    showFromEnd?: number | undefined;
    showFromCurrent?: number | undefined;
}) => import("react/jsx-runtime").JSX.Element | null, any, {}, never>;
