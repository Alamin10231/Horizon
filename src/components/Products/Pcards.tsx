
import { Usecards } from "../Shared/Usecards";
import { Link } from "react-router";
import type { Carddata } from "@/Types";

export const Pcards = () => {
  const { cards, loading } = Usecards();
  if (loading) return <div className="p-6">Loading...</div>;

 
  const categories = Array.from(new Set(cards.map((c) => c.category)));

  return (
    <div className="p-6">
      {categories.map((cat) => {
        const filtercards: Carddata[] = cards
          .filter((c) => c.category === cat)
          .slice(0, 3); 

        return (
          <div key={cat} className="mb-16">
            <h1 className="text-4xl font-bold text-center text-[#3F4919] mb-8">
              {cat}
            </h1>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {filtercards.map((card) => (
                <div
            key={card.id}
            className="dark:bg-gray-800  rounded-2xl overflow-hidden  flex flex-col hover:shadow-lg transition-shadow w-full max-w-xl"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4  flex-1 flex flex-col justify-between items-start ">
              <div className="text-start">
                <h1 className="text-3xl font-medium text-gray-900 dark:text-white not-italic">
                  {card.title}
                </h1>
                <p className="text-gray-600 text-2xl font-semibold dark:text-gray-300 mt-1 not-italic">
                  {card.subtitle}
                </p>
                <ol className="text-md text-[#3F4919] list-disc list-inside mt-2">
                  <li>20 Year limited residential warranty</li>
                  <li>Linear grain pattern with refined streaking</li>
                </ol>

                {/* Colors */}
                <div className="flex items-center justify-start mt-3">
                  <p className="text-lg font-semibold text-[#3F4919] mr-2">Color:</p>
                  <span className="bg-[#898989] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#835B45] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#A59A88] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#C8B095] rounded-2xl w-5 h-5 ml-2"></span>
                  <span className="bg-[#CD774B] rounded-2xl w-5 h-5 ml-2"></span>
                </div>
              </div>

              {/* Footer Buttons */}
            <div className="mt-4 flex w-full gap-10 md:gap-20 py-4">
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
            <div className="flex justify-center mt-6">
              <Link
                to={`/pcardsall`}
                className="primarybtn px-8 sm:px-12 md:px-16 text-base sm:text-md md:text-xl my-5"
              >
                See All
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
