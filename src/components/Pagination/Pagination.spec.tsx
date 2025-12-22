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
