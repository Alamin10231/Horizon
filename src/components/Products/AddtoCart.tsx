"use client";

import { useState, useEffect } from "react";
import Progress from "../ui/Progress";
import { SizeVariantsView } from "../Shared/SizeVariantsView";
import { RxCross1 } from "react-icons/rx";
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
  

  const total = cards.reduce(
    (acc, card) => acc + card.price * (quantities[card.id] || 1),
    0
  );
  const handledlt = (id:number)=>{
setCards((prev)=>prev.filter((card)=>card.id !== id))
setQuantities((prev)=>{
        const newQuentities = {...prev}
        delete newQuentities[id]
        return newQuentities;
})
  }

  return (
    <div className="px-10">
      <div className="text-center relative">
        <h1 className="bg-[#D9E0BC] text-[#3F4919] font-bold text-4xl px-12 py-2 rounded-full inline-block my-10">
          Your Cart
        </h1>
        <Progress />
        <div className="absolute right-10 ">
          <SizeVariantsView />
        </div>
      </div>

      <section className="flex flex-col lg:flex-row gap-10 py-20">
        {/* Left Side - Table */}
        <div className="w-full lg:w-1/2  p-5 rounded-lg">
          <table className="w-full text-left border-collapse ">
            <thead>
              <tr className="text-[#3F4919] ">
                <th className="py-2 font-semibold">Product</th>
                <th className="py-2 font-semibold text-2xl">Quantity</th>
                <th className="py-2 font-semibold text-2xl">Price</th>
                <th className="py-2 font-semibold text-2xl">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cards.slice(0,4).map((card) => (
                <tr key={card.id} className="border-t">
                  <td className="py-2 flex items-center gap-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-[#141718] text-lg">{card.title}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-[#6C7275]">color: <span>Rich tan</span></p>
                      <div className={`w-4 h-4 rounded-full ${card.color}`}></div>
                      </div>
                      <button className="text-[#6C7275] mt-1 text-sm flex font-bold items-center gap-1"onClick={()=>handledlt(card.id)}>
                       <RxCross1 /> Remove  
                      </button>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="flex  items-center border w-max rounded overflow-hidden">
                      <button
                        onClick={() => handleQuantityChange(card.id, -1)}
                        className="px-2 text-xl"
                      >
                        -
                      </button>
                      <span className="px-3">{quantities[card.id]}</span>
                      <button
                        onClick={() => handleQuantityChange(card.id, +1)}
                        className="px-2 text-xl"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 text-[#121212]">${card.price} <span className="text-[#90947F]">/each</span></td>
                  <td className="py-2 text-[#121212] font-bold">${card.price * (quantities[card.id] || 1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side - Summary */}
        <div className="w-full lg:w-1/2 bg-[#94B3161A] p-5 rounded-lg space-y-5">
          {/* Section 1 */}
          <div className="flex justify-between border-b pb-2">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>

          {/* Section 2 - textarea */}
          <div>
            <label className="block mb-1">Notes</label>
            <textarea className="w-full border rounded p-2" rows={4}></textarea>
          </div>

          {/* Section 3 - Total */}
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

          {/* Section 4 - Input + Apply Button */}
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Discount code"
              className="border rounded p-2 flex-1"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>

          {/* Final Checkout Button */}
          <button className="bg-green-500 text-white py-3 rounded w-[70%] block mx-auto">
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
};
