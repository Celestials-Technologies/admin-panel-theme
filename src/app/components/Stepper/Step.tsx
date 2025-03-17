import Button from '@/app/utils/ui/Button';
import React from 'react';

interface StepProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isCompleted?: boolean;
}

export function Step({ children, onClick, isActive, isCompleted }: StepProps) {
  return (
    <Button
      onClick={onClick}
      className={`relative flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-full border-2 
        ${
          isActive
            ? 'border-blue-500 bg-blue-50 text-blue-500'
            : isCompleted
              ? 'border-green-500 bg-green-50 text-green-500'
              : 'border-gray-300 bg-white hover:bg-gray-100'
        } 
        text-sm font-semibold transition-colors`}
    >
      {children}
    </Button>
  );
}
