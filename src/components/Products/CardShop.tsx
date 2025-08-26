import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  FaPlus,
  FaMinus,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import slider1 from "../../assets/images/image (7).png";
import slider2 from "../../assets/images/image (8).png";
import slider3 from "../../assets/images/image (9).png";
import slider4 from "../../assets/images/sliderpic.png";
import { SizeVariantsView } from "../Shared/SizeVariantsView";
import { useEffect, useState } from "react";

export const CardShop = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(0);
    }
  }, [thumbsSwiper]);

  return (
    <div className="flex items-start justify-between py-20 gap-10 relative">
      {/* Left side - Slider */}
      <section className="w-1/2 pl-6">
        {/* Main big slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffff",
            "--swiper-pagination-color": "#000",
          } as React.CSSProperties}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="rounded-2xl shadow-lg overflow-hidden mb-6"
        >
          {[slider1, slider2, slider3, slider4].map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbs slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {[slider1, slider2, slider3, slider4].map((src, i) => (
            <SwiperSlide
              key={i}
              className="group rounded-xl overflow-hidden cursor-pointer transition-all duration-300
                [&.swiper-slide-thumb-active]:scale-105
                [&.swiper-slide-thumb-active]:opacity-100"
            >
              <img
                src={src}
                className="w-full mx-4 rounded-xl h-28 object-cover opacity-70 group-[.swiper-slide-thumb-active]:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Right side - FenceSimulator */}
      <section className="w-1/2 pr-24 ">
        <div className="p-6 bg-white space-y-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-[#3F4919]">
            Brulee-wood Grain{" "}
            <span className="text-green text-sm font-semibold">In Stock</span>
          </h1>

          {/* Select Button 1 */}
          <p className="text-2xl text-[#3F4919]">Choose Color</p>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl cursor-pointer">
            <Select>
              <SelectTrigger className="w-full border-none shadow-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="red" className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-sm bg-[#822310]" />
                  <span className="text-[#3F4919] text-lg">Red Bordeaux</span>
                </SelectItem>
                <SelectItem
                  value="green"
                  className="flex items-center space-x-2"
                >
                  <span className="w-5 h-5 rounded-sm bg-green-700" />
                  <span className="text-[#1E3A1E] text-lg">Forest Green</span>
                </SelectItem>
                <SelectItem
                  value="blue"
                  className="flex items-center space-x-2"
                >
                  <span className="w-5 h-5 rounded-sm bg-blue-700" />
                  <span className="text-[#1E3A8A] text-lg">Royal Blue</span>
                </SelectItem>
                <SelectItem
                  value="brown"
                  className="flex items-center space-x-2"
                >
                  <span className="w-5 h-5 rounded-sm bg-yellow-900" />
                  <span className="text-[#5C4033] text-lg">Walnut Brown</span>
                </SelectItem>
                <SelectItem
                  value="gray"
                  className="flex items-center space-x-2"
                >
                  <span className="w-5 h-5 rounded-sm bg-gray-500" />
                  <span className="text-[#4B5563] text-lg">Stone Gray</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Button 2 */}
          <p className="text-2xl text-[#3F4919]">Choose Fence Height</p>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl cursor-pointer">
            <Select>
              <SelectTrigger className="w-full border-none shadow-none">
                <SelectValue placeholder="Select Height" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10ft" className="flex items-center space-x-2">
                  <span className="text-[#3F4919] text-lg">10 ft</span>
                </SelectItem>
                <SelectItem value="20ft" className="flex items-center space-x-2">
                  <span className="text-[#1E3A1E] text-lg">20 ft</span>
                </SelectItem>
                <SelectItem value="30ft" className="flex items-center space-x-2">
                  <span className="text-[#1E3A8A] text-lg">30 ft</span>
                </SelectItem>
                <SelectItem value="40ft" className="flex items-center space-x-2">
                  <span className="text-[#5C4033] text-lg">40 ft</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl">
            <span className="font-medium">
              Quantity of Fence (simulator calculated)
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 border border-[#6C7275]">
              <FaMinus className="text-[#6C7275]" />
            </button>
            <span className="font-semibold text-[#6C7275]">10</span>
            <button className="p-2 border border-[#6C7275]">
              <FaPlus className="text-[#6C7275]" />
            </button>
            <div>
              <p className="text-[#90947F]">$100/each</p>
            </div>
          </div>

          {/* Total Balance */}
          <div className="flex justify-start text-lg font-semibold text-[#90947F]">
            <span>Total :</span>
            <span>$2500</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-8">
            <button className="flex-1 py-2 bg-green text-white rounded-full shadow-md hover:bg-transparent hover:text-black hover:border hover:border-green hover:shadow-none">
              Shop Now
            </button>
            <button className="flex-1 py-2 bg-green text-white rounded-full shadow-md hover:bg-transparent hover:text-black hover:border hover:border-green hover:shadow-none">
              Add to Cart
            </button>
          </div>

          {/* Share Section */}
          <div className="flex items-center justify-start space-x-1">
            <span className="text-[#667085] font-bold text-xl">Share:</span>
            <button className="text-xl pl-2 text-[#667085]">
              <FaFacebook />
            </button>
            <button className="text-xl pl-2 text-[#667085]">
              <FaInstagram />
            </button>
            <button className="text-xl pl-2 text-[#667085]">
              <FaTwitter />
            </button>
          </div>
        </div>
      </section>

      <div className="absolute bottom-10 right-0 ">
        <SizeVariantsView />
      </div>
    </div>
  );
};
