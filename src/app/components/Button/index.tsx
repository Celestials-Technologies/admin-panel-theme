import { buttonVarients } from '@/app/utils/buttons/indes';
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
const variantStyles: Record<ButtonVariant, string> = buttonVarients;

export default Button;
