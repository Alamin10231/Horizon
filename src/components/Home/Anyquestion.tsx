import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

export const Anyquestion = () => {
  const data = [
    {
      id: 1,
      title: "What is the best material for a deck fence?",
      subtitle:
        "Wood deck fences require regular maintenance to preserve their appearance and structural integrity. This includes annual cleaning to remove dirt, mold, or mildew, as well as staining or sealing every 1–2 years to protect against moisture and UV damage.",
    },
    {
      id: 2,
      title: "How tall should my deck fence be?",
      subtitle:
        "Wood deck fences require regular maintenance to preserve their appearance and structural integrity. This includes annual cleaning to remove dirt, mold, or mildew, as well as staining or sealing every 1–2 years to protect against moisture and UV damage.",
    },
    {
      id: 3,
      title: "How much does a deck fence installation typically cost?",
      subtitle:
        "Wood deck fences require regular maintenance to preserve their appearance and structural integrity. This includes annual cleaning to remove dirt, mold, or mildew, as well as staining or sealing every 1–2 years to protect against moisture and UV damage.",
    },
    {
      id: 4,
      title: "What is the maintenance required for wood vs. composite deck fences?",
      subtitle:
        "Wood deck fences require regular maintenance to preserve their appearance and structural integrity. This includes annual cleaning to remove dirt, mold, or mildew, as well as staining or sealing every 1–2 years to protect against moisture and UV damage.",
    },
  ];

  // Separate state for each FAQ
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <section className="bg-[#F5F8E8] py-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-center text-gray-800 dark:text-white leading-tight">
        Have any
        <span className="text-green"> Questions?</span>
      </h2>

      <div className="bg-[#F5F8E8]  max-w-full md:max-w-4xl py-4 rounded-lg px-4 my-8 mx-auto">
        {data.map((detail) => (
                <>
          <div
            key={detail.id}
            className=" border-gray-200 py-4 flex flex-col bg-white my-3"
          > 
            <div className="flex items-center justify-between cursor-pointer bg-white" onClick={() => toggleItem(detail.id)}>
              <p className="text-[#3F4919] text-xl md:text-2xl font-medium px-6">
                {detail.title}
              </p>
              {openItems.includes(detail.id) ? (
                <FaCaretUp className="text-[#3F4919] text-2xl  mr-4" />
              ) : (
                <FaCaretDown className="text-[#3F4919] text-2xl mr-4" />
              )}
            </div>

            {openItems.includes(detail.id) && (
              <p className="text-[#434343] text-lg mt-2 px-4">{detail.subtitle}</p>
            )}
          </div>
        </>
          
        ))}
      </div>
    </section>
  );
};
