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
    <div className="w-full">
      <div className="w-full items-center lg:mb-4 lg:flex lg:gap-12">
        <h2 className="mb-3 whitespace-nowrap font-gilroy-bold !text-xl font-bold leading-5 text-drak800 lg:mb-0">
          All Activities
        </h2>
        <div className="relative mb-5 w-full gap-4 md:flex lg:mb-0 lg:gap-[42px]">
          <div className="absolute ml-4  mt-3 h-[18px] w-[18px] cursor-pointer">
            <SearchIcon />
          </div>
          {showSearchBar && (
            <Input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="mb-3 h-[42px] w-full rounded border border-gray-200 p-3 pl-[46px] font-interMedium text-[13px] font-medium text-grey600 md:mb-0"
            />
          )}
          <div className="font-inter inline-flex h-[42px] whitespace-nowrap rounded border border-gray-200 bg-white px-4 py-2 font-[inter] text-[13px] font-medium leading-[13px] text-grey600 md:flex">
            {showFilter &&
              headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column) =>
                  column.Filter ? (
                    <div
                      key={column.id}
                      className="flex items-center justify-center "
                    >
                      <label htmlFor={column.id}>
                        {column.render('Header')}:{' '}
                      </label>
                      {column.render('Filter')}
                    </div>
                  ) : null
                )
              )}
          </div>
        </div>
      </div>
      <div className="tableShadow w-full overflow-auto">
        <table
          className="min-w-[700px] overflow-auto rounded-t-lg"
          {...getTableProps()}
          style={{ width: '100%' }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="border-b border-gray400 bg-grey100 p-2.5 text-start text-13 font-medium text-grey600"
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
                      className="h-[74px] border-b border-l-0 border-gray400 p-3  text-13 font-medium text-grey300 "
                      {...cell.getCellProps()}
                      key={cell.column.id}
                    >
                      <p className="flex h-full"> {cell.render('Cell')}</p>
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
