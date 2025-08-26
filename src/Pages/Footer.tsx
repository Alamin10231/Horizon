import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import logo from "../assets/images/logo.png"

export const Footer = () => {
  return (
    <footer className="bg-[#1E240F] text-white py-16 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          {/* <h2 className="text-2xl font-bold">HORIZON COMPOSITE</h2> */}
          <img className="text-white bg-white " src={logo} alt="" />
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet consectetur. Nibh sollicitudin habitasse phasellus amet quam ut eu. Sed nisi auctor nunc ante nam neque consequat commodo ullamcorper.
          </p>
          <div className="flex space-x-3 mt-4">
            <FaFacebookF className="bg-[#9DBF3B] text-4xl p-2 rounded-sm text-white cursor-pointer hover:bg-green-700 transition" />
            <FaInstagram className="bg-[#9DBF3B] text-4xl p-2 rounded-sm text-white cursor-pointer hover:bg-green-700 transition" />
            <FaTwitter className="bg-[#9DBF3B] text-4xl p-2 rounded-sm text-white cursor-pointer hover:bg-green-700 transition" />
          </div>
        </div>

        {/* Quick Access */}
        <div className="space-y-2">
          <h3 className="font-semibold italic">Quick Access</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About Us</li>
            <li className="hover:text-green-400 cursor-pointer">Products</li>
            <li className="hover:text-green-400 cursor-pointer">Gallery</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
            <li className="hover:text-green-400 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-semibold italic">Contact Info</h3>
          <p className="flex  gap-2 text-gray-300 items-start">
            <HiLocationMarker className="text-[#9DBF3B] text-3xl " />
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <HiMail className="text-[#9DBF3B] text-3xl" />
            willie.jennings@example.com
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <HiPhone className="text-[#9DBF3B] text-3xl" />
            (207) 555-0119
          </p>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="font-semibold italic">Join Our News Latter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md text-[#BEC996] bg-[#68733D] focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full px-4 py-2 bg-[#9DBF3B] rounded-full text-white font-semibold hover:bg-green-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};
