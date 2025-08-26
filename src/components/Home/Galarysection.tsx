import image1 from "../../assets/images/image (10).png";
import image2 from "../../assets/images/image (11).png";
import image3 from "../../assets/images/image (12).png";
import image4 from "../../assets/images/image (13).png";
import playicon from "../../assets/images/Frame (2).svg";


export const Galarysection = () => {
  return (
    <div>
      <section className="">
        <div className="space-y-4 max-w-5xl text-center mx-auto py-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-gray-800 dark:text-white leading-tight">
            Composite Fence
            <span className="text-green"> Inspirations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6F706A] dark:text-gray-300 py-4 leading-relaxed">
            Our wood finishes are not mass-produced imitations — they’re
            carefully curated to bring out the natural beauty, texture, and
            character of real wood
          </p>
        </div>
        <div className=" grid grid-cols-12 gap-4 grid-rows-2 max-w-[1800px] px-10">
          <div className="grid-cols-12 col-span-12 relative ">
            <img src={image1} alt="" />
            <button>
              <img
                className=" cursor-pointer absolute left-1/2 top-1/2 -translate-1/2  w-16 md:w-28 lg:w-36  transition-transform"
                src={playicon}
                alt=""
              />
            </button>
          </div>
          <div className="col-span-4 ">
            <img src={image2} alt="" />
          </div>
          <div className="col-span-4">
            <img src={image3} alt="" />
          </div>
          <div className="col-span-4">
            <img src={image4} alt="" />
          </div>
        </div>
        <button className=" text-white  border-green my-10 py-3 px-8  text-xl text-center items-center justify-center flex mx-auto hover:bg-green hover:text-white  bg-green border rounded-full">
          View Gallery
        </button>
      </section>

     
    </div>
  );
};
