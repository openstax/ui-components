/**
 * Utility functions for pagination range calculations
 *
 * This file contains pure functions that handle the complex logic of calculating
 * which page numbers to display in a pagination component, including handling
 * ellipsis (...) when there are too many pages to show.
 */

/**
 * Represents a range of page numbers [start, end) (end is exclusive)
 */
export type PageRange = [number, number];

/**
 * The result of calculating pagination ranges
 */
export interface PaginationRanges {
  /** Pages at the start (e.g., 1, 2, 3) */
  startRange: PageRange;
  /** Pages around the current page (e.g., 7, 8, 9 when currentPage is 8) */
  middleRange: PageRange;
  /** Pages at the end (e.g., 98, 99, 100) */
  endRange: PageRange;
  /** Whether to show ellipsis between start and middle ranges */
  showFirstEllipsis: boolean;
  /** Whether to show ellipsis between middle and end ranges */
  showSecondEllipsis: boolean;
}

/**
 * Configuration options for pagination range calculations
 */
export interface PaginationConfig {
  /** The current active page number (1-indexed) */
  currentPage: number;
  /** Total number of pages available */
  totalPages: number;
  /** Number of pages to show at the start and end */
  showFromEnd: number;
  /** Number of pages to show on each side of the current page */
  showFromCurrent: number;
}

/**
 * Creates a range of numbers from lower (inclusive) to upper (exclusive)
 *
 * @example
 * range(1, 4) // [1, 2, 3]
 * range(5, 8) // [5, 6, 7]
 */
export function range(lower: number, upper: number): number[] {
  if (upper < lower) return [];
  return Array.from({ length: upper - lower }).map((_, i) => i + lower);
}

/**
 * Calculates the initial page ranges before any adjustments
 *
 * This creates three ranges:
 * - Start: First N pages (where N = showFromEnd)
 * - Middle: Pages around the current page
 * - End: Last N pages (where N = showFromEnd)
 *
 * @param config - Pagination configuration
 * @returns Initial page ranges
 */
function calculateInitialRanges(config: PaginationConfig): {
  startRange: PageRange;
  middleRange: PageRange;
  endRange: PageRange;
} {
  const { currentPage, totalPages, showFromEnd, showFromCurrent } = config;

  // Middle range: showFromCurrent pages on each side of current page
  // Example: if currentPage=8 and showFromCurrent=2, this would be [6, 11)
  const middleRange: PageRange = [
    Math.max(1, Math.min(currentPage - showFromCurrent, totalPages + 1)),
    Math.min(totalPages, currentPage + showFromCurrent) + 1,
  ];

  // Start range: First showFromEnd pages
  // Example: if showFromEnd=3, this would be [1, 4)
  // But we stop before the middle range starts
  const startRange: PageRange = [1, Math.min(middleRange[0], showFromEnd + 1)];

  // End range: Last showFromEnd pages
  // Example: if totalPages=100 and showFromEnd=3, this would be [98, 101)
  // But we start after the middle range ends
  const endRange: PageRange = [
    Math.max(1, middleRange[1], totalPages - showFromEnd + 1),
    totalPages + 1,
  ];

  return { startRange, middleRange, endRange };
}

function pagesInRange(range: PageRange) {
  return Math.max(0, range[1] - range[0]);
}

/**
 * Counts the total number of page entries (including ellipses) that will be displayed
 *
 * @param startRange - The start page range
 * @param middleRange - The middle page range
 * @param endRange - The end page range
 * @returns Total number of entries including ellipses
 */
function countTotalEntries(
  startRange: PageRange,
  middleRange: PageRange,
  endRange: PageRange
): number {
  // Count pages in each range
  const startCount = pagesInRange(startRange);
  const middleCount = pagesInRange(middleRange);
  const endCount = pagesInRange(endRange);

  // Count ellipses (only show if ranges don't touch)
  const firstEllipsis = startRange[1] === middleRange[0] ? 0 : 1;
  const secondEllipsis = middleRange[1] === endRange[0] ? 0 : 1;

  return startCount + middleCount + endCount + firstEllipsis + secondEllipsis;
}

/**
 * Adjusts ranges to maintain a minimum number of entries
 *
 * When there aren't enough pages to fill minEntries, this function expands
 * the middle range to fill the gaps, ensuring the pagination nav doesn't
 * jump around in size as the user navigates between pages.
 *
 * @param ranges - The initial page ranges
 * @param totalPages - Total number of pages
 * @param minEntries - Minimum number of entries to display
 * @returns Adjusted page ranges
 */
function adjustRangesToMeetMinimum(
  ranges: {
    startRange: PageRange;
    middleRange: PageRange;
    endRange: PageRange;
  },
  totalPages: number,
  minEntries: number
): {
  startRange: PageRange;
  middleRange: PageRange;
  endRange: PageRange;
} {
  const { startRange, middleRange, endRange } = ranges;
  const currentEntries = countTotalEntries(startRange, middleRange, endRange);

  // If we already have enough entries, no adjustment needed
  if (currentEntries >= minEntries) {
    return ranges;
  }

  let remaining = minEntries - currentEntries;
  const delta = Math.floor(remaining / 2);

  // Calculate gaps between ranges
  const firstGap = middleRange[0] - startRange[1];
  const secondGap = endRange[0] - middleRange[1];

  // Determine how much to expand the middle range on the left side
  const firstMod = Math.min(
    firstGap,
    secondGap === 0
      ? // No second gap exists, use all remaining space on the left
        remaining
      : secondGap < remaining - delta
        ? // Second gap is smaller than needed, use it all on the left
          // Add 1 to compensate for losing the ellipsis
          remaining - secondGap + 1
        : // Distribute evenly
          delta
  );

  remaining -= firstMod;

  // Determine how much to expand the middle range on the right side
  const secondMod = Math.min(secondGap, remaining);

  // Apply adjustments to middle range
  const adjustedMiddleRange: PageRange = [
    Math.max(1, middleRange[0] - firstMod),
    Math.min(totalPages + 1, middleRange[1] + secondMod),
  ];

  // Adjust start and end ranges to prevent overlap
  const adjustedStartRange: PageRange = [
    startRange[0],
    Math.min(adjustedMiddleRange[0], startRange[1]),
  ];

  const adjustedEndRange: PageRange = [
    Math.max(adjustedMiddleRange[1], endRange[0]),
    endRange[1],
  ];

  return {
    startRange: adjustedStartRange,
    middleRange: adjustedMiddleRange,
    endRange: adjustedEndRange,
  };
}

/**
 * Calculates the page ranges for pagination display
 *
 * This is the main function that coordinates the pagination logic. It:
 * 1. Calculates initial ranges around start, middle (current), and end
 * 2. Adjusts ranges if needed to maintain a consistent UI size
 * 3. Determines where to show ellipses
 *
 * The pagination typically looks like: [1 2 3] ... [7 8 9] ... [98 99 100]
 * where the middle section contains the current page.
 *
 * @param config - Pagination configuration
 * @returns Calculated pagination ranges with ellipsis indicators
 */
export function calculatePaginationRanges(
  config: PaginationConfig
): PaginationRanges {
  const { totalPages, showFromEnd, showFromCurrent } = config;

  // Calculate the minimum number of entries to keep the nav consistent
  // This includes: start pages + middle pages + end pages + 2 ellipses + current page
  const minEntries =
    showFromEnd * 2 + // Pages at start and end
    showFromCurrent * 2 + // Pages on each side of current
    1 + // The current page itself
    2; // Space for two ellipses

  // Step 1: Calculate initial ranges
  let ranges = calculateInitialRanges(config);

  // Step 2: Adjust ranges if we have too few entries
  ranges = adjustRangesToMeetMinimum(ranges, totalPages, minEntries);

  const { startRange, middleRange, endRange } = ranges;

  // Step 3: Determine where to show ellipses
  // Show ellipsis only if ranges don't touch
  return {
    startRange,
    middleRange,
    endRange,
    showFirstEllipsis: startRange[1] !== middleRange[0],
    showSecondEllipsis: middleRange[1] !== endRange[0],
  };
}
