import React, { useEffect, useState } from "react";
import { homeOfferSliders } from "../../constants";

const ProductOfferCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (homeOfferSliders.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % homeOfferSliders.length
        );
      }, 6500);
      return () => clearInterval(intervalId);
    }
  }, [homeOfferSliders]);

  const currentProduct = homeOfferSliders[currentIndex] || null;

  return (
    <div className="flex flex-col items-center justify-center text-center group w-full">
      <div className="flex items-center justify-center flex-col max-lg:absolute  max-lg:top-[-15px] max-lg:bg-white max-lg:rounded-md max-lg:px-4 max-lg:max-w-max">
        <p className="text-black text-14px font-medium py-2 px-4 transition duration-200">
          Limited Time Offer
        </p>
        <div className="flex items-center gap-0 mb-11 max-lg:hidden">
          <div className="flex flex-col items-center gap-1">
            <p className="text-base rounded-l-md px-4 py-2 font-medium bg-white border-r border-black border-opacity-10">
              17
            </p>
            <span className="text-12px">Hours</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-base px-4 font-medium py-2 bg-white border-r border-black border-opacity-10">
              39
            </p>
            <span className="text-12px">Mins</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-base rounded-r-md px-4 font-medium py-2 bg-white">
              29
            </p>
            <span className="text-12px">Sec</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-lg:flex-row max-md:justify-between  max-lg:w-full max-lg:gap-10 max-lg:pt-6">
        <img
          src={currentProduct.imageURL}
          alt={currentProduct.title}
          className="w-40 h-40 max-lg:w-30 max-lg:h-30 max-md:w-24 max-md:h-24 object-contain rounded-md scale-125 max-lg:mb-0 mb-4 group-hover:scale-150 transition-all duration-500 ease-in-out"
        />
        <div className="max-md:w-full">
          <h3 className="text-18px max-lg:text-14px font-semibold mb-1">{currentProduct.title}</h3>
          <p className="max-lg:text-12px">{currentProduct.descrpt}</p>
          <button className="text-black text-13px py-2 px-4 underline underline-offset-4 transition duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOfferCard;
