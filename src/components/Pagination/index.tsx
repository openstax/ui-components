import React from 'react';
import classNames from 'classnames';
import { palette } from "../../theme/palette";
import { CSSPropertiesWithVariables } from '../../types';
import { usePaginationRanges } from './hooks';
import { range } from './utils';
import './Pagination.css';

// Bound on the root; every rule that uses them targets a descendant.
const paginationStyle: CSSPropertiesWithVariables = {
  '--pagination-border-color': palette.neutralLight,
  '--pagination-active-background': palette.neutralLighter,
};

export const LinkForPage = ({ page, current, href, onClick, className }: {
  page: number;
  current?: boolean;
  href: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const currentValue = current ? "page" : undefined;

  return (
    <a
      className={classNames('pagination-link', className)}
      aria-label={`Page ${page}`}
      aria-current={currentValue}
      href={href || '#'}
      onClick={onClick}
    >
      {page}
    </a>
  );
};

const Ellipsis: React.FC = () => (
  <li className="disabled">
    <span>...</span>
  </li>
);

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
export const Pagination = (props: {
  className?: string;
  style?: CSSPropertiesWithVariables;
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
    style,
    currentPage,
    totalPages,
    Page,
  } = props;

  // Must stay above the `totalPages <= 1` early return so the hook runs on every
  // render. React only reports a hook-order mismatch once at least one hook has
  // run, so the previous ordering happened to be survivable -- but it made this
  // component a landmine for the next hook added above the return.
  const { startRange, middleRange, endRange, showFirstEllipsis, showSecondEllipsis } =
    usePaginationRanges({
      currentPage,
      totalPages,
      showFromEnd,
      showFromCurrent,
    });

  if (totalPages === 0 || totalPages === 1) {
    return null;
  }

  return (
    <div className={classNames('pagination', className)} style={{ ...paginationStyle, ...style }}>
      <nav aria-label="pagination links">
        <ul>
          <PageRangeComponent
            pageRange={startRange}
            currentPage={currentPage}
            Page={Page}
          />

          {showFirstEllipsis && <Ellipsis />}

          <PageRangeComponent
            pageRange={middleRange}
            currentPage={currentPage}
            Page={Page}
          />

          {showSecondEllipsis && <Ellipsis />}

          <PageRangeComponent
            pageRange={endRange}
            currentPage={currentPage}
            Page={Page}
          />
        </ul>
      </nav>

      {pageSize && totalItems && (
        <PaginationInfo
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
        />
      )}
    </div>
  );
};
