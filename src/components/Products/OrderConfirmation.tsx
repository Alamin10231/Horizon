"use client";

import { useEffect, useState } from "react";

export default function OrderConfirmation() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    fetch("/Cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data.cards));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Progress */}
      <header className="w-full border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold">Checkout</h1>
          {/* Progress Bar */}
          <div className="flex items-center w-full md:w-1/2">
            <div className="flex-1 h-2 bg-green-500 rounded-l-full"></div>
            <div className="flex-1 h-2 bg-green-500"></div>
            
          </div>
          <span className="text-sm text-gray-600">Step 3 of 4</span>
        </div>
      </header>

      {/* Confirmation Box */}
      <div className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white text-3xl">✔</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 text-sm mb-4">
          Thank you for your purchase. We’ve received your order and will
          contact you as soon as it has been shipped.
        </p>
        <p className="font-bold">#0123_45678</p>
      </div>

      {/* Order Details Section */}
      <div className="bg-[#94B3161A] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full md:w-1/2">
            <h1 className="text-[#3F4919] text-2xl md:text-3xl font-semibold">
              Order Details
            </h1>

            <div className="flex flex-col md:flex-row text-start items-start md:items-center justify-start md:justify-between gap-6 md:gap-16 py-4">
              <div>
                <p className="text-[#50504D] text-base md:text-lg">
                  Order Date
                </p>
                <p className="text-[#3F4919] text-xl md:text-2xl font-medium">
                  May 20, 2025
                </p>
              </div>
              <div>
                <p className="text-[#50504D] text-base md:text-lg">
                  Payment Method
                </p>
                <p className="text-[#3F4919] text-xl md:text-2xl font-medium">
                  Debit Card
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-semibold mb-4 text-[#3F4919] text-3xl ">
            Items Ordered
          </h3>
          <div className="space-y-4">
            {cards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-20 h-20 rounded-2xl"
                    src={item.image}
                    alt=""
                  />
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <p className="text-sm text-gray-500 max-w-md">
                      {item.details}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Color: Rich Tan
                    </p>
                    {/* <span className="bg-[#898989] rounded-2xl w-5 h-5 ml-2"></span> */}
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p>QTY: 2</p>
                  <p>Subtotal: ${item.price * 2}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 space-y-2 text-right text-[#3F4919]">
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>$000.00</p>
            </div>

            <div className="flex items-center justify-between">
              <p>Shipping Cost:</p>
              <p>$00.00</p>
            </div>

            <div className="flex items-center justify-between">
              <p>Tax:</p>
              <p>$00.00</p>
            </div>

            <div className="flex items-center justify-between font-bold text-lg">
              <p>Total:</p>
              <p>$000.00</p>
            </div>
          </div>

          <div className="text-[#50504D] text-2xl font-medium ">
            <h1>Shipping Information</h1>
            <ul className="space-y-1">
              <li>David</li>
              <li>01939756477</li>
              <li>david@gmail.com</li>
              <li>123 Main Street</li>
              <li>Apt 4B</li>
              <li>New York, NY 10001</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
