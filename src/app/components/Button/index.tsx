import React from 'react';

// Define types for button variants (primary, secondary, etc.)
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'toggle';

// Define ButtonProps as a generic type that extends HTMLButtonElement
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-md focus:outline-none 
      ${variantStyles[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
};

// Define styles for different button variants
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
  danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
  toggle: 'bg-[#42ADA7] -right-3 top-[59px] rotate-90	text-white absolute rounded-full h-6 w-6 flex justify-center items-center',
};

export default Button;
