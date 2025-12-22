import { useMemo } from "react";
import {
  calculatePaginationRanges,
  PaginationConfig,
  PaginationRanges,
} from "./utils";

/**
 * Custom hook that calculates pagination ranges
 *
 * This hook memoizes the pagination calculation to avoid unnecessary
 * re-computations when props haven't changed. The calculation only runs
 * when currentPage, totalPages, or the display configuration changes.
 *
 * @param config - Pagination configuration
 * @returns Memoized pagination ranges
 *
 * @example
 * ```tsx
 * const ranges = usePaginationRanges({
 *   currentPage: 5,
 *   totalPages: 100,
 *   showFromEnd: 3,
 *   showFromCurrent: 2,
 * });
 *
 * // ranges will be:
 * // {
 * //   startRange: [1, 4],
 * //   middleRange: [3, 8],
 * //   endRange: [98, 101],
 * //   showFirstEllipsis: false,
 * //   showSecondEllipsis: true,
 * // }
 * ```
 */
export function usePaginationRanges({
  currentPage,
  totalPages,
  showFromEnd,
  showFromCurrent,
}: PaginationConfig): PaginationRanges {
  // Only recalculate if the values change
  return useMemo(
    () =>
      calculatePaginationRanges({
        currentPage,
        totalPages,
        showFromEnd,
        showFromCurrent,
      }),
    [currentPage, totalPages, showFromEnd, showFromCurrent],
  );
}
