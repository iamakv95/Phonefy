import React from "react";
import { AiOutlineClockCircle, AiOutlineTruck } from "react-icons/ai";
import RatingsCard from "./cards/RatingsCard";
import { BiMinus, BiPlus } from "react-icons/bi";
import { store } from "../assets";

const SingleProductDetails = () => {
  const rating = 4 || 0;
  const ratingCount = 4 || 0;
  return (
    <>
      <span className=" bg-red text-white w-max text-12px font-bold z-20 px-2 py-1">
        -10%
      </span>
      <h1 className="text-24px font-medium py-2 leading-tight">
        Camille Anthracite Italian Dining Chair
      </h1>
      <div className="flex items-center gap-8 ">
        <p className="text-black text-13px font-medium">
          <span className="opacity-70">in</span> <span>Category</span>
        </p>
        <p className="text-black text-12px font-medium">
          <span className="opacity-70">Sku:</span>
          <span className="opacity-100">woo-tshirt</span>
        </p>
        <div className="flex items-center gap-1 ml-8">
          <RatingsCard rating={rating} />
          <span className="text-12px text-gray">({ratingCount})</span>
        </div>
      </div>
      <div className="flex justify-between mt-6 items-end border-b border-black border-opacity-15 pb-2">
        <div className="flex flex-col gap-2">
          <p className="text-28px font-medium text-black">$190.00</p>
          <p className="flex items-center gap-3">
            <span className="text-16px line-through font-normal text-black">
              $210.00
            </span>
            <span className="text-16px font-normal text-red">Save: $20.00</span>
          </p>
        </div>
        <p className="text-green-400 font-medium text-14px">
          Available in stock
        </p>
      </div>
      <div className="flex items-center gap-10 mt-10">
        <div className="flex items-center space-x-4 shadow-md border-t border-black border-opacity-10 rounded-full w-max">
          <button className="p-2 text-24px bg-black text-white rounded-full hover:bg-opacity-90 transition-all duration-300">
            <BiMinus />
          </button>
          <p className="text-lg font-medium">1</p>
          <button className="p-2 text-24px bg-black text-white rounded-full hover:bg-opacity-90 transition-all duration-300">
            <BiPlus />
          </button>
        </div>
        <button className="bg-red py-2 px-5 text-white ">Add To Cart</button>
      </div>
      <div className="flex items-center justify-between shadow-custom-black px-5 py-4 mt-10">
        <div className="flex items-center gap-4">
          <img
            src={store}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <div className="text-13px">
            <span className="text-gray">Store</span>
            <p className="text-black font-medium">Zone Store</p>
          </div>
        </div>
        <div className="flex items-center gap-1 ml-8">
          <RatingsCard rating={rating} />
          <span className="text-12px text-gray">({ratingCount})</span>
        </div>
      </div>
      <div className="mt-10 border border-gray border-opacity-10 px-5 py-1 text-13px text-black text-opacity-70">
        <div className="flex justify-between items-center border-b border-gray border-opacity-10 py-2">
          <p className="flex items-center gap-1">
            <AiOutlineTruck />
            Free Shipping & Returns on this item
          </p>
          <button className="font-medium text-12px">See Details</button>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="flex items-center gap-1">
            <AiOutlineClockCircle />
            Delivery within 3-5 working days
          </p>
          <button className="font-medium text-12px">See Details</button>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
