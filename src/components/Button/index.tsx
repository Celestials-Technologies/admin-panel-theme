import React from 'react';

import { buttonVarients } from '@/utils/buttons/indes';

// Define types for button variants (primary, secondary, etc.)
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'toggle';

// Define ButtonProps as a generic type that extends HTMLButtonElement
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  // Define styles for different button variants
  const variantStyles: Record<ButtonVariant, string> = buttonVarients;
  return (
    <button
      {...props}
      className={`rounded-md focus:outline-none 
      ${variant && variantStyles[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
