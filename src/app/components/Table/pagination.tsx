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
    <div className="pagination w-full h-16 px-6 gap-2.5 flex items-center lg:justify-end bg-white rounded-b-lg  min-w-[700px]">
      {/* <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </Button>{' '} */}
      <Button className='w-6 text-grey300 h-6 rounded-[3px] border cursor-pointer border-grey500 flex items-center justify-center bg-white' onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </Button>{' '}
      <a className='w-6 h-6 pagination-text rounded-[3px] border cursor-pointer border-grey500 flex items-center justify-center bg-white' href="#/">1</a>
      <a className='w-6 h-6 bg-grey600 pagination-text rounded-[3px] border cursor-pointer border-grey500 flex items-center justify-center' href="#/">2</a>
      <a className='w-6 h-6 pagination-text rounded-[3px] border cursor-pointer border-grey500 flex items-center justify-center bg-white' href="#/">3</a>
      <a className='w-6 h-6 text-grey600 rounded-[3px] border cursor-pointer border-grey500 flex items-center justify-center bg-white relative' href="#/"><span className='absolute top-[-5px]'>...</span></a>


      <Button className='w-6 h-6 text-grey300 rounded-[3px] border cursor-pointer border-grey500 flex items-center justify-center bg-white' onClick={() => nextPage()} disabled={!canNextPage}>
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
