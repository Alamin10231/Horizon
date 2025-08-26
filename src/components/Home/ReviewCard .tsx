import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import manpic from "../../assets/images/Ellipse 8.png";
import manpic1 from "../../assets/images/Ellipse 8 (1).png";

const reviews = [
  {
    id: 1,
    name: "Saint Thomas",
    role: "Web Developer",
    image: manpic,
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Sagittis ornare vitae pellentesque amet est massa.",
  },
  {
    id: 2,
    name: "Mikel Jack",
    role: "Web Designer",
    image: manpic1,
    stars: 5,
    text: "Pharetra interdum non eget amet nisl non. Morbi posuere integer mollis aliquam fermentum odio vitae.",
  },
  {
    id: 3,
    name: "Sophia Liam",
    role: "UI/UX Designer",
    image: manpic,
    stars: 4,
    text: "Aliquam vitae velit in nunc facilisis egestas. Donec ac augue a purus scelerisque tristique.",
  },
  {
    id: 4,
    name: "David Lee",
    role: "Software Engineer",
    image: manpic1,
    stars: 5,
    text: "Aenean nec eros eget urna consequat accumsan. Curabitur posuere leo vel dolor volutpat.",
  },
];

export const ReviewSection = () => {
  return (
    <section className="bg-white py-16 max-w-[1490px] mx-auto px-6 relative">
      <h1 className="text-6xl font-bold text-[#3F4919] mb-8">
        Customer <span className="text-green">Review</span>
      </h1>

      <Carousel>
        {/* Nav buttons */}
        <div className="flex justify-end gap-4 mb-6 absolute -top-10 right-20">
          <CarouselPrevious className="px-4 py-2 min-h-10 min-w-10 bg-green rounded-full text-white">Prev</CarouselPrevious>
          <CarouselNext className="px-4 py-2 min-h-10 min-w-10 bg-green rounded-full text-white">Next</CarouselNext>
        </div>

        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="md:basis-1/2 lg:basis-1/2" 
            >
              <div className="shadow-md rounded-lg border border-gray-200 p-6 mx-4">
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(review.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 text-base mt-4 leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
