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
            <div className="flex-1 h-2 bg-gray-300 rounded-r-full"></div>
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
          <h3 className="font-semibold mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {cards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
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
          <div className="mt-6 text-right space-y-1">
            <p>Subtotal: $000.00</p>
            <p>Shipping Cost: $00.00</p>
            <p>Tax: $00.00</p>
            <p className="font-bold text-lg">Total: $000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
