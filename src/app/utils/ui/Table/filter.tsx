import React from 'react';
import type { ColumnInstance, UseFiltersColumnProps } from 'react-table';

import Select from '../Select';

interface SelectColumnFilterProps<D extends object> {
  column: ColumnInstance<D> & UseFiltersColumnProps<D>;
}

export function SelectColumnFilter<D extends object>({
  column: { filterValue, setFilter, preFilteredRows, id },
}: SelectColumnFilterProps<D>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any[] = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <Select
      id="exampleSelect"
      value={filterValue}
      options={options}
      setValue={setFilter}
      placeholder="All"
      className="bg-white outline-none"
    />
  );
}
