"use client";

import React from "react";
import manpic from "../../assets/images/Ellipse 2.png"
import { FaEdit } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import { Link } from "react-router";
export const ConfirmEmail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#99BA14] to-[#233205] h-28"></div>

      {/* Profile Card */}
  <div className="max-w-4xl mx-auto bg-white rounded-lg -mt-16 p-6">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
    {/* Profile Info */}
    <div className="flex items-center gap-4">
      <div className="relative">
        <img
          src={manpic}
          alt="Profile"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white object-cover"
        />
        <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full text-black text-sm shadow">
          <FaEdit />
        </button>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-[#3F4919] text-xl md:text-2xl font-semibold">
          David Leclair
        </h2>
        <p className="text-gray-600 text-sm md:text-base">david@gmail.com</p>
      </div>
    </div>

    {/* Edit Button */}
    <button className="bg-[#99BA14] text-white px-4 py-2 rounded-full hover:bg-[#233205] flex items-center justify-center gap-2 text-sm md:text-base">
      Edit Information <span><VscEdit /></span>
    </button>
  </div>

  {/* Form Section */}
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-[#3F4919] mb-1">Full Name</label>
      <input
        type="text"
        placeholder="Enter here..."
        className="w-full rounded-md p-2 bg-[#F8FBED] text-[#233205]"
      />
    </div>

    <div>
      <label className="block text-[#3F4919] mb-1">Gender</label>
      <select className="w-full rounded-md p-2 bg-[#F8FBED] text-[#233205]">
        <option>Enter here...</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>

    <div>
      <label className="block text-[#3F4919] mb-1">Country</label>
      <select className="w-full rounded-md p-2 bg-[#F8FBED] text-[#233205]">
        <option>Enter here...</option>
        <option>USA</option>
        <option>Canada</option>
        <option>UK</option>
      </select>
    </div>

    <div>
      <label className="block text-[#3F4919] mb-1">Language</label>
      <select className="w-full rounded-md p-2 bg-[#F8FBED] text-[#233205]">
        <option>Enter here...</option>
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
      </select>
    </div>
  </div>

  {/* Email Section */}
<div className="mt-6 flex flex-col items-center md:flex-row md:justify-start gap-4 w-full">
  {/* Steps */}
  <div className="flex flex-wrap justify-center md:justify-start gap-2 my-4 w-full">
    <span className="bg-[#E0EDAD] text-[#99BA14] px-4 py-2 rounded-xs text-sm md:text-base">1</span>
    <span className="bg-[#E0EDAD] text-[#99BA14] px-4 py-2 rounded-xs text-sm md:text-base">2</span>
    <span className="bg-[#E0EDAD] text-[#99BA14] px-4 py-2 rounded-xs text-sm md:text-base">3</span>
    <span className="bg-[#E0EDAD] text-[#99BA14] px-4 py-2 rounded-xs text-sm md:text-base">4</span>
  </div>
</div>


  {/* Update Email */}
  <Link
  to="/userprofile"
  className="mt-4 inline-block w-full md:w-auto text-center bg-[#99BA14] hover:bg-[#233205] text-white font-semibold px-6 md:px-20 py-2 rounded-full text-sm md:text-base transition-colors duration-300"
>
  Confirm
</Link>

</div>

    </div>
  );
};
