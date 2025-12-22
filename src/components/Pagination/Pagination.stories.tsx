import React from "react";
import { Pagination, LinkForPage } from ".";

export const Examples = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return <div>
    <h2>Default settings</h2>
    <Pagination
      currentPage={currentPage} totalPages={10}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>Showing only one link from the end</h2>
    <Pagination
      currentPage={currentPage} totalPages={10} showFromEnd={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>Showing zero links from the end</h2>
    <Pagination
      currentPage={currentPage} totalPages={10} showFromEnd={0}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>Showing only one link from the end and current</h2>
    <Pagination
      currentPage={currentPage} totalPages={10} showFromEnd={1} showFromCurrent={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>less links</h2>
    <Pagination
      currentPage={currentPage} totalPages={2}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>more links and summary</h2>
    <Pagination
      currentPage={currentPage} totalPages={40} totalItems={395} pageSize={10}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>zero links</h2>
    <Pagination
      currentPage={currentPage} totalPages={0}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />

    <h2>one link</h2>
    <Pagination
      currentPage={currentPage} totalPages={1}
      Page={({ page, current }) =>
        <LinkForPage page={page} current={current} onClick={() => setCurrentPage(page)} href="#" />
      }
    />
  </div>
};
