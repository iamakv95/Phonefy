import React from "react";
import { BreadCrumbCard,  SingleProductDetails, SingleProductSlider } from "../components";
import ProductInfoSectionCard from "../components/cards/ProductInfoSectionCard";

const SingleProduct = () => {
 

  return (
    <>
      <section className="py-3 border-t border-gray border-opacity-15 mt-1 font-outfit">
     <BreadCrumbCard/>
      </section>
      <section className="py-4 font-outfit">
        <div className="container flex gap-16">
          <div className="py-6 w-1/2">
           <SingleProductSlider/>
          </div>
          <div className="py-6 w-1/2 flex flex-col">
            <SingleProductDetails/>
          </div>
        </div>
      </section>
      <section className="py-8 font-outfit">
        <ProductInfoSectionCard />
      </section>
      <section className="pt-8 pb-16 font-outfit">
        <ProductInfoSectionCard />
      </section>
    </>
  );
};

export default SingleProduct;
