import React from 'react';

// Define types for input types (string, number, etc.)
type InputType = 'text' | 'number' | 'email' | 'date' | 'file' | 'password'; // Add more types as needed

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  labelText?: string;
  icon?: React.ReactNode;
  errorMessage?: string;
  borderOutline?: boolean;
  subTitle?: string;
}

const Input: React.FC<InputProps> = ({
  labelText,
  id,
  type,
  errorMessage,
  icon,
  borderOutline,
  subTitle,
  ...props
}) => {
  const inputId = id || `${type}-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`${icon ? 'flex items-center' : ''}`}>
      {labelText && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {labelText}
        </label>
      )}
      {icon ? <div>{icon}</div> : null}
      <input
        id={inputId}
        type={type}
        {...props}
        className={`focus:outline-none ${props.className} ${borderOutline ? 'rounded-md border p-2' : ''} 
        ${errorMessage && borderOutline ? 'border-red-500' : ''}
        `}
      />
      {errorMessage ? <p className="pl-1 pt-1 text-xs text-red-500">{errorMessage}</p> : null}
    </div>
  );
};

const SubTitleInput: React.FC<InputProps> = ({
  labelText,
  id,
  type,
  errorMessage,
  icon,
  borderOutline,
  subTitle,
  ...props
}) => {
  const inputId = id || `${type}-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`${icon ? 'flex items-center' : ''}`}>
      <input
        id={inputId}
        type={type}
        {...props}
        className={`focus:outline-none ${props.className} ${borderOutline ? 'rounded-md border p-2' : ''} 
        ${errorMessage && borderOutline ? 'border-red-500' : ''}
        `}
      />
    </div>
  );
};

export { Input, SubTitleInput };
