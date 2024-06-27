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
  gotoPage,
  nextPage,
  canNextPage,
  state,
  pageCount,
  pageOptions,
  setPageSize,
}) => {
  return (
    <div className="pagination">
      <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </Button>{' '}
      <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </Button>{' '}
      <Button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </Button>{' '}
      <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </Button>{' '}
      <span>
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
      </select>
    </div>
  );
};

export default Pagination;
