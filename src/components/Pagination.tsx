import React from 'react';
import styled from 'styled-components';
import { palette } from "../theme/palette";
import { usePaginationRanges } from './Pagination.hooks';
import { range } from './Pagination.utils';

export const LinkForPage = styled(({ page, current, href, onClick, className }: {
  page: number;
  current?: boolean;
  href: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const currentValue = current ? "page" : undefined;

  return (
    <a
      className={className}
      aria-label={`Page ${page}`}
      aria-current={currentValue}
      href={href || '#'}
      onClick={onClick}
    >
      {page}
    </a>
  );
})`
`;

/**
 * Renders an ellipsis (...) element in the pagination
 */
const Ellipsis: React.FC = () => (
  <li className="disabled">
    <span>...</span>
  </li>
);

/**
 * Renders a range of page number links
 *
 * @param pageRange - [start, end) range where end is exclusive
 * @param currentPage - The currently active page
 * @param Page - Component to render each page link
 */
interface PageRangeProps {
  pageRange: [number, number];
  currentPage: number;
  Page: (props: {page: number; current: boolean}) => React.ReactElement;
}

const PageRangeComponent: React.FC<PageRangeProps> = ({ pageRange, currentPage, Page }) => (
  <>
    {range(...pageRange).map((p) =>
      <li key={p} className={currentPage === p ? 'active' : undefined}>
        <Page page={p} current={currentPage === p} />
      </li>
    )}
  </>
);

/**
 * Renders pagination information showing current items range
 *
 * Example: "1-20 of 150" items
 */
interface PaginationInfoProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

const PaginationInfo: React.FC<PaginationInfoProps> = ({ currentPage, pageSize, totalItems }) => (
  <div className="pagination-info">
    {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalItems)} of {totalItems}
  </div>
);

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
export const Pagination = styled((props: {
  className?: string;
  Page: (props: {page: number; current: boolean}) => React.ReactElement;
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  showFromEnd?: number;
  showFromCurrent?: number;
}) => {
  const {
    showFromEnd = 3,
    showFromCurrent = 2,
    pageSize,
    totalItems,
    className,
    currentPage,
    totalPages,
    Page,
  } = props;

  // Short-circuit if pagination isn't needed
  if (totalPages === 0 || totalPages === 1) {
    return null;
  }

  // Calculate which page ranges to display
  // This hook handles all the complex logic of determining which pages to show
  const { startRange, middleRange, endRange, showFirstEllipsis, showSecondEllipsis } =
    usePaginationRanges({
      currentPage,
      totalPages,
      showFromEnd,
      showFromCurrent,
    });

  return (
    <div className={className}>
      <nav aria-label="pagination links">
        <ul>
          {/* Render start pages (e.g., 1, 2, 3) */}
          <PageRangeComponent
            pageRange={startRange}
            currentPage={currentPage}
            Page={Page}
          />

          {/* Show ellipsis if there's a gap between start and middle */}
          {showFirstEllipsis && <Ellipsis />}

          {/* Render middle pages around current page (e.g., 7, 8, 9) */}
          <PageRangeComponent
            pageRange={middleRange}
            currentPage={currentPage}
            Page={Page}
          />

          {/* Show ellipsis if there's a gap between middle and end */}
          {showSecondEllipsis && <Ellipsis />}

          {/* Render end pages (e.g., 98, 99, 100) */}
          <PageRangeComponent
            pageRange={endRange}
            currentPage={currentPage}
            Page={Page}
          />
        </ul>
      </nav>

      {/* Optional: Show "1-20 of 150" type information */}
      {pageSize && totalItems && (
        <PaginationInfo
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
        />
      )}
    </div>
  );
})`
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
