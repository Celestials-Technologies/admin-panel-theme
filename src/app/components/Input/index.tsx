import React from 'react';



// Define types for input types (string, number, etc.)
type InputType = 'text' | 'number' | 'email'; // Add more types as needed

// Define InputProps as a generic type that extends HTMLInputElement
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
}

// Define Input as a generic functional component
const Input: React.FC<InputProps> = ({ type, ...props }) => {
  return (
    <div className='px-3 flex items-center border border-borderGrey rounded-md h-[34px] '>
      <input
        type={type}
        {...props}
        className={`ml-2 focus:outline-none ${props.className}`}
      />
    </div>
  );
};

export default Input;
