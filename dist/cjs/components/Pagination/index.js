"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.LinkForPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const palette_1 = require("../../theme/palette");
const hooks_1 = require("./hooks");
const utils_1 = require("./utils");
exports.LinkForPage = (0, styled_components_1.default)(({ page, current, href, onClick, className }) => {
    const currentValue = current ? "page" : undefined;
    return ((0, jsx_runtime_1.jsx)("a", { className: className, "aria-label": `Page ${page}`, "aria-current": currentValue, href: href || '#', onClick: onClick, children: page }));
}) `
`;
const Ellipsis = () => ((0, jsx_runtime_1.jsx)("li", { className: "disabled", children: (0, jsx_runtime_1.jsx)("span", { children: "..." }) }));
const PageRangeComponent = ({ pageRange, currentPage, Page }) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.range)(...pageRange).map((p) => (0, jsx_runtime_1.jsx)("li", { className: currentPage === p ? 'active' : undefined, children: (0, jsx_runtime_1.jsx)(Page, { page: p, current: currentPage === p }) }, p)) }));
const PaginationInfo = ({ currentPage, pageSize, totalItems }) => ((0, jsx_runtime_1.jsxs)("div", { className: "pagination-info", children: [(currentPage - 1) * pageSize + 1, "-", Math.min(currentPage * pageSize, totalItems), " of ", totalItems] }));
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
exports.Pagination = (0, styled_components_1.default)((props) => {
    const { showFromEnd = 3, showFromCurrent = 2, pageSize, totalItems, className, currentPage, totalPages, Page, } = props;
    if (totalPages === 0 || totalPages === 1) {
        return null;
    }
    const { startRange, middleRange, endRange, showFirstEllipsis, showSecondEllipsis } = (0, hooks_1.usePaginationRanges)({
        currentPage,
        totalPages,
        showFromEnd,
        showFromCurrent,
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, children: [(0, jsx_runtime_1.jsx)("nav", { "aria-label": "pagination links", children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)(PageRangeComponent, { pageRange: startRange, currentPage: currentPage, Page: Page }), showFirstEllipsis && (0, jsx_runtime_1.jsx)(Ellipsis, {}), (0, jsx_runtime_1.jsx)(PageRangeComponent, { pageRange: middleRange, currentPage: currentPage, Page: Page }), showSecondEllipsis && (0, jsx_runtime_1.jsx)(Ellipsis, {}), (0, jsx_runtime_1.jsx)(PageRangeComponent, { pageRange: endRange, currentPage: currentPage, Page: Page })] }) }), pageSize && totalItems && ((0, jsx_runtime_1.jsx)(PaginationInfo, { currentPage: currentPage, pageSize: pageSize, totalItems: totalItems }))] }));
}) `
  text-align: center;

  > nav > ul {
    list-style: none;
    padding: 0;
    border: thin solid ${palette_1.palette.neutralLight};
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 auto;

    > li {
      margin: 0;
      min-width: 4rem;
      text-align: center;
      display: inline-block;

      &:not(:last-child) {
        border-right: thin solid ${palette_1.palette.neutralLight};
      }

      &.active,
      &:focus-within:not(.disabled),
      &:hover:not(.disabled) {
        background-color: ${palette_1.palette.neutralLighter};
      }

      > ${exports.LinkForPage},span {
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
