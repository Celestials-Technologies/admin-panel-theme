import React from "react";
import { Stepper } from "./Stepper";
import { Step } from "./Step";

 
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed" onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleNext} disabled={isLastStep}>
          Next
        </button>
      </div>
    </div>
  );
}