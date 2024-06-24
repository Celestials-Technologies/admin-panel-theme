import React from 'react';
import Image from 'next/image';



// Define types for input types (string, number, etc.)
type InputType = 'text' | 'number' | 'email'; // Add more types as needed

// Define InputProps as a generic type that extends HTMLInputElement
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
}

// Define Input as a generic functional component
const Input: React.FC<InputProps> = ({ type, ...props }) => {
  return (
    <div className='px-3 flex items-center border border-gray-300 rounded-md h-[34px] '>
      <div className='flex items-center'>
        <Image src={'images/SearchIcon.svg'} alt='SearchIcon' width={13} height={13} />
        <input
          type={type}
          {...props}
          className={`ml-2 focus:outline-none focus:ring focus:ring-blue-200 ${props.className}`}
        />
      </div>
      <Image src={'images/searchBar.svg'} alt='SearchIcon' width={24} height={16} />

    </div>
  );
};

export default Input;
