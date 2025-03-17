import React from 'react';
import { Stepper } from './Stepper';
import { Step } from './Step';
import Button from '@/app/utils/ui/Button';

export function CommonStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-6">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <div className="mt-5 flex justify-between">
        <Button
          className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handlePrev}
          disabled={isFirstStep}
        >
          Prev
        </Button>
        <Button
          className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleNext}
          disabled={isLastStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
