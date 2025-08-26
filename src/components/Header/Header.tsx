import type { HeaderProps } from "@/Types";
import React from "react";



export const Header: React.FC<HeaderProps> = ({
  image,
  title,
  subtitle,
  button = [],
}) => {
  return (
    <section>
      <div className="relative">
        <img src={image} alt="header" className="w-full h-[300px] md:h-[500px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl md:text-5xl font-bold italic">{title}</h1>
          <p className="text-sm md:text-lg text-white mt-4 max-w-2xl">{subtitle}</p>
          {button.length > 0 && (
         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
  {button.map((btn, idx) => (
    <button
      key={idx}
      className="px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg lg:text-xl rounded-full bg-green hover:bg-transparent hover:text-white border border-green transition text-white"
      onClick={btn.onClick}
    >
      {btn.label}
    </button>
  ))}
</div>

          )}
        </div>
      </div>
    </section>
  );
};
