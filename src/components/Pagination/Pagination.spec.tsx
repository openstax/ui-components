import { render } from '@testing-library/react';
import { Pagination, LinkForPage } from ".";
import { range } from './utils';

describe('Pagination', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot; default href is "#"', () => {
    render(<Pagination
      currentPage={1} totalPages={10}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="" />
      }
    />, {container: root});
    expect(document.body).toMatchSnapshot();
  });

  it('matches snapshot with dividers', () => {
    render(<Pagination
      currentPage={5} totalPages={10} showFromEnd={1} showFromCurrent={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
      }
    />, {container: root});
    expect(document.body).toMatchSnapshot();
  });

  it('Shows paginationinfo', () => {
    render(<Pagination
      currentPage={5} totalPages={15} showFromEnd={1} showFromCurrent={1}
      pageSize={5} totalItems={75}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
      }
    />, {container: root});
    expect(document.querySelector('.pagination-info')?.textContent).toBe('21-25 of 75');
  });

  it('grows to min size', () => {
    render(<Pagination
      currentPage={1} totalPages={10} showFromEnd={1} showFromCurrent={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
      }
    />, {container: root});
    expect(document.body).toMatchSnapshot();
  });

  it('grows to min size from back', () => {
    render(<Pagination
      currentPage={10} totalPages={10} showFromEnd={1} showFromCurrent={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
      }
    />, {container: root});
    expect(document.body).toMatchSnapshot();
  });

  it('noops', () => {
    render(<Pagination
      currentPage={1} totalPages={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
      }
    />, {container: root});
    expect(document.body).toMatchSnapshot();
  });

  // usePaginationRanges used to be called after the `totalPages <= 1` early
  // return, so going from many pages to one page changed the number of hooks
  // React saw and blew up with "rendered fewer hooks than expected".
  it('survives totalPages changing to 1 and back', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

    const Page = ({ page, current }: { page: number; current: boolean }) =>
      <LinkForPage page={page} current={current} href="#" />;

    const { rerender } = render(
      <Pagination currentPage={1} totalPages={10} Page={Page} />,
      {container: root}
    );
    expect(root.querySelector('.pagination')).not.toBeNull();

    rerender(<Pagination currentPage={1} totalPages={1} Page={Page} />);
    expect(root.innerHTML).toBe('');

    rerender(<Pagination currentPage={1} totalPages={10} Page={Page} />);
    expect(root.querySelector('.pagination')).not.toBeNull();

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  // This is a special case in adjustRangesToMeetMinimum
  it('expands middle range to the left', () => {
    render(<Pagination
      currentPage={4} totalPages={10}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
      }
    />, {container: root});
  });
});

describe('Pagination/utils', () => {
  it('bounds-checks range', () => {
    expect(range(10, 5)).toEqual([]);
  });
});
