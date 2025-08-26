

import leaf from "../../assets/images/icomoon-free_leaf.svg"
import Simplification1 from "../../assets/images/Simplification (1).svg"
import Simplification2 from "../../assets/images/Simplification (2).svg"
// import Simplification from "../../assets/images/Simplification.svg"
import Simplification from "../../assets/images/vectornew2.svg"
export const Cardsection = () => {
         const features = [
          {
             icon: <img src={Simplification2} alt="" />,
            text: "Never paint, stain, seal",
          },
          {
             icon: <img src={Simplification} alt="" />,
            text: "Fade & stain resistant with 20 year limited warranty",
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
    <div>
       <div>
          <div className="space-y-4 max-w-5xl text-center mx-auto py-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#3F4919]dark:text-white leading-tight">
            Why
            <span className="text-green"> we are best</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6F706A] dark:text-gray-300 py-4 leading-relaxed">
            we are ensuring premium materials and a deep commitment to customer satisfaction. Our focus on quality, durability, aesthetic appeal and innovation ensures products that stand the test of time making us the trusted choice for those who demand the best.
          </p>
        </div>
        <div>
                     <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 px-10 py-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-10 bg-[#94B3161A] text-wrap  rounded-lg shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <p className="text-center text-[#3F4919] font-semibold text-sm mt-3 px-2 text-wrap max-w-1/2">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        </div>
        <button
  className="primarybtn text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3"
>
  Explore products
</button>

       </div>
    </div>
  )
}
