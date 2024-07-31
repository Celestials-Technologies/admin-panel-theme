import React from 'react';
import RadioButton from '.';

// Define a type for the RadioButtonGroupProps
interface RadioButtonGroupProps<T> {
  name: string;                     
  options: { value: T; label: string }[]; 
  selectedValue: T;                 
  onChange: (value: T) => void;     
}

// Define the RadioButtonGroup component
const RadioButtonGroup = <T extends unknown>({
  name,
  options,
  selectedValue,
  onChange
}: RadioButtonGroupProps<T>) => {
  return (
    <div>
      {options.map(option => (
        <RadioButton
          key={option.value as unknown as string} 
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={onChange}
          label={option.label}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
