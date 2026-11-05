import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { usePaginationRanges } from './hooks';
import { range } from './utils';
import './Pagination.css';
import '../../theme/theme.css';
export const LinkForPage = ({ page, current, href, onClick, className }) => {
    const currentValue = current ? "page" : undefined;
    return (_jsx("a", { className: classNames('pagination-link', className), "aria-label": `Page ${page}`, "aria-current": currentValue, href: href || '#', onClick: onClick, children: page }));
};
const Ellipsis = () => (_jsx("li", { className: "disabled", children: _jsx("span", { children: "..." }) }));
const PageRangeComponent = ({ pageRange, currentPage, Page }) => (_jsx(_Fragment, { children: range(...pageRange).map((p) => _jsx("li", { className: currentPage === p ? 'active' : undefined, children: _jsx(Page, { page: p, current: currentPage === p }) }, p)) }));
const PaginationInfo = ({ currentPage, pageSize, totalItems }) => (_jsxs("div", { className: "pagination-info", children: [(currentPage - 1) * pageSize + 1, "-", Math.min(currentPage * pageSize, totalItems), " of ", totalItems] }));
/**
 * Renders the page list. Only mounted when there is more than one page, so
 * every hook in here runs on every render of it -- see Pagination below.
 */
const PaginationPages = ({ showFromEnd = 3, showFromCurrent = 2, pageSize, totalItems, className, style, currentPage, totalPages, Page, }) => {
    const { startRange, middleRange, endRange, showFirstEllipsis, showSecondEllipsis } = usePaginationRanges({
        currentPage,
        totalPages,
        showFromEnd,
        showFromCurrent,
    });
    return (_jsxs("div", { className: classNames('pagination', className), style: style, children: [_jsx("nav", { "aria-label": "pagination links", children: _jsxs("ul", { children: [_jsx(PageRangeComponent, { pageRange: startRange, currentPage: currentPage, Page: Page }), showFirstEllipsis && _jsx(Ellipsis, {}), _jsx(PageRangeComponent, { pageRange: middleRange, currentPage: currentPage, Page: Page }), showSecondEllipsis && _jsx(Ellipsis, {}), _jsx(PageRangeComponent, { pageRange: endRange, currentPage: currentPage, Page: Page })] }) }), pageSize && totalItems && (_jsx(PaginationInfo, { currentPage: currentPage, pageSize: pageSize, totalItems: totalItems }))] }));
};
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
export const Pagination = (props) => props.totalPages > 1 ? _jsx(PaginationPages, { ...props }) : null;
