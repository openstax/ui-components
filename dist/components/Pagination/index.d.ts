import React from 'react';
export declare const LinkForPage: import("styled-components").StyledComponent<({ page, current, href, onClick, className }: {
    page: number;
    current?: boolean | undefined;
    href: string;
    className?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
/**
 * Pagination Component
 *
 * Displays a pagination navigation with page numbers and ellipses.
 * Intelligently shows pages at the start, around the current page, and at the end,
 * with ellipses in between when there are many pages.
 *
 * The component maintains a consistent size by expanding the middle range when
 * there aren't enough pages to fill the minimum entries.
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={5}
 *   totalPages={100}
 *   Page={({ page, current }) => <LinkForPage page={page} current={current} href={`/page/${page}`} />}
 *   showFromEnd={3}          // Show 3 pages at start/end
 *   showFromCurrent={2}      // Show 2 pages on each side of current
 *   pageSize={20}
 *   totalItems={2000}
 * />
 * ```
 *
 * Typical output: [1 2 3] ... [4 5 6] ... [98 99 100]
 */
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
