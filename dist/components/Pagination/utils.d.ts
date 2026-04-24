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
export declare type PageRange = [number, number];
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
export declare function range(lower: number, upper: number): number[];
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
export declare function calculatePaginationRanges(config: PaginationConfig): PaginationRanges;
