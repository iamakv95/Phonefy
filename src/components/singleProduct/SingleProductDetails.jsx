import React from "react";
import { AiOutlineClockCircle, AiOutlineTruck } from "react-icons/ai";
import {RatingsCard} from "../../components";
import { BiMinus, BiPlus } from "react-icons/bi";

const SingleProductDetails = ({ product }) => {
  const reg_retail = parseFloat(product?.product?.price?.reg_retail) || parseFloat(product?.product?.price?.current_retail_max) || 0;
  const currentPrice = parseFloat(product?.product?.price?.current_retail) || parseFloat(product?.product?.price?.current_retail_min) || 0;
  const discountPercentage = reg_retail
    ? ((reg_retail - currentPrice) / reg_retail) * 100
    : 0;

  const savingPrice = reg_retail - currentPrice;

  const rating =
    product?.product?.ratings_and_reviews?.statistics?.rating?.average || 0;
  const ratingCount =
    product?.product?.ratings_and_reviews?.statistics?.review_count || 0;

  return (
    <>
      {discountPercentage > 0 && (
        <span className=" bg-red text-white w-max text-12px font-bold z-20 px-2 py-1">
          -{discountPercentage.toFixed(0)}%
        </span>
      )}
      <h1 className="text-24px font-medium py-2 leading-tight">
        {product?.product?.item?.product_description?.title}
      </h1>
      <div className="flex items-center gap-8 ">
        <p className="text-black text-13px font-medium">
          <span className="opacity-70">in </span>
          <span className="text-12px capitalize">
            {product?.product?.item?.product_classification
              ?.product_subtype_name || "Uncategoried"}
          </span>
        </p>
        <p className="text-black text-12px font-medium">
          <span className="opacity-70">Sku: </span>
          <span className="opacity-100">
            {product?.product.item?.dpci || "No SKU Found"}
          </span>
        </p>
        <div className="flex items-center gap-1 ml-8">
          <RatingsCard rating={rating} />
          <span className="text-12px text-gray">({ratingCount})</span>
        </div>
      </div>
      <div className="flex justify-between mt-6 items-end border-b border-black border-opacity-15 pb-2">
        <div className="flex flex-col gap-2">
          <p className="text-28px font-medium text-black">${currentPrice}</p>
          <p className="flex items-center gap-3">
            <span className="text-16px line-through font-normal text-black">
              ${reg_retail}
            </span>
            <span className="text-16px font-normal text-red">
              Save: ${savingPrice.toFixed(2)}
            </span>
          </p>
        </div>
        <p
          className={`${
            product?.fulfillment?.sold_out == true
              ? "text-red"
              : "text-green-500"
          } font-medium text-14px`}
        >
          {product?.fulfillment?.sold_out == true
            ? "Out of Stock"
            : "Available in stock"}
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
        <button className="bg-red hover:bg-hoverRed py-2 px-5 text-white ">
          Add To Cart
        </button>
      </div>
      {product?.product?.item?.product_description?.soft_bullets?.bullets && (
        <div className="flex gap-5  flex-col justify-between py-4 mt-10">
          <h4 className="capitalize text-24px border-b-2 w-max border-black font-medium leading-tight">
            Highlights
          </h4>

          <ul className="ml-3">
            {product?.product?.item?.product_description?.soft_bullets?.bullets.map(
              (bullet, index) => (
                <li
                  className="list-disc ml-2"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: bullet }}
                />
              )
            )}
          </ul>
        </div>
      )}
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
