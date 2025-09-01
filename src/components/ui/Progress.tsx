interface CheckoutStepperProps {
  currentStep: number;
}

export default function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
  const steps = [
    { id: 1, label: "Shopping Cart" },
    { id: 2, label: "Checkout Details" },
    { id: 3, label: "Order Complete" },
  ];

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      <div className="flex justify-between items-center relative ">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold
                ${
                  currentStep === step.id
                    ? "bg-[#99BA14] text-white scale-110"
                    : step.id < currentStep
                    ? "bg-lime-100 text-lime-700"
                    : "bg-lime-100 text-lime-600"
                } transition-transform duration-300`}
            >
              {step.id}
            </div>
            <span className={`mt-2 text-sm font-medium ${currentStep === step.id ? "text-black" : "text-lime-700"}`}>
              {step.label}
            </span>
          </div>
        ))}

        {/* Progress Line */}
        <div className="absolute top-20 left-5 right-5 h-2 bg-[#99BA14] opacity-10 z-0 -translate-y-1/2"></div>
        <div
          className="absolute top-20 left-5 h-2 rounded-full bg-[#99BA14] z-10 -translate-y-1/2  transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* <span className="text-xs font-medium block text-right">{Math.round(progress)}% Complete</span> */}
    </div>
  );
}
