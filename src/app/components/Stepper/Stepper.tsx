import React, { useEffect } from 'react';

interface StepperProps {
  activeStep: number;
  isLastStep: (value: boolean) => void;
  isFirstStep: (value: boolean) => void;
  children: React.ReactNode;
}

export function Stepper({ activeStep, children, isLastStep, isFirstStep }: StepperProps) {
  const steps = React.Children.toArray(children);

  useEffect(() => {
    isLastStep(activeStep === steps.length - 1);
    isFirstStep(activeStep === 0);
  }, [activeStep, steps.length, isLastStep, isFirstStep]);

  return (
    <div className="flex items-center gap-4">
      {steps.map((step, index) => {
        return (
          <React.Fragment key={index}>
            {React.cloneElement(step as React.ReactElement, {
              isActive: activeStep === index,
              isCompleted: activeStep > index,
            })}
            {index < steps.length - 1 && (
              <div
                className={`h-px w-full ${activeStep > index ? 'bg-green-500' : 'bg-gray-300 '}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
