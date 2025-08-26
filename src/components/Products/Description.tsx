import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdPictureAsPdf } from "react-icons/md";
import { useState } from "react";
import pdf from "../../assets/images/pdffile.pdf"
import { Link } from "react-router";
export const Description = () => {
  const [open, setOpen] = useState(false);
  const [Shipping,setShipping] = useState(false)
  const [Warrentry,setWarrentry] = useState(false)
  const [Return,setReturn] = useState(false)


  const handleOpen = () => {
    setOpen(!open);
  };
  const handleShipping=()=>{
    setShipping(!Shipping)
  }
  const handleWarrentry=()=>{
    setWarrentry(!Warrentry)
  }

  return (
    <section className="mt-6 w-full p-6">
    <div>
        {/* Header */}
      <div
        onClick={handleOpen}
        className="flex items-center justify-between cursor-pointer  pb-2"
      >
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">Description <span className="text-2xl text-gray-600">
          {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span></h2>
        
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] mt-3" : "max-h-0"
        }`}
      >
        <div className="text-sm leading-relaxed text-gray-700 text-start space-y-3">
          <p>
            Reimagine your property’s perimeter with our premium composite fence
            boards, engineered to blend sophisticated style and lasting
            performance. Available in four deep, rich hues, they preserve their
            natural, contemporary look season after season without fading.
          </p>
          <p>
            Crafted from 60% recycled wood powder, 34% plastic (including 10%
            virgin plastic for strength), and 6% high-performance additives,
            these fence boards offer outstanding resistance to impacts, UV rays
            and moisture. Maintenance is a breeze—no more sanding or staining: a
            simple wash with soapy water restores their original sheen and
            texture.
          </p>
          <p>
            Their non-slip, embossed surface and smooth, splinter-free edges
            ensure both comfortable handling during installation and safe
            enjoyment for everyone on your property. Designed to remain warp-
            and crack-free for over 20 years, our fence boards help upcycle wood
            and plastic waste, giving your outdoor living area a beautiful—and
            responsible—upgrade.
          </p>
          <p>
            Elevate your yard with a fence that combines elegance, durability
            and peace of mind.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
          <li>No warping, cracking or rotting</li>
          <li>75” On-Center Spacing Between Posts</li>
          <li>Same Color/Pattern on Both Sides</li>
          <li>1” Thick Boards (Same as Decking)</li>
          <li>
            <strong>Gate Kits:</strong>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Maximum gate width: 4'6".</li>
              <li>
                For gates wider than 4', a gate wheel (available at your local
                hardware store) is recommended to support weight.
              </li>
              <li>
                Consider adding an extra hinge kit (available in the accessory
                section).
              </li>
            </ul>
          </li>
        </ul>
        </div>
      </div>
    </div>


<div
          onClick={()=>{setReturn(!Return)}}
          className="flex items-center justify-between cursor-pointer  pb-2"
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            Shipping & Return{" "}
            <span className="text-2xl text-gray-600">
              {Return ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          </h2>
        </div>
              <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            Return ? "max-h-[600px] mt-3" : "max-h-0"
          }`}
        >
          <div className="text-sm flex leading-relaxed text-gray-700 text-start space-y-3 py-2">
            <div className=" flex space-y-2 flex-col ">
            <p className="border-b-2 border-gray-200 inline-block">
  <Link to="/shipping">Shipping Policy</Link>
</p>
<p className="border-b-2 border-gray-200 inline-block">
  <Link to="">Return Policy</Link>
</p>

            </div>
          </div>
        </div>


    <div onClick={handleShipping}>
         <h2 className="text-lg font-semibold text-gray-800 flex items-center">Installation Guide <span className="text-2xl text-gray-600" >
          {Shipping ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span></h2>
         <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          Shipping ? "max-h-[600px] mt-3" : "max-h-0"
        }`}
      >
        <div className="text-sm leading-relaxed text-gray-700 text-start space-y-3">
         
         
           <section className=" w-full   p-6 flex items-center justify-start gap-4  ">
    {/* PDF Guide Block 1 */}
    <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer w-64 h-24 ">
      <MdPictureAsPdf className="text-red-600 text-4xl flex-shrink-0" />
      <div>
        <h3 className="text-base font-semibold text-gray-800">Guide: 01</h3>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View / Download PDF
        </a>
      </div>
    </div>

    {/* PDF Guide Block 2 */}
    <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer w-64 h-24 ">
      <MdPictureAsPdf className="text-red-600 text-4xl flex-shrink-0" />
      <div>
        <h3 className="text-base font-semibold text-gray-800">Guide: 02</h3>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View / Download PDF
        </a>
      </div>
    </div>
  </section>
        </div>
      </div>

      
      
    </div>

    {/* warrenty section */}
    <div  onClick={handleWarrentry}>
         <h2 className="text-lg font-semibold text-gray-800 flex items-center">Warrentry <span className="text-2xl text-gray-600">
          {Warrentry ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span></h2>
         <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          Warrentry ? "max-h-[600px] mt-3" : "max-h-0"
        }`}
      >
        <div className="text-sm leading-relaxed text-gray-700 text-start space-y-3">
         
         
           <section className=" w-full   p-6 flex items-center justify-start gap-4  ">
    {/* PDF Guide Block 1 */}
    <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer w-64 h-24 ">
      <MdPictureAsPdf className="text-red-600 text-4xl flex-shrink-0" />
      <div>
        <h3 className="text-base font-semibold text-gray-800">Guide: 01</h3>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View / Download PDF
        </a>
      </div>
    </div>

    {/* PDF Guide Block 2 */}
    <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer w-64 h-24 ">
      <MdPictureAsPdf className="text-red-600 text-4xl flex-shrink-0" />
      <div>
        <h3 className="text-base font-semibold text-gray-800">Guide: 02</h3>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View / Download PDF
        </a>
      </div>
    </div>
  </section>
        </div>
      </div>

      
      
    </div>
    </section>
  );
};
