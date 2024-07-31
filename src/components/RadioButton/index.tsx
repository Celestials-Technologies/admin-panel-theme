import React from 'react';

interface RadioButtonProps<T> {
  name: string;
  value: T;
  checked: boolean;
  onChange: (value: T) => void;
  label: string;
}

const RadioButton = <T extends unknown>({
  name,
  value,
  checked,
  onChange,
  label,
}: RadioButtonProps<T>) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value as unknown as string}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
};

export default RadioButton;
