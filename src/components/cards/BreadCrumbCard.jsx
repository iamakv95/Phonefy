import React from "react";
import { BiChevronRight, BiPrinter, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const BreadCrumbCard = ({ product }) => {
  return (
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-1 font-semibold uppercase text-black">
        <Link
          to="/"
          className="opacity-70 transition-all duration-300 text-12px leading-none hover:opacity-100"
        >
          Home
        </Link>
        {product?.product?.item?.product_classification?.product_type_name && (
          <>
            <BiChevronRight />
            <Link
              to="/"
              className="capitalize hover:opacity-100 text-12px leading-none opacity-70 transition-all duration-300"
            >
              {
                product?.product?.item?.product_classification
                  ?.product_type_name
              }
            </Link>
          </>
        )}
        {product?.product?.item?.product_classification
          ?.product_subtype_name && (
          <>
            <Link
              to="/"
              className="capitalize text-12px hover:opacity-100 leading-none opacity-70 transition-all duration-300"
            >
              {
                product?.product?.item?.product_classification
                  ?.product_subtype_name
              }
            </Link>
            <BiChevronRight />
          </>
        )}
        <p className="text-12px leading-none">
          {product?.product?.item?.product_description?.title || ""}
        </p>
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
