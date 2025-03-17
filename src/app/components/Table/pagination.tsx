/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Button from '../../utils/ui/Button';

interface Props {
  canPreviousPage: boolean;
  previousPage: () => void;
  gotoPage: (page: number) => void;
  nextPage: () => void;
  canNextPage: boolean;
  state: {
    pageIndex: number;
    pageSize: number;
  };
  pageCount: number;
  pageOptions: number[];
  setPageSize: (size: number) => void;
}

const Pagination: React.FC<Props> = ({
  canPreviousPage,
  previousPage,
  gotoPage,
  nextPage,
  canNextPage,
  state,
  pageCount,
  pageOptions,
  setPageSize,
}) => {
  const currentPage = state.pageIndex + 1;
  const totalPages = pageOptions.length;

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination flex h-16 w-full min-w-[700px] items-center gap-2.5 rounded-b-lg bg-white px-6 lg:justify-end">
      <Button
        className="flex size-8 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey300 disabled:opacity-50"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {'<<'}
      </Button>
      <Button
        className="flex size-8 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey300 disabled:opacity-50"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {'<'}
      </Button>

      {getPageNumbers().map((pageNumber) => (
        <Button
          key={pageNumber}
          className={`border-bg-ryzeoGreen flex size-8 cursor-pointer items-center justify-center rounded-[3px] border ${
            pageNumber === currentPage ? 'bg-ryzeoGreen text-white' : 'bg-white'
          }`}
          onClick={() => gotoPage(pageNumber - 1)}
        >
          {pageNumber}
        </Button>
      ))}

      {totalPages > 5 && currentPage < totalPages - 2 && (
        <span className="flex size-6 items-center justify-center">...</span>
      )}

      <Button
        className="flex size-8 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey300 disabled:opacity-50"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {'>'}
      </Button>
      <Button
        className="flex size-8 cursor-pointer items-center justify-center rounded-[3px] border border-grey500 bg-white text-grey300 disabled:opacity-50"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {'>>'}
      </Button>

      <span className="ml-4 text-sm text-grey600">
        Page {currentPage} of {totalPages}
      </span>

      <select
        className="ml-4 rounded border border-grey500 bg-transparent px-2 py-1 text-sm"
        value={state.pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 20, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
