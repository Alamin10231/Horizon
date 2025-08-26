import costpic from "../../assets/images/image (15).png";
import costpic1 from "../../assets/images/image (16).png";
import costpic2 from "../../assets/images/image (17).png";
import costmain from "../../assets/images/image (18).png";

export const Cost = () => {
  return (
    <div>
      <section className="px-4 md:px-10 py-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] italic font-bold max-w-3xl leading-snug">
            <p>
              Why <span className="text-green">Horizon Composite</span>
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-green text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Innovative and Durable Fencing Solutions
            </p>
            <p className="text-[#6D6D6D] max-w-xl text-base sm:text-lg md:text-xl leading-relaxed">
              we blend innovation with reliability to bring you fencing
              solutions that elevate every space. Our products are engineered
              for durability, crafted from recycled materials, and designed to
              withstand harsh weather without fading, warping, or rotting
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <img
            src={costpic}
            alt="pic1"
            className="w-full h-60 sm:h-72 md:h-96 lg:h-[400px] object-cover rounded-lg shadow-md"
          />
          <img
            src={costpic1}
            alt="pic2"
            className="w-full h-60 sm:h-72 md:h-96 lg:h-[400px] object-cover rounded-lg shadow-md"
          />
          <img
            src={costpic2}
            alt="pic3"
            className="w-full h-60 sm:h-72 md:h-96 lg:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <button className="primarybtn text-lg sm:text-xl -mt-3">
            Explore Cost
          </button>
        </div>
      </section>
      <section className="px-4 md:px-10 py-10">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
    {/* Text Section */}
    <div className="px-2 md:px-4 flex-1 ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-bold py-5">
        We are <span className="text-green">committed</span>
      </h1>
      <p className="text-start max-w-3xl text-[#6F706A] text-base sm:text-lg leading-relaxed">
        Our mission is to redefine outdoor living through innovative, sustainable, and long-lasting
        fencing solutions that incorporate upcycled components. We aim to provide customers with
        products that combine aesthetic appeal, unrivaled durability, and environmental
        responsibility. Guided by quality and driven by customer satisfaction, we strive to be the
        trusted choice for modern fencing.
      </p>
      <br />
      <p className="text-start max-w-3xl text-[#6F706A] text-base sm:text-lg leading-relaxed">
        Our vision is to revolutionize the way quality and durability are delivered in the
        marketplace. We aim to become a leading force in the composite product industry by setting
        new benchmarks for performance, reliability, and customer satisfaction.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-1 flex justify-center">
      <img
        className="w-full max-w-[970px] h-auto max-h-[540px] object-cover rounded-lg"
        src={costmain}
        alt="Commitment"
      />
    </div>
  </div>
</section>

    </div>
  );
};
