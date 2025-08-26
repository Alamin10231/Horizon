import React from 'react'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

export const Anyhelp = () => {
  return (
    <div>
         <section className="relative  py-16 px-6 lg:px-0">
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto items-center">
        <h1 className="text-5xl font-bold  text-green mb-4">
        <span className="text-[#3F4919]"> Need</span>  Any Help
        </h1>
        <p className="text-[#6F706A] text-lg leading-relaxed md:max-w-lg w-full text-center mx-auto">
         Have questions or ready to start your project? Get in touch with us today—we’re here to help bring your vision to life.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-full mx-auto bg-[#F5F8E8] shadow-lg rounded-2xl  md:max-h-[520px]  ">
        {/* Left Side Text */}
     {/* Left Side Text */}
<div className="flex flex-col items-start pl-20 justify-center text-start my-4 space-y-6">
  {/* Address */}
  <p className="text-[#3F4919] font-medium flex items-start  gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md">
    <span className="text-green text-2xl pt-2 sm:text-3xl">
      <FaLocationDot />
    </span>
    2972 Westheimer Rd. Santa Ana, Illinois 85486
  </p>

  {/* Email */}
  <p className="text-[#3F4919] font-medium flex items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
    <span className="text-green text-2xl sm:text-3xl">
      <IoMdMail />
    </span>
    willie.jennings@example.com
  </p>

  {/* Phone */}
  <p className="text-[#3F4919] font-medium flex items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
    <span className="text-green text-2xl sm:text-3xl">
      <FaPhone />
    </span>
    (207) 555-0119
  </p>
</div>



        {/* Right Side Form */}
        <form className="space-y-6 shadow-2xl p-20  bg-white rounded-2xl md:relative md:right-20 md:-top-5">
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
            className="max-w-md px-10 py-2 bg-green text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          >
            Send 
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}
