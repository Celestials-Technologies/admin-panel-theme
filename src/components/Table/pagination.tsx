/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Button from '../Button';

interface Props {
  canPreviousPage: any;
  previousPage: any;
  gotoPage: any;
  nextPage: any;
  canNextPage: any;
  state: any;
  pageCount: any;
  pageOptions: any;
  setPageSize: any;
}

const Pagination: React.FC<Props> = ({
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
}) => {
  return (
    <div className="pagination flex h-16 w-full min-w-[700px] items-center gap-2.5 rounded-b-lg bg-white px-6  lg:justify-end">
      {/* <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </Button>{' '} */}
      <Button
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey300"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {'<'}
      </Button>{' '}
      <a
        className="pagination-text flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white"
        href="#/"
      >
        1
      </a>
      <a
        className="pagination-text flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-grey600"
        href="#/"
      >
        2
      </a>
      <a
        className="pagination-text flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white"
        href="#/"
      >
        3
      </a>
      <a
        className="relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey600"
        href="#/"
      >
        <span className="absolute top-[-5px]">...</span>
      </a>
      <Button
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey300"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {'>'}
      </Button>{' '}
      {/* <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </Button>{' '} */}
      {/* <span>
        Page{' '}
        <strong>
          {state.pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <select
        value={state.pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 20].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default Pagination;
