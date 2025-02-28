import React, { useMemo, useState } from 'react';
import type { Column } from 'react-table';
import { useFilters, usePagination, useSortBy, useTable } from 'react-table';

import SearchIcon from '../../../../public/svgs/SearchIcon';
import Input from '../Input';
import Pagination from './pagination';

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
  } = useTable(
    { columns, data: filteredData },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className="w-full">
      <div className="w-full items-center lg:mb-4 lg:flex lg:gap-12">
        <h2 className="mb-3 whitespace-nowrap font-gilroy-bold !text-xl font-bold leading-5 text-drak800 lg:mb-0">
          All Activities
        </h2>
        <div className="relative mb-5 w-full gap-4 md:flex lg:mb-0 lg:gap-[42px]">
          <div className="absolute ml-4  mt-3 size-[18px] cursor-pointer">
            <SearchIcon />
          </div>
          {showSearchBar && (
            <Input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{ width: '100%' }}
              className="mb-3 h-[42px] rounded border border-gray-200 p-3 pl-[46px] font-interMedium text-13 font-medium text-grey600 md:mb-0"
            />
          )}
          <div className="font-inter inline-flex h-[42px] whitespace-nowrap rounded border border-gray-200 bg-white px-4 py-2 font-[inter] text-13 font-medium leading-[13px] text-grey600 md:flex">
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
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      borderBottom: '1px solid #EEEEEE',
                      padding: '10px',
                      textAlign: 'start',
                      background: '#fafafa',
                      fontFamily: 'inter',
                      fontSize: '13px',
                      lineHeight: '18.2px',
                      fontWeight: '500',
                      color: '#757575',
                      cursor: 'pointer',
                    }}
                    key={column.id}
                  >
                    <div className="flex items-center">
                      {column.render('Header')}
                      <span className="ml-2 w-10">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? '▼'
                            : '▲'
                          : ''}
                      </span>
                    </div>
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
                      {...cell.getCellProps()}
                      style={{
                        borderBottom: 'solid 1px #EEEEEE',
                        borderLeft: '0px',
                        padding: '20px 10px',
                        color: '#616161',
                        fontSize: '13px',
                        lineHeight: '18.2px',
                        fontFamily: 'inter',
                        fontWeight: '500',
                      }}
                      key={cell.column.id}
                    >
                      {cell.render('Cell')}
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
