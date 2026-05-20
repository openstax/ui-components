import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { palette } from "../../theme/palette";
import { usePaginationRanges } from './hooks';
import { range } from './utils';
export const LinkForPage = styled(({ page, current, href, onClick, className }) => {
    const currentValue = current ? "page" : undefined;
    return (_jsx("a", { className: className, "aria-label": `Page ${page}`, "aria-current": currentValue, href: href || '#', onClick: onClick, children: page }));
}) `
`;
const Ellipsis = () => (_jsx("li", { className: "disabled", children: _jsx("span", { children: "..." }) }));
const PageRangeComponent = ({ pageRange, currentPage, Page }) => (_jsx(_Fragment, { children: range(...pageRange).map((p) => _jsx("li", { className: currentPage === p ? 'active' : undefined, children: _jsx(Page, { page: p, current: currentPage === p }) }, p)) }));
const PaginationInfo = ({ currentPage, pageSize, totalItems }) => (_jsxs("div", { className: "pagination-info", children: [(currentPage - 1) * pageSize + 1, "-", Math.min(currentPage * pageSize, totalItems), " of ", totalItems] }));
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
export const Pagination = styled((props) => {
    const { showFromEnd = 3, showFromCurrent = 2, pageSize, totalItems, className, currentPage, totalPages, Page, } = props;
    if (totalPages === 0 || totalPages === 1) {
        return null;
    }
    const { startRange, middleRange, endRange, showFirstEllipsis, showSecondEllipsis } = usePaginationRanges({
        currentPage,
        totalPages,
        showFromEnd,
        showFromCurrent,
    });
    return (_jsxs("div", { className: className, children: [_jsx("nav", { "aria-label": "pagination links", children: _jsxs("ul", { children: [_jsx(PageRangeComponent, { pageRange: startRange, currentPage: currentPage, Page: Page }), showFirstEllipsis && _jsx(Ellipsis, {}), _jsx(PageRangeComponent, { pageRange: middleRange, currentPage: currentPage, Page: Page }), showSecondEllipsis && _jsx(Ellipsis, {}), _jsx(PageRangeComponent, { pageRange: endRange, currentPage: currentPage, Page: Page })] }) }), pageSize && totalItems && (_jsx(PaginationInfo, { currentPage: currentPage, pageSize: pageSize, totalItems: totalItems }))] }));
}) `
  text-align: center;

  > nav > ul {
    list-style: none;
    padding: 0;
    border: thin solid ${palette.neutralLight};
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 auto;

    > li {
      margin: 0;
      min-width: 4rem;
      text-align: center;
      display: inline-block;

      &:not(:last-child) {
        border-right: thin solid ${palette.neutralLight};
      }

      &.active,
      &:focus-within:not(.disabled),
      &:hover:not(.disabled) {
        background-color: ${palette.neutralLighter};
      }

      > ${LinkForPage},span {
        padding: 1rem;
        display: block;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 1.3rem;
        margin: 0;
        color: inherit;
      }
    }
  }

  .pagination-info {
    margin-top: 0.5rem;
    font-size: 1.6rem;
  }
`;
