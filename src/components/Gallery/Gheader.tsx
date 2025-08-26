import React from "react";
import { Header } from "../Header/Header";
import headerpic from "../../assets/images/imagebg (20).png";
import { SizeVariantsView } from "../Shared/SizeVariantsView";

export const Gheader = () => {
  return (
    <div>
      <Header
        image={headerpic}
        title={
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl leading-snug">
            Driving Quality <span className="text-green">Durability,</span>{" "}
            and Customer <span className="text-green">Satisfaction</span>
          </p>
        }
        subtitle={
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl mt-4">
            we’re committed to delivering premium fencing solutions that stand
            the test of time. Our focus on superior materials, expert
            craftsmanship, and customer-first service ensures
          </p>
        }
        button={[{ label: "Shop Now" }, { label: "Order Free Sample" }]}
      />

      <div className="sizevarient mt-6">
        <SizeVariantsView />
      </div>
    </div>
  );
};
