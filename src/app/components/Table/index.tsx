import React, { useMemo, useState } from 'react';
import type { Column } from 'react-table';
import { useFilters, usePagination, useTable } from 'react-table';

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
  } = useTable({ columns, data: filteredData }, useFilters, usePagination);

  return (
    <div>
      {showSearchBar && (
        <Input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '50%' }}
        />
      )}
      {showFilter &&
        headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div key={column.id}>
                <label htmlFor={column.id}>{column.render('Header')}: </label>
                {column.render('Filter')}
              </div>
            ) : null
          )
        )}

      <table
        {...getTableProps()}
        style={{ border: 'solid 1px blue', width: '100%' }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ border: 'solid 1px gray', padding: '10px' }}
                  key={column.id}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ border: 'solid 1px gray', padding: '10px' }}
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
  );
};

export default TableComponent;
