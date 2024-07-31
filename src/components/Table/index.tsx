import React, { useMemo, useState } from 'react';
import type { Column } from 'react-table';
import { useFilters, usePagination, useTable } from 'react-table';

import Input from '../Input';
import Pagination from './pagination';
import SearchIcon from '~/svgs/SearchIcon';

interface TableComponentProps {
  columns: Column[];
  data: readonly object[];
  showSearchBar?: boolean;
  showPagination?: boolean;
  showFilter?: boolean;
}

const TableComponent: React.FC<TableComponentProps> = (props) => {
  const {
    columns,
    data,
    showSearchBar = false,
    showPagination = false,
    showFilter = false,
  } = props;

  const [searchInput, setSearchInput] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [data, searchInput]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
  } = useTable({ columns, data: filteredData }, useFilters, usePagination);

  return (
    <div className='w-full'>
      <div className='lg:flex items-center lg:gap-12 w-full lg:mb-4'>
        <h2 className='!text-xl font-gilroy-bold leading-5 text-drak800 font-bold whitespace-nowrap mb-3 lg:mb-0'>All Activities</h2>
        <div className='mb-5 lg:mb-0 md:flex w-full gap-4 lg:gap-[42px] relative'>
          <div className='absolute ml-4  mt-3 w-[18px] h-[18px] cursor-pointer'>
            <SearchIcon />
          </div>
          {showSearchBar && (
            <Input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='border w-full p-3 pl-[46px] border-gray-200 rounded h-[42px] mb-3 md:mb-0 text-grey600 font-interMedium font-medium text-[13px]'
            />
          )}
          <div className='inline-flex md:flex whitespace-nowrap px-4 py-2 bg-white border border-gray-200 rounded h-[42px] leading-[13px] text-[13px] font-medium font-inter text-grey600 font-[inter]'>
            {showFilter &&
              headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column) =>
                  column.Filter ? (
                    <div key={column.id} className='flex items-center justify-center '>
                      <label htmlFor={column.id}>{column.render('Header')}: </label>
                      {column.render('Filter')}
                    </div>
                  ) : null
                )
              )}
          </div>
        </div>
      </div>
      <div className='w-full overflow-auto tableShadow'>
        <table className='rounded-t-lg min-w-[700px] overflow-auto'
          {...getTableProps()}
          style={{ width: '100%' }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    className='border-b border-gray400 p-2.5 text-start bg-grey100 text-13 font-medium text-grey600'
                    {...column.getHeaderProps()}
                    key={column.id}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} style={{ background: '#fff' }}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td
                      className='border-l-0 border-b border-gray400 p-3 h-[74px]  text-13 font-medium text-grey300 '
                      {...cell.getCellProps()}

                      key={cell.column.id}
                    >
                      <p className='flex h-full'> {cell.render('Cell')}</p>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <Pagination
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
            state={state}
            setPageSize={setPageSize}
            pageCount={pageCount}
            pageOptions={pageOptions}
            previousPage={previousPage}
            gotoPage={gotoPage}
            nextPage={nextPage}
          />
        )}
      </div>
    </div>
  );
};

export default TableComponent;
