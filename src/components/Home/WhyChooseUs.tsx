// import { FC } from "react";

import type { FC } from "react";
import leaf from "../../assets/images/icomoon-free_leaf.svg"
import Simplification1 from "../../assets/images/Simplification (1).svg"
import Simplification2 from "../../assets/images/Simplification (2).svg"
import Simplification from "../../assets/images/Simplification.svg"

const WhyChooseUs: FC = () => {
  const features = [
          {
             icon: <img src={Simplification2} alt="" />,
            text: "Never paint, stain, seal",
          },
          {
             icon: <img src={Simplification} alt="" />,
            text: "Tough, Beautiful, and Easy to Install",
          },
    {
      icon: <img src={leaf} alt="" />,
      text: "Product made of 60% wood powder 34% plastic(10% verging plastic for Cap) 6% additives & recycled materials",
    },
    {
       icon: <img src={Simplification1} alt="" />,
      text: "More durable than other composite boards",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-6xl font-bold italic text-gray-800 dark:text-white">
            Why <span className="text-green">Choose</span> Us
          </h2>
          <p className="text-[#6F706A] dark:text-gray-300 text-lg leading-relaxed">
            Enjoy the perfect balance of beauty, durability, and low maintenance
            with our premium composite fencing solutions. Crafted to withstand
            the harshest weather while maintaining a rich finish.
          </p>
          <button className="
          px-6 py-3 rounded-full bg-green text-white font-medium hover:bg-green-600 transition ">
            Explore more
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-10 bg-[#94B3161A] text-wrap  rounded-lg shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <p className="text-center text-gray-700 text-sm mt-3 px-2">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;