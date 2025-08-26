import type { CardData } from "@/Types";
import cardpic1 from "../../assets/images/image (7).png";
import cardpic2 from "../../assets/images/image (8).png";
import cardpic3 from "../../assets/images/image (9).png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Card = () => {
  const cards: CardData[] = [
    {
      id: 1,
      image: <img src={cardpic1} alt="" />,
      title: "Brulee-wood Grain",
      subtitle: "Price:00$",
      color: "bg-green-500",
    },
    {
      id: 2,
      image: <img src={cardpic2} alt="" />,
      title: "Red Bordeaux-wood Grain",
      subtitle: "Price:00$",
      color: "bg-blue-500",
    },
    {
      id: 3,
      image: <img src={cardpic3} alt="" />,
      title: "Caramel-wood Grain",
      subtitle: "Price:00$",
      color: "bg-red-500",
    },
    {
      id: 4,
      image: <img src={cardpic3} alt="" />,
      title: "Caramel-wood Grain",
      subtitle: "Price:00$",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="space-y-10 max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="text-6xl font-bold italic text-gray-800 dark:text-white">
            Discover{" "}
            <span className="text-green"> authentic wood finishes</span> you
            won’t find <span className="text-green">anywhere</span> else
          </h2>
          <p className="text-[#6F706A] dark:text-gray-300 text-lg py-4 leading-relaxed">
            Our wood finishes are not mass-produced imitations — they’re
            carefully curated to bring out the natural beauty, texture, and
            character of real wood
          </p>
        </div>
      </div>

      {/* Cards */}

      <Carousel className="max-w-[1600px] mx-auto w-full px-6 mt-10 text-white">
        <CarouselContent>
          {cards.map((card) => (
            <CarouselItem key={card.id} className="md:basis-1/3">
              <div className=" dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col">
                {/* Image */}
                <div className="w-full h-full overflow-hidden">
                  {card.image}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h1 className="text-3xl font-medium text-left text-gray-900 dark:text-white">
                      {card.title}
                    </h1>
                    <p className="text-gray-600 text-2xl font-semibold dark:text-gray-300 text-left mt-1">
                      {card.subtitle}
                    </p>
                    <ol className="text-left text-md text-[#3F4919]">
                      <li>20 Year limited residential warranty</li>
                      <li>Linear grain pattern with refined streaking</li>
                    </ol>

                    {/* Colors */}
                    <div className="flex items-center justify-start mt-2">
                      <p className="text-left text-lg font-semibold text-[#3F4919]">
                        Color:
                      </p>
                      <p className="bg-[#898989] rounded-2xl w-5 h-5 ml-2"></p>
                      <p className="bg-[#835B45] rounded-2xl w-5 h-5 ml-2"></p>
                      <p className="bg-[#A59A88] rounded-2xl w-5 h-5 ml-2"></p>
                      <p className="bg-[#C8B095] rounded-2xl w-5 h-5 ml-2"></p>
                      <p className="bg-[#CD774B] rounded-2xl w-5 h-5 ml-2"></p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4">
                    <div className="flex gap-6 py-4 items-center justify-center">
                      <button className=" text-[#3F4919]  py-2 px-5  hover:bg-green hover:text-white transition-colors border rounded-full border-green">
                        Shop Now
                      </button>
                      <button className=" text-[#3F4919] border-green py-2 px-5  hover:bg-green hover:text-white  transition-colors border rounded-full">
                        Explore more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="bg-green hover:bg-white w-12 h-12" />
        <CarouselNext className="bg-green hover:bg-white w-12 h-12" />
      </Carousel>

      <button className="primarybtn">View All Products</button>
    </div>
  );
};
