"use client";

import { useState } from "react";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  { id: 1, label: "Shopping cart" },
  { id: 2, label: "Checkout details" },
  { id: 3, label: "Order complete" },

];

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate progression as percentage
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      {/* Stepper */}
      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        {steps.map((step) => (
          <StepperItem key={step.id} step={step.id} className="flex-1">
            <StepperTrigger
              className="w-full flex-col items-center gap-2 cursor-pointer"
              asChild
              onClick={() => setCurrentStep(step.id)}
            >
              <div className="flex flex-col items-center">
                <StepperIndicator
                  asChild
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    step.id <= currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <span>{step.id}</span>
                </StepperIndicator>
                <span className="text-sm mt-1">{step.label}</span>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>

      {/* Progression */}
      <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Step text info */}
      <div className="text-muted-foreground text-sm font-medium mt-2 tabular-nums">
        Step {currentStep} of {steps.length} ({steps[currentStep - 1].label})
      </div>
    </div>
  );
}
