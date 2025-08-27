"use client";

import type { Card } from "@/Types";
import React from "react";
import { Link, useLocation } from "react-router";

export const CheckoutPage: React.FC = () => {
  // Get cards from router state
  const location = useLocation();
  const { cards } = location.state as { cards: Card[] };

  return (
    <div className="px-4 md:px-10 py-10 max-w-[1800px] mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#3F4919] mb-5">
          Your Cart
        </h1>
        {/* Stepper */}
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Form Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Contact Information */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#3F4919] text-3xl pb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 flex items-center justify-between text-lg sm:text-2xl text-[#6C7275] cursor-pointer">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                 className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                  <div>
                <label className="mb-1 flex items-center justify-between text-lg sm:text-2xl text-[#6C7275] cursor-pointer">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                     <div>
                <label className="mb-1 flex items-center justify-between text-lg sm:text-2xl text-[#6C7275] cursor-pointer">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                     <div>
                <label className="mb-1 flex items-center justify-between text-lg sm:text-2xl text-[#6C7275] cursor-pointer">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#3F4919] text-3xl sm:text-md pb-3">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className=" md:col-span-2">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                   <div className=" md:col-span-1">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                   <div className=" md:col-span-1">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                  Town/City
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                   <div className=" md:col-span-1">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                   <div className=" md:col-span-1">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                 ZIP code
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
             
              
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <h2 className="font-semibold text-[#3F4919]">Payment Method</h2>
            <div className="flex flex-col gap-2">
             <label className="flex items-center gap-2 border rounded p-2 cursor-pointer">
  <input type="radio" name="payment"   className="appearance-none w-4  h-4  rounded-full checked:bg-green" />
  <span className="text-green">Pay With Credit Card</span>
</label>

              <label className="flex items-center gap-2 border rounded p-2 cursor-pointer">
                <input type="radio" name="payment" />
                <span>Stripe</span>
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className=" md:col-span-2">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                Card Number
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
              <div className=" md:col-span-1">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                Expiration Date
                </label>
                <input
                  type="date"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
                <div className=" md:col-span-1">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                security Code
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
               <div className=" md:col-span-2">
                <label className="mb-1 flex items-center justify-between text-md font-medium sm:text-xl text-[#6C7275] cursor-pointer">
                Name On Card
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="border-2 p-2 py-3 rounded-lg w-full text-[#6C7275]"
                />
              </div>
             
            </div>
            <div>
                <p className="text-[#3F4919] font-semibold">Remember Me</p>
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" className=" w-4  h-4  rounded-full checked:bg-green" required />
              <span className="text-sm text-green ">
                Save My Information For A Faster Checkout
              </span>
            </label>
          </div>

          <button className="bg-green text-white py-3 rounded-full w-full mt-4">
            <Link to="/orderconfirm">Place Order</Link>
          </button>
        </div>

        {/* Right Summary Section */}
        <div className="w-full lg:w-1/2 bg-[#F3F6E7] p-5 rounded-lg space-y-4">
          {cards.slice(0, 4).map((card) => (
            <div
              key={card.id}
              className="flex gap-3 items-center border-b pb-2"
            >
              <img
                src={card.image}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium text-sm sm:text-base">{card.title}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Color: Rich Tan
                </p>
              </div>
              <p className="font-bold">${card.price}</p>
            </div>
          ))}

          {/* Totals */}
          <div className="space-y-1 text-sm sm:text-base">
            <div className="flex justify-start gap-2">
              <span>Quantity:</span>
              <span className="text-[#787878]">{cards.length} Items</span>
            </div>
            <div className="flex justify-start gap-2">
              <span>Subtotal:</span>
              <span className="text-[#787878]">${cards.reduce((acc, c) => acc + c.price, 0)}</span>
            </div>
            <div className="flex justify-start gap-2">
              <span>Shipping Cost:</span>
              <span className="text-[#787878]">$0.00</span>
            </div>
            <div className="flex justify-start gap-2">
              <span>GST Tax:</span>
              <span className="text-[#787878]">$0.00</span>
            </div>
            <div className="flex justify-start font-bold text-lg gap-2">
              <span>Total:</span>
              <span className="text-[#787878]">${cards.reduce((acc, c) => acc + c.price, 0)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
