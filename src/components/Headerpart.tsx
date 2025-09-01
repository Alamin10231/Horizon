
import { SizeVariantsView } from './Shared/SizeVariantsView'
import headerpic from "../assets/images/headerimage.png";
import { Header } from "@/components/Header/Header";
export const Headerpart = () => {
  return (
     <div>
        <Header
          image={headerpic}
          title={
            <>
              Welcome to <span className="text-[#C7E44E]">Our Products</span>
            </>
          }
          subtitle="We provide high quality solutions for your needs."
          button={[
            {
              label: "Explore Now",
              onClick: () => console.log("Explore clicked"),
            },
            {
              label: "Get Free Sample",
              onClick: () => console.log("Sample clicked"),
            },
          ]}
        />

        {/* Bottom Section with Modal Trigger */}
        <div className=" sizevarient fixed top-[520px]">
          <SizeVariantsView />
        </div>
      </div>
  )
}
