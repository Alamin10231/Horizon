import { Header } from "../Header/Header";
import abcd from "../../assets/images/contactcvr.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SizeVariantsView } from "../Shared/SizeVariantsView";
export const Contactgalary = () => {
        const features = [
          {
             icon: <FaLocationDot />,
            text: "2972 Westheimer Rd. Santa Ana Illinois 85486 ",
          },
          {
             icon:  <IoMdMail />,
            text: "(207) 555-0119",
          },
    {
      icon:    <FaPhone />,
      text: "david@gmail.com",
    },
   
  ];
  return (

    <div>
     
      <Header
        image={abcd}
        title={
          <>
            <h1>
              Contact <span className="text-green">Us</span>
            </h1>
          </>
        }
        subtitle={
           <>
            <h1 className="md:max-w-lg max-w-full">
              Please our FAQ for answers to some of the most commonly asked questions
            </h1>
          </>
        }
        button={[
          {
            label: "Shop Now",
          },
          {
            label: "Order free sample",
          },
        ]}
      ></Header>
       <div className="sizevarient mt-6 fixed top-[590px]">
                    <SizeVariantsView />
            
                  </div>

      <div className="md:w-[70%] md:mx-auto  py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 px-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-10 bg-[#94B3161A] text-wrap  rounded-md shadow-sm hover:shadow-md transition"
            >
              <p className="text-green text-xl py-2">{feature.icon}</p>
              <p className="text-center md:max-w-3xs text-gray-700 text-sm mt-3 px-2">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[780px] mx-auto py-5">
                  <form className="space-y-6  p-20  rounded-2xl md:relative md:right-20 md:-top-5">
         <div className="px-2 sm:px-4">
  <h1 className="font-bold text-md sm:text-xl md:text-6xl lg:text-6xl text-[#3F4919] max-w-full leading-snug italic">
   Send <span className="text-green">Quest To Us</span>
  </h1>
</div>

    <div className='grid grid-cols-2 gap-4'>

           <div className=''>
           
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border-none bg-lightgreen border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
            />
          </div>

          <div>
           
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-none bg-lightgreen border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
            />
          </div>
       </div>

          <div>
            
            <input
              type="text"
              placeholder="Enter subject"
             className="w-full px-4 py-3 border-none bg-lightgreen border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
            />
          </div>

          <div>
            
            <textarea
              rows={4}
              placeholder="Write  message..."
             className="w-full px-4 py-3 border-none bg-lightgreen border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
            />
          </div>

          <button
            type="submit"
            className="max-w-md px-10 py-2 bg-[#94B316] text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          >
            Send 
          </button>
        </form>
        </div>

        <div>
              <div className="text-center pb-20">
                  <p className="text-6xl pb-10 font-bold italic">Our Live <span className="text-green">Location</span></p>
                  <div className="text-center flex items-center justify-center w-full bg-black">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.9389811205865!2d106.69932931221942!3d10.772054292622846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f5a28df27%3A0xce9b0125681f0e5f!2zQuG7h25oIHZp4buHbiDEkGEga2hvYSBTw6BpIEfDsm4sIDEyNSBMw6ogTGFpLCBQaMaw4budbmcgQuG6v24gVGjDoG5oLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sbd!4v1755890279625!5m2!1sen!2sbd" width="600" height="450" className="border:0 w-full max-h-[670px]" loading="lazy" ></iframe>
                  </div>
              </div>
        </div>
    </div>
  );
};
