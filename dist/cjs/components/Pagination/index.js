"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.LinkForPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hooks_1 = require("./hooks");
const utils_1 = require("./utils");
require("./Pagination.css");
require("../../theme/theme.css");
const LinkForPage = ({ page, current, href, onClick, className }) => {
    const currentValue = current ? "page" : undefined;
    return ((0, jsx_runtime_1.jsx)("a", { className: (0, classnames_1.default)('pagination-link', className), "aria-label": `Page ${page}`, "aria-current": currentValue, href: href || '#', onClick: onClick, children: page }));
};
exports.LinkForPage = LinkForPage;
const Ellipsis = () => ((0, jsx_runtime_1.jsx)("li", { className: "disabled", children: (0, jsx_runtime_1.jsx)("span", { children: "..." }) }));
const PageRangeComponent = ({ pageRange, currentPage, Page }) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.range)(...pageRange).map((p) => (0, jsx_runtime_1.jsx)("li", { className: currentPage === p ? 'active' : undefined, children: (0, jsx_runtime_1.jsx)(Page, { page: p, current: currentPage === p }) }, p)) }));
const PaginationInfo = ({ currentPage, pageSize, totalItems }) => ((0, jsx_runtime_1.jsxs)("div", { className: "pagination-info", children: [(currentPage - 1) * pageSize + 1, "-", Math.min(currentPage * pageSize, totalItems), " of ", totalItems] }));
/**
 * Renders the page list. Only mounted when there is more than one page, so
 * every hook in here runs on every render of it -- see Pagination below.
 */
const PaginationPages = ({ showFromEnd = 3, showFromCurrent = 2, pageSize, totalItems, className, style, currentPage, totalPages, Page, }) => {
    const { startRange, middleRange, endRange, showFirstEllipsis, showSecondEllipsis } = (0, hooks_1.usePaginationRanges)({
        currentPage,
        totalPages,
        showFromEnd,
        showFromCurrent,
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('pagination', className), style: style, children: [(0, jsx_runtime_1.jsx)("nav", { "aria-label": "pagination links", children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)(PageRangeComponent, { pageRange: startRange, currentPage: currentPage, Page: Page }), showFirstEllipsis && (0, jsx_runtime_1.jsx)(Ellipsis, {}), (0, jsx_runtime_1.jsx)(PageRangeComponent, { pageRange: middleRange, currentPage: currentPage, Page: Page }), showSecondEllipsis && (0, jsx_runtime_1.jsx)(Ellipsis, {}), (0, jsx_runtime_1.jsx)(PageRangeComponent, { pageRange: endRange, currentPage: currentPage, Page: Page })] }) }), pageSize && totalItems && ((0, jsx_runtime_1.jsx)(PaginationInfo, { currentPage: currentPage, pageSize: pageSize, totalItems: totalItems }))] }));
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
const Pagination = (props) => props.totalPages > 1 ? (0, jsx_runtime_1.jsx)(PaginationPages, { ...props }) : null;
exports.Pagination = Pagination;
