import React from 'react';

// Define types for input types (string, number, etc.)
type InputType = 'text' | 'number' | 'email'; // Add more types as needed

// Define InputProps as a generic type that extends HTMLInputElement
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
}

// Define InputComponent as a generic functional component
const InputComponent: React.FC<InputProps> = ({ type, ...props }) => {
  return (
    <input
      type={type}
      {...props}
      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    />
  );
};

export default InputComponent;
