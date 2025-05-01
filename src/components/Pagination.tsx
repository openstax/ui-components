import React from 'react';
import styled from 'styled-components';
import { palette } from "../theme/palette";

export const LinkForPage = styled(({ page, current, href, onClick, className }: {
  page: number;
  current?: boolean;
  href?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const currentValue = current ? "page" : undefined;

  return (
    <a
      className={className}
      aria-current={currentValue}
      href={href || '#'}
      onClick={onClick}
    >
      {page}
    </a>
  );
})`
`;

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
    showFromEnd,
    showFromCurrent,
    pageSize,
    totalItems,
    className,
    currentPage,
    totalPages,
    Page,
  } = {
    showFromEnd: 3,
    showFromCurrent: 2,
    ...props
  };

  // the paginator would be empty, so short-circuit
  if (totalPages === 0 || totalPages === 1) {
    return null;
  }

  // prevent nav from changing size as you switch pages
  const minEntries = showFromEnd * 2 + showFromCurrent * 2 +
    1 + // the current page
    2 // for the ellipsis
  ;

  const middleRange: [number, number] = [
    Math.max(1, Math.min(currentPage - showFromCurrent, totalPages + 1)),
    Math.min(totalPages, currentPage + showFromCurrent) + 1
  ];
  const startRange: [number, number] = [
    1,
    Math.min(middleRange[0], showFromEnd + 1)
  ];
  const endRange: [number, number] = [
    Math.max(1, middleRange[1], totalPages - showFromEnd + 1),
    totalPages + 1
  ];

  const numberOfEntries = Math.max(0, startRange[1] - startRange[0]) +
    Math.max(0, middleRange[1] - middleRange[0]) +
    Math.max(0, endRange[1] - endRange[0]) +
    (startRange[1] === middleRange[0] ? 0 : 1) +
    (middleRange[1] === endRange[0] ? 0 : 1)
  ;

  if (numberOfEntries < minEntries) {
    let remaining = minEntries - numberOfEntries;
    const delta = Math.floor(remaining / 2);

    const firstGap = middleRange[0] - startRange[1];
    const secondGap = endRange[0] - middleRange[1];

    const firstMod = Math.min(firstGap, secondGap === 0
      // there is no second gap, try use entire diff in the first
      ? remaining
      : secondGap < (remaining - delta)
        // there is a gap but its smaller than the delta, so use it all
        // in the first and add one for losing the ellipsis
        ? remaining - secondGap + 1
        : delta
    );
    remaining -= firstMod;
    const secondMod = Math.min(secondGap, remaining);

    middleRange[0] = Math.max(1, middleRange[0] - firstMod);
    middleRange[1] = Math.min(totalPages + 1, middleRange[1] + secondMod);
    startRange[1] = Math.min(middleRange[0], showFromEnd + 1);
    endRange[0] = Math.max(middleRange[1], totalPages - showFromEnd + 1);
  }

  return (
    <div className={className}>
      <nav aria-label="pagination links">
        <ul>
          {range(...startRange).map((p) =>
            <li key={p} className={currentPage === p ? 'active' : undefined}>
              <Page page={p} current={currentPage === p} />
            </li>
          )}
          {startRange[1] !== middleRange[0] ?
            <li className="disabled">
              <span>...</span>
            </li>
          : null}
          {range(...middleRange).map((p) =>
            <li key={p} className={currentPage === p ? 'active' : undefined}>
              <Page page={p} current={currentPage === p} />
            </li>
          )}
          {middleRange[1] !== endRange[0] ?
            <li className="disabled">
              <span>...</span>
            </li>
          : null}
          {range(...endRange).map((p) =>
            <li key={p} className={currentPage === p ? 'active' : undefined}>
              <Page page={p} current={currentPage === p} />
            </li>
          )}
        </ul>
      </nav>
      {pageSize && totalItems ? <div className="pagination-info">
        {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalItems)} of {totalItems}
      </div> : null}
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

function range(lower: number, upper: number) {
  if (upper < lower) return [];
  return Array.from({length: upper-lower}).map((_, i) => i + lower);
}
