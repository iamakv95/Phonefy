import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { RatingsCard } from "../../components";
import { GoHeart, GoHeartFill } from "react-icons/go";

const ProductCard = ({ product }) => {
  const productId = product.item?.tcin;

  if (!productId) {
    console.warn("Product ID is missing:", product);
    return null;
  }

  const hiddenDivRef = useRef(null);

  const reg_retail = parseFloat(product.price?.reg_retail) || 0;
  const currentPrice = parseFloat(product.price?.current_retail) || 0;
  const discountPercentage = reg_retail
    ? ((reg_retail - currentPrice) / reg_retail) * 100
    : 0;

  const title = product.item?.product_description?.title || "";
  const truncatedTitle = title.length > 40 ? title.slice(0, 40) + "..." : title;

  const rating =
    product.parent?.ratings_and_reviews?.statistics?.rating?.average ||
    product.ratings_and_reviews?.statistics?.rating?.average ||
    0;
  const ratingCount =
    product.parent?.ratings_and_reviews?.statistics?.rating?.count ||
    product.ratings_and_reviews?.statistics?.rating?.count ||
    0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hiddenDiv = hiddenDivRef.current;
      if (hiddenDiv) {
        gsap.set(hiddenDiv, { y: 50, opacity: 0 });

        const handleHover = () => {
          gsap.to(hiddenDiv, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleHoverOut = () => {
          gsap.to(hiddenDiv, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        };

        const parent = hiddenDiv.parentElement;
        if (parent) {
          parent.addEventListener("mouseenter", handleHover);
          parent.addEventListener("mouseleave", handleHoverOut);

          return () => {
            parent.removeEventListener("mouseenter", handleHover);
            parent.removeEventListener("mouseleave", handleHoverOut);
          };
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col font-outfit product_card group relative">
      <div className="relative">
        <Link to={`/products/${productId}`}>
          <img
            src={
              product.item?.enrichment?.images?.primary_image_url ||
              "/placeholder.jpg"
            }
            alt={product.item?.product_description?.title || "Product image"}
          />
        </Link>
        {discountPercentage > 0 && (
          <span className="absolute top-2 left-2 bg-accent rounded-md text-red text-12px font-bold z-20 px-2 py-1">
            -{discountPercentage.toFixed(0)}%
          </span>
        )}
        <button className="group-hover:block hidden absolute top-2 right-1">
          <GoHeart className="fill-red" />
        </button>
      </div>
      <div className="px-2 py-1 flex flex-col gap-1 mt-3">
        <Link
          to={`/products/${productId}`}
          className="text-11px text-black opacity-80 font-medium"
        >
          {product.item?.product_classification?.item_type?.name ||
            "No Category"}
        </Link>
        <Link
          to={`/products/${productId}`}
          className="text-14px max-lg:text-13px font-medium mt-1 text-black leading-tight"
        >
          {truncatedTitle}
        </Link>
      </div>
      <div className="px-2 py-1 flex flex-col gap-0">
        <p className="text-red font-medium text-14px">
          {currentPrice < reg_retail && `$${currentPrice.toFixed(2)}`}
          <span
            className={`text-black font-normal ${
              currentPrice < reg_retail
                ? "line-through ml-1"
                : "ml-0 font-semibold"
            }`}
          >
            ${reg_retail.toFixed(2)}
          </span>
        </p>
        <div className="flex items-center gap-1">
          <RatingsCard rating={rating} />
          <span className="text-12px text-gray">({ratingCount})</span>
        </div>
      </div>
      <div
        ref={hiddenDivRef}
        className="hidden absolute bottom-0 w-full px-2 flex-col gap-1 shadow-lg shadow-white bg-white py-2 z-20 group-hover:flex"
      >
        <button
          className={`capitalize text-white ${
            product.fulfillment.sol_out === true
              ? "bg-gray opacity-40"
              : "bg-red"
          } rounded-md py-2`}
        >
          {product.fulfillment.sol_out === true
            ? "Out Of Stock"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
