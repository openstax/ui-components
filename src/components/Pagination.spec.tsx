import { render } from '@testing-library/react';
import { Pagination, LinkForPage } from "./Pagination";

describe('Pagination', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(<Pagination
      currentPage={1} totalPages={10}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} href="#" />
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
});
