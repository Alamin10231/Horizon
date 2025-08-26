import React from "react";
import { Usecards } from "../Shared/Usecards";
import { Link } from "react-router";
import type { Carddata } from "@/Types";

export const RecentView = () => {
  const { cards, loading } = Usecards();
  if (loading) return <div className="p-6 text-center">Loading...</div>;

 
  const recentCards: Carddata[] = cards.slice(0, 3);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#3F4919] mb-10 tracking-wide">
        Recent View
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {recentCards.map((card) => (
          <div
            key={card.id}
            className="dark:bg-gray-800 bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow w-full max-w-sm border"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-56 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between items-start">
              <div className="text-start space-y-2">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {card.title}
                </h1>
                <p className="text-gray-600 text-lg font-medium dark:text-gray-300">
                  {card.subtitle}
                </p>

                <ol className="text-sm text-[#3F4919] list-disc list-inside mt-2">
                  <li>20 Year limited residential warranty</li>
                  <li>Linear grain pattern with refined streaking</li>
                </ol>

                {/* Colors */}
                <div className="flex items-center justify-start mt-3">
                  <p className="text-sm font-semibold text-[#3F4919] mr-2">Color:</p>
                  <span className="bg-[#898989] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#835B45] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#A59A88] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#C8B095] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#CD774B] rounded-2xl w-5 h-5 ml-2"></span>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="mt-4 flex w-full gap-6 py-4">
                <button className="flex-1 text-[#3F4919] py-2 hover:bg-green hover:text-white transition-colors border rounded-full border-green">
                  <Link to="/shopnow">Shop Now</Link>
                </button>
                <button className="flex-1 text-[#3F4919] py-2 hover:bg-green hover:text-white transition-colors border rounded-full border-green">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center mt-10">
        <Link
          to={`/pcardsall`}
          className="primarybtn px-8 sm:px-12 md:px-16 text-base sm:text-md md:text-xl my-5"
        >
          See All
        </Link>
      </div>
    </div>
  );
};
