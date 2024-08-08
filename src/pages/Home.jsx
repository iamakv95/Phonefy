import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../redux/services/targetAPI";
import {
  HomeSlider,
  OfferCard,
  ProductCard,
  ProductOfferCard,
  ProductSlider,
} from "../components";
import { featuredOffer, ctaOffer, giftOffer } from "../constants";

const Home = () => {
  const {
    data: allProductsData,
    error: allProductsError,
    isLoading: allProductsLoading,
  } = useGetAllProductsQuery();

  const {
    data: allCategoriesData,
    error: allCategoriesError,
    isLoading: allCategoriesLoading,
  } = useGetAllCategoriesQuery();

  const products = allProductsData?.data?.search?.products || [];
  const categories =
    allCategoriesData?.slots?.[1200]?.content.taxonomy_nodes || [];

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * products.length);
        setCurrentProduct(products[randomIndex]);
      }, 6500); 
      const randomIndex = Math.floor(Math.random() * products.length);
      setCurrentProduct(products[randomIndex]);
      return () => clearInterval(intervalId);
    }
  }, [products]);
  

  return (
    <>
      <section className="mb-16 mt-4 h-[75vh]">
        <div className="container flex items-center gap-6 font-outfit h-full">
          <div className="home_slider relative w-2/3 h-full rounded-lg">
            <HomeSlider />
          </div>
          <div className="w-1/3 items-center justify-center border border-gray border-opacity-15 flex shadow-md h-full rounded-lg p-10">
            {currentProduct && <ProductOfferCard product={currentProduct} />}
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black">
            Popular Products
          </h1>
          <Link
            to="/all-products"
            className="text-13px font-medium underline underline-offset-2 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            See All Products
          </Link>
        </div>
        <div className="container mt-10 popular_products">
          {allProductsLoading ? (
            <p>Loading products...</p>
          ) : allProductsError ? (
            <p>Error: {allProductsError.message}</p>
          ) : (
            <ProductSlider products={products} />
          )}
        </div>
      </section>
      <section className="mb-16">
        <OfferCard
          details={giftOffer}
          customCSS="flex bg-cover bg-no-repeat flex-col py-12 items-center justify-center rounded-md "
        />
      </section>
      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black">
            Our Featured Offers
          </h1>
          <Link
            to="/all-offers"
            className="text-13px font-medium underline underline-offset-2 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            See All Offers
          </Link>
        </div>
        <div className="container mt-10 flex items-start gap-11">
          {featuredOffer.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <Link to={item.href}>
                <img src={item.imageURL} alt={item.title} />
              </Link>
              <Link
                to={item.href}
                className="text-center text-24px leading-tight font-medium"
              >
                {item.title}
              </Link>
              <Link
                to={item.href}
                className="text-12px font-medium underline underline-offset-[6px]"
              >
                {item.btnTitle}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black">
            Explore Popular Categories
          </h1>
          <Link
            to="/all-categories"
            className="text-13px font-medium underline underline-offset-2 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            See All Categories
          </Link>
        </div>
        <div className="container mt-10 grid grid-cols-7 items-start grid-flow-row gap-10">
          {allCategoriesLoading ? (
            <p>Loading categories...</p>
          ) : allCategoriesError ? (
            <p>Error: {allCategoriesError.message}</p>
          ) : (
            categories.slice(0, 14).map((item) => (
              <div
                key={item.tracking_id}
                className="flex flex-col gap-6 justify-center items-center"
              >
                <Link to={item.href}>
                  <img
                    src={item.image_path}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />
                </Link>
                <Link
                  to={item.href}
                  className="text-center text-18px leading-tight font-medium"
                >
                  {item.name}
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
      <section className="mb-16">
        <OfferCard
          details={ctaOffer}
          customCSS="flex bg-cover bg-no-repeat flex-col py-12 justify-center rounded-md "
        />
      </section>
      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black">
            New Arrival
          </h1>
        </div>
        <div className="container mt-10 grid grid-cols-4 gap-20">
          {allProductsLoading ? (
            <p>Loading new arrivals...</p>
          ) : allProductsError ? (
            <p>Error: {allProductsError.message}</p>
          ) : (
            products
              .slice(0, 8)
              .map((product) => (
                <ProductCard product={product} key={product.item.dpci} />
              ))
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
