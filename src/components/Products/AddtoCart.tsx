"use client";

import { useState, useEffect } from "react";
import Progress from "../ui/Progress";
import { SizeVariantsView } from "../Shared/SizeVariantsView";
import { RxCross1 } from "react-icons/rx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import vectorpic from "../../assets/images/vector/Vector (5).png";
import { Link } from "react-router";

interface Card {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  color: string;
  category: string;
  price: number;
}

export const AddtoCart = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [note, setNote] = useState(false);

  useEffect(() => {
    fetch("/Cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
        const initialQuantities: { [key: number]: number } = {};
        data.cards.forEach((c: Card) => (initialQuantities[c.id] = 1));
        setQuantities(initialQuantities);
      });
  }, []);

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  const handledlt = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const total = cards.reduce(
    (acc, card) => acc + card.price * (quantities[card.id] || 1),
    0
  );

  return (
    <div className="px-4 md:px-10">
      {/* Header */}
      <div className="text-center relative">
        <h1 className="bg-[#D9E0BC] text-[#3F4919] font-bold text-3xl sm:text-4xl px-8 sm:px-12 py-2 rounded-full inline-block my-10">
          Your Cart
        </h1>
        <Progress />
        <div className="absolute right-4 sm:right-10 ">
          <SizeVariantsView />
        </div>
      </div>

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row gap-10 py-10 lg:py-20">
        {/* Left Side - Table */}
        <div className="w-full lg:w-1/2 p-2 sm:p-5 rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px] sm:min-w-full">
            <thead>
              <tr className="text-[#3F4919] ">
                <th className="py-2 font-semibold text-sm sm:text-base">Product</th>
                <th className="py-2 font-semibold text-sm sm:text-base">Quantity</th>
                <th className="py-2 font-semibold text-sm sm:text-base">Price</th>
                <th className="py-2 font-semibold text-sm sm:text-base">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cards.slice(0, 4).map((card) => (
                <tr key={card.id} className="border-t">
                  <td className="py-2 flex items-center gap-2 sm:gap-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-[#141718] text-sm sm:text-lg">{card.title}</p>
                      <div className="flex items-center gap-2 text-sm sm:text-base">
                        <span className="text-[#6C7275]">Color:</span>
                        <div className={`w-4 h-4 rounded-full ${card.color}`}></div>
                      </div>
                      <button
                        className="text-[#6C7275] mt-1 text-xs sm:text-sm flex font-bold items-center gap-1"
                        onClick={() => handledlt(card.id)}
                      >
                        <RxCross1 /> Remove
                      </button>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center border w-max rounded overflow-hidden text-sm sm:text-base">
                      <button
                        onClick={() => handleQuantityChange(card.id, -1)}
                        className="px-2 text-base sm:text-xl"
                      >
                        -
                      </button>
                      <span className="px-2 sm:px-3">{quantities[card.id]}</span>
                      <button
                        onClick={() => handleQuantityChange(card.id, +1)}
                        className="px-2 text-base sm:text-xl"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 text-[#121212] text-sm sm:text-base">
                    ${card.price} <span className="text-[#90947F] text-xs sm:text-sm">/each</span>
                  </td>
                  <td className="py-2 text-[#121212] font-bold text-sm sm:text-base">
                    ${card.price * (quantities[card.id] || 1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side - Summary */}
        <div className="w-full lg:w-1/2 bg-[#94B3161A] p-3 sm:p-5 rounded-lg space-y-5">
          {/* Order Summary */}
          <div className="flex justify-between border-b pb-2 md:text-2xl sm:text-base">
            <span>Order Summary</span>
          </div>

          {/* Additional Notes */}
          <div>
            <label
              className="mb-1 flex items-center justify-between text-lg sm:text-2xl text-[#3F4919] cursor-pointer"
              onClick={() => setNote(!note)}
            >
              Add Additional Order Note{" "}
              <span>{note ? <FaAngleUp /> : <FaAngleDown />}</span>
            </label>
            {note && <textarea className="w-full border rounded p-2 mt-2" rows={4}></textarea>}
          </div>

          <p className="text-[#3F4919] py-1 text-sm sm:text-xl">
            Taxes and Shipping calculated at checkout.
          </p>

          {/* Subtotal */}
          <div className="flex justify-between font-bold text-base sm:text-lg">
            <span className="text-[#3F4919] text-lg sm:text-3xl">Subtotal</span>
            <span>${total}</span>
          </div>

          {/* Coupon Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="border-2 border-lightgreen rounded p-2 pl-10 w-full text-sm sm:text-base"
            />
            <img src={vectorpic} alt="icon" className="absolute left-2 w-5 h-5 sm:w-6 sm:h-6" />
            <button className="bg-green text-white px-4 py-2 rounded -ml-2 text-sm sm:text-base">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="bg-green text-white py-3 rounded-full w-[70%] sm:w-[50%] block mx-auto text-sm sm:text-base">
            <Link to="/checkoutpage" state={{ cards }}>
  Checkout
</Link>
          </button>
        </div>
      </section>
    </div>
  );
};
