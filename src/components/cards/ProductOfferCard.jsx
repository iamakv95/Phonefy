import React from "react";

const ProductOfferCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-red border border-red bg-accent text-14px font-medium py-2 px-4 transition duration-200 mb-12">
        Limited Time Offer
      </p>
      <img
        src={product.item.enrichment.images.primary_image_url}
        alt={product.item.product_description.title}
        className="w-52 h-52 object-contain rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">
        {product.item.product_description.title}
      </h3>
      <button className="text-black text-12px py-2 px-4 underline underline-offset-4 transition duration-200">
        Shop Now
      </button>
    </div>
  );
};

export default ProductOfferCard;
