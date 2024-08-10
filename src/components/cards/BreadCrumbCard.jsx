import React from "react";
import { BiChevronRight, BiPrinter, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const BreadCrumbCard = () => {
  return (
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-1 font-semibold text-black">
        <Link className="text-12px leading-none opacity-70">Home</Link>
        <BiChevronRight />
        <Link className="text-12px leading-none opacity-70">Home</Link>
        <BiChevronRight />
        <p className="text-12px leading-none">Current Page</p>
      </div>
      <div className="flex items-center gap-4 text-black opacity-70 text-12px font-semibold">
        <button className="flex items-center gap-1">
          <BiShareAlt /> Share
        </button>
        <button className="flex items-center gap-1">
          <BiPrinter /> Print
        </button>
      </div>
    </div>
  );
};

export default BreadCrumbCard;
