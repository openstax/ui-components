import { render } from '@testing-library/react';
import { Pagination, LinkForPage } from ".";
import { calculatePaginationRanges, range } from './utils';

const Page = ({ page, current }: { page: number; current: boolean }) =>
  <LinkForPage page={page} current={current} href="#" />;

describe('Pagination', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  afterEach(() => {
    root.remove();
  });

  // The rendered entries in order, with the current page starred, eg:
  // ['1', '...', '4', '5*', '6', '...', '10']
  const pageSequence = () =>
    Array.from(root.querySelectorAll('li')).map((li) =>
      `${li.textContent}${li.classList.contains('active') ? '*' : ''}`);

  it('renders every page when they all fit', () => {
    render(<Pagination currentPage={1} totalPages={10} Page={Page} />, {container: root});
    expect(pageSequence()).toEqual(['1*', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  });

  it('elides the gaps on either side of the current page', () => {
    render(<Pagination
      currentPage={5} totalPages={10} showFromEnd={1} showFromCurrent={1} Page={Page}
    />, {container: root});
    expect(pageSequence()).toEqual(['1', '...', '4', '5*', '6', '...', '10']);
  });

  // The nav holds a steady width, so when the current page is near an edge the
  // middle range grows into the space the missing ellipsis would have taken.
  it('grows the middle range when the current page is at the start', () => {
    render(<Pagination
      currentPage={1} totalPages={10} showFromEnd={1} showFromCurrent={1} Page={Page}
    />, {container: root});
    expect(pageSequence()).toEqual(['1*', '2', '3', '4', '5', '...', '10']);
  });

  it('grows the middle range when the current page is at the end', () => {
    render(<Pagination
      currentPage={10} totalPages={10} showFromEnd={1} showFromCurrent={1} Page={Page}
    />, {container: root});
    expect(pageSequence()).toEqual(['1', '...', '6', '7', '8', '9', '10*']);
  });

  it('renders ellipses as non-interactive entries', () => {
    render(<Pagination
      currentPage={5} totalPages={10} showFromEnd={1} showFromCurrent={1} Page={Page}
    />, {container: root});
    expect(Array.from(root.querySelectorAll('li.disabled'), (li) => li.textContent))
      .toEqual(['...', '...']);
    expect(root.querySelectorAll('li.disabled a')).toHaveLength(0);
  });

  it('marks only the current page for assistive tech', () => {
    render(<Pagination
      currentPage={5} totalPages={10} showFromEnd={1} showFromCurrent={1} Page={Page}
    />, {container: root});

    const current = root.querySelectorAll('[aria-current="page"]');
    expect(current).toHaveLength(1);
    expect(current[0].textContent).toBe('5');
    expect(current[0].getAttribute('aria-label')).toBe('Page 5');
    expect(root.querySelector('nav')?.getAttribute('aria-label')).toBe('pagination links');
  });

  it('falls back to "#" when the page href is empty', () => {
    render(<Pagination
      currentPage={1} totalPages={10}
      Page={({ page, current }) => <LinkForPage page={page} current={current} href="" />}
    />, {container: root});

    const hrefs = Array.from(root.querySelectorAll('a'), (a) => a.getAttribute('href'));
    expect(hrefs).toHaveLength(10);
    expect(hrefs.every((href) => href === '#')).toBe(true);
  });

  // The theme defaults now come from src/theme/theme.css and are checked centrally by
  // src/theme/tokens.spec.ts; what is still this component's business is that a consumer
  // can override them through the documented --pagination-* hooks.
  it('passes consumer custom properties through to the root', () => {
    render(<Pagination
      currentPage={1} totalPages={10} Page={Page}
      style={{ '--pagination-border-color': 'rebeccapurple' }}
    />, {container: root});

    expect((root.querySelector('.pagination') as HTMLElement).style
      .getPropertyValue('--pagination-border-color')).toBe('rebeccapurple');
  });

  it('renders nothing when there is nothing to paginate', () => {
    const { rerender } = render(
      <Pagination currentPage={1} totalPages={1} Page={Page} />, {container: root});
    expect(root.innerHTML).toBe('');

    rerender(<Pagination currentPage={1} totalPages={0} Page={Page} />);
    expect(root.innerHTML).toBe('');

    // A negative count is nonsense input, but rendering nothing beats rendering
    // a nav built from a negative range.
    rerender(<Pagination currentPage={1} totalPages={-1} Page={Page} />);
    expect(root.innerHTML).toBe('');
  });

  // Pagination gatekeeps on totalPages and PaginationPages holds the hooks, so
  // dropping to a single page unmounts the hooks rather than skipping them. This
  // guards the transition either way round.
  it('survives totalPages changing to 1 and back', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

    const { rerender } = render(
      <Pagination currentPage={1} totalPages={10} Page={Page} />, {container: root});
    expect(pageSequence()).toHaveLength(10);

    rerender(<Pagination currentPage={1} totalPages={1} Page={Page} />);
    expect(root.innerHTML).toBe('');

    rerender(<Pagination currentPage={1} totalPages={10} Page={Page} />);
    expect(pageSequence()).toHaveLength(10);

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('shows the range of items on the current page', () => {
    render(<Pagination
      currentPage={5} totalPages={15} showFromEnd={1} showFromCurrent={1}
      pageSize={5} totalItems={75} Page={Page}
    />, {container: root});
    expect(root.querySelector('.pagination-info')?.textContent).toBe('21-25 of 75');
  });

  it('omits the item range unless both pageSize and totalItems are given', () => {
    const { rerender } = render(
      <Pagination currentPage={5} totalPages={15} pageSize={5} Page={Page} />, {container: root});
    expect(root.querySelector('.pagination-info')).toBeNull();

    rerender(<Pagination currentPage={5} totalPages={15} totalItems={75} Page={Page} />);
    expect(root.querySelector('.pagination-info')).toBeNull();
  });
});

describe('Pagination/utils', () => {
  it('bounds-checks range', () => {
    expect(range(10, 5)).toEqual([]);
  });

  // Exercises the `secondGap < remaining - delta` branch of adjustRangesToMeetMinimum:
  // the right-hand gap is too small to absorb the shortfall on its own, so the
  // expansion spills leftwards. Here firstGap is already 0, so the middle range only
  // grows right -- the visible output is all ten pages, which is why this needs
  // asserting at the range level rather than against the DOM.
  it('expands the middle range to the left when the right gap is too small', () => {
    expect(calculatePaginationRanges({
      currentPage: 4, totalPages: 10, showFromEnd: 3, showFromCurrent: 2,
    })).toEqual({
      startRange: [1, 2],
      middleRange: [2, 8],
      endRange: [8, 11],
      showFirstEllipsis: false,
      showSecondEllipsis: false,
    });
  });
});
