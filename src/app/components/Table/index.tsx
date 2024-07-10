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
    <div className='w-full'>
      <div className='flex items-center justify-between w-full mb-4'>
        <div className='flex items-center gap-12'>
          <h2 className='!text-xl font-gilroy-bold leading-5 text-drak800 font-bold whitespace-nowrap'>All Activities</h2>
            {showSearchBar && (
              <Input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{padding: '12px', width:'998px', borderRadius:'4px' }}
              />
            )}
        </div>
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
       
      </div>
      <table className='tableActiveShadow'
        {...getTableProps()}
        style={{width: '100%'}}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ borderBottom: '1px solid #EEEEEE', padding: '10px' , textAlign:'start'}}
                  key={column.id}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} style={{background:'#fff'}}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ borderBottom: 'solid 1px #EEEEEE', borderLeft:'0px', padding: '12px', paddingBottom:'54px'}}
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
