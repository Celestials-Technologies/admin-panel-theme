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
      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
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
  toggle: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
};

export default Button;
