import React from "react";
import {
  BreadCrumbCard,
  ProductSlider,
  SingleProductDetails,
  SingleProductSlider,
} from "../components";
import { ProductInfoSectionCard } from "../components";

import { useParams } from "react-router-dom";
import {
  useGetProductsDetailsQuery,
  useGetFeaturedProductsQuery,
} from "../redux/services/targetAPI";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    data: singleProduct,
    isLoading: isLoadingProduct,
    error: productError,
  } = useGetProductsDetailsQuery(id);
  const {
    data: featuredProducts,
    isLoading: isLoadingFeatured,
    error: featuredError,
  } = useGetFeaturedProductsQuery(id);

  if (isLoadingProduct || isLoadingFeatured)
    return (
      <div className="container flex items-center justify-center">
        <p>loading</p>
      </div>
    );
  if (productError || featuredError)
    return (
      <div className="container flex items-center justify-center">
        <p>Error</p>
      </div>
    );

  const product = singleProduct?.data;
  console.log("single product", product);
  const products = featuredProducts?.data?.recommended_products?.products;

  console.log("related products", products);

  if (!product)
    return (
      <div className="container flex items-center justify-center">
        <p>no product found</p>
      </div>
    );

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
      <section className="py-8 font-outfit">
        <div className="container flex flex-col gap-8 items-center">
          <h3 className="capitalize text-24px border-b-2 w-max border-black font-medium leading-tight">
            Similar items
          </h3>
         <div className="w-full"> <ProductSlider products={products} /></div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
