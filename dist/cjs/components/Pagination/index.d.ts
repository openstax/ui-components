import React from 'react';
import { CSSPropertiesWithVariables } from '../../types';
import './Pagination.css';
import '../../theme/theme.css';
export declare const LinkForPage: ({ page, current, href, onClick, className }: {
    page: number;
    current?: boolean;
    href: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => import("react/jsx-runtime").JSX.Element;
interface PaginationProps {
    className?: string;
    style?: CSSPropertiesWithVariables;
    Page: (props: {
        page: number;
        current: boolean;
    }) => React.ReactElement;
    currentPage: number;
    totalPages: number;
    totalItems?: number;
    pageSize?: number;
    showFromEnd?: number;
    showFromCurrent?: number;
}
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
 *
 * Renders nothing when there is no more than one page. That guard lives here
 * rather than as an early return inside PaginationPages so the page list's hooks
 * are unconditional by construction.
 */
export declare const Pagination: (props: PaginationProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
