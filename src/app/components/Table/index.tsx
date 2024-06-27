import React from 'react';
import type { Column } from 'react-table';
import { useTable } from 'react-table';

const TableComponent: React.FC<{
  columns: Column[];
  data: readonly object[];
}> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
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
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell, index) => (
                <td
                  {...cell.getCellProps()}
                  style={{ border: 'solid 1px gray', padding: '10px' }}
                  key={`${index}${cell.value}`}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TableComponent;
