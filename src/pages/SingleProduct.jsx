import React from "react";
import {
  BreadCrumbCard,
  SingleProductDetails,
  SingleProductSlider,
} from "../components";
import ProductInfoSectionCard from "../components/cards/ProductInfoSectionCard";

import { useParams } from "react-router-dom";
import { useGetProductsDetailsQuery } from "../redux/services/targetAPI";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsDetailsQuery(id);

  if (isLoading) return <p>loading</p>;
  if (error) return <p>Error</p>;

  const product = data?.data;

  if (!product) return <p>no product found</p>;

  return (
    <>
      <section className="py-3 border-t border-gray border-opacity-15 mt-1 font-outfit">
        <BreadCrumbCard product={product} />
      </section>
      <section className="py-4 font-outfit ">
        <div className="container flex gap-16">
          <div className="py-6 w-1/2 sticky top-0  h-max transition-all duration-500">
            <SingleProductSlider product={product} />
          </div>
          <div className="py-6 w-1/2 flex flex-col">
            <SingleProductDetails product={product} />
          </div>
        </div>
      </section>
      <section className="py-8 font-outfit">
        <ProductInfoSectionCard product={product} />
      </section>
    </>
  );
};

export default SingleProduct;
