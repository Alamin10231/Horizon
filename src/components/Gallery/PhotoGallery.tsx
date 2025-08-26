import gallerypic from "../../assets/images/image (22).png"
import gallerypic1 from "../../assets/images/image (23).png"
import gallerypic2 from "../../assets/images/image (24).png"
import gallerypic3 from "../../assets/images/image (26).png"
import gallerypiclast from "../../assets/images/imagelast (26).png"

import gallerypic4 from "../../assets/images/image (27).png"
import gallerypic5 from "../../assets/images/image (28).png"
import gallerypic6 from "../../assets/images/image (29).png"
import gallerypic7 from "../../assets/images/image (30).png"

import gallerypic8 from "../../assets/images/image (31).png"
import gallerypic9 from "../../assets/images/image (32).png"
import gallerypic10 from "../../assets/images/image (33).png"
import gallerypic11 from "../../assets/images/image (26).png"

export const PhotoGallery = () => {
  return (
    <div>
      <section>
        <div className="space-y-12">
          {/* Section 1 */}
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center md:text-6xl py-4 text-[#3F4919]">
              Brulee-wood Grain
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">
  <div className="md:col-span-7 md:row-span-2 md:h-[500px]">
    <img src={gallerypic1} alt="" className="w-full h-auto md:h-full object-cover" />
  </div>

  <div className="md:col-span-5 md:row-span-1 md:h-[245px]">
    <img src={gallerypic2} alt="" className="w-full h-auto md:h-full object-cover" />
  </div>

  <div className="md:col-span-5 md:row-span-1 md:h-[245px]">
    <img src={gallerypic3} alt="" className="w-full h-auto md:h-full object-cover" />
  </div>

  <div className="md:col-span-12 md:row-span-2 md:h-[400px]">
    <img src={gallerypiclast} alt="" className="w-full h-auto md:h-full object-cover" />
  </div>
</div>

          </div>

          {/* Section 2 */}
          <div>
  <h1 className="text-2xl font-bold mb-4 md:text-6xl py-4 text-[#3F4919] text-center">
    Red Bordeaux-wood Grain
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">
    <div className="md:col-span-12 md:row-span-2 md:h-[400px]">
      <img
        src={gallerypic4}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>

    <div className="md:col-span-4 md:row-span-1 md:h-[250px]">
      <img
        src={gallerypic5}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>

    <div className="md:col-span-4 md:row-span-1 md:h-[250px]">
      <img
        src={gallerypic6}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>

    <div className="md:col-span-4 md:row-span-1 md:h-[250px]">
      <img
        src={gallerypic7}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>
  </div>
</div>


          {/* Section 3 */}
        <div>
  <h1 className="text-2xl font-bold mb-4 md:text-6xl py-4 text-[#3F4919] text-center">
    Caramel-wood Grain
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">
    <div className="md:col-span-7 md:row-span-2 md:h-[500px]">
      <img
        src={gallerypic8}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>

    <div className="md:col-span-5 md:row-span-2 md:h-[500px]">
      <img
        src={gallerypic9}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>

    <div className="md:col-span-5 md:row-span-1 md:h-[240px]">
      <img
        src={gallerypic10}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>

    <div className="md:col-span-7 md:row-span-1 md:h-[240px]">
      <img
        src={gallerypic11}
        alt=""
        className="w-full h-auto md:h-full object-cover"
      />
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  )
}
