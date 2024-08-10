import React, { useEffect, useState, useRef } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ProductInfoSectionCard = () => {
  const contentRefs = [useRef(null), useRef(null), useRef(null)];
  const [openSection, setOpenSection] = useState(0);
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  useEffect(() => {
    contentRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.style.maxHeight =
          openSection === index ? `${ref.current.scrollHeight}px` : "0px";
      }
    });
  }, [openSection]);
  return (
    <div className="container flex flex-col shadow-custom-black py-3">
      <div className="p-4 w-full">
        <div
          className="w-full flex justify-between items-center border-b border-black border-opacity-90 cursor-pointer"
          onClick={() => toggleSection(0)}
        >
          <h2 className="text-24px font-medium leading-relaxed">Description</h2>
          {openSection === 0 ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        <div
          ref={contentRefs[0]}
          className="overflow-hidden transition-all duration-300 ease-in-out max-h-0"
        >
          <div className="py-4">content here</div>
        </div>
      </div>
      <div className="p-4 w-full">
        <div
          className="w-full flex justify-between items-center border-b border-black border-opacity-90 cursor-pointer"
          onClick={() => toggleSection(1)}
        >
          <h2 className="text-24px font-medium leading-relaxed">Description</h2>
          {openSection === 1 ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        <div
          ref={contentRefs[1]}
          className="overflow-hidden transition-all duration-300 ease-in-out max-h-0"
        >
          <div className="py-4">content here</div>
        </div>
      </div>
      <div className="p-4 w-full">
        <div
          className="w-full flex justify-between items-center border-b border-black border-opacity-90 cursor-pointer"
          onClick={() => toggleSection(2)}
        >
          <h2 className="text-24px font-medium leading-relaxed">Description</h2>
          {openSection === 2 ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        <div
          ref={contentRefs[2]}
          className="overflow-hidden transition-all duration-300 ease-in-out max-h-0"
        >
          <div className="py-4">content here</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSectionCard;
