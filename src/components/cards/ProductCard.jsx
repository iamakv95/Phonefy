import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {ProductImageCard} from "../../components";

const ProductCard = () => {
  const hiddenDivRef = useRef(null);

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
        parent.addEventListener("mouseenter", handleHover);
        parent.addEventListener("mouseleave", handleHoverOut);

        return () => {
          parent.removeEventListener("mouseenter", handleHover);
          parent.removeEventListener("mouseleave", handleHoverOut);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col font-outfit product_card group">
      <div className="relative">
       <ProductImageCard/>
        <span className="absolute top-4 left-3 bg-accent rounded-md text-red text-11px font-bold z-20 px-2 py-1">
          -3%
        </span>
      </div>
      <div className="px-2 py-1 flex flex-col gap-1">
        <Link to="/" className="text-11px text-black opacity-80 font-medium">
          Product Category
        </Link>
        <Link to="/" className="text-black font-normal leading-tight text-14px">
          CLIC Marquetry Leather Case for iPhone 11 Pro
        </Link>
        <Link to="/" className="text-11px font-medium text-black">
          Brand
        </Link>
      </div>
      <div className="px-2 py-1 flex flex-col gap-0">
        <p className="text-red font-medium text-14px">
          $20
          <span className="text-black font-normal line-through ml-1">$25</span>
        </p>
        <p>Ratings</p>
      </div>
      <div
        ref={hiddenDivRef}
        className="hidden absolute bottom-0 w-full px-2 flex-col gap-1 shadow-lg shadow-white bg-white py-2 z-20 group-hover:flex"
      >
        <button className="capitalize text-white bg-red rounded-md py-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
