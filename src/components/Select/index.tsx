import React from 'react';

interface SelectProps<T> {
  id: string;
  value: T;
  options: T[];
  setValue: (value: T | undefined) => void;
  placeholder?: string;
  className?: string;
}

const Select = <T extends string | number>({
  id,
  value,
  options,
  setValue,
  placeholder = '',
  className,
}: SelectProps<T>) => {
  return (
    <select
      name={id}
      id={id}
      value={value}
      className={className}
      onChange={(e) => {
        const value = e.target.value as T;
        setValue(value || undefined);
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
