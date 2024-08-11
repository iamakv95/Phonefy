import React from "react";
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
  console.log("products", products);

  return (
    <>
      <section className="mb-16 mt-4 ">
        <div className="container flex items-stretch gap-6 font-outfit h-full max-lg:flex-col max-lg:gap-11">
          <div className="home_slider flex-1 self-stretch h-auto relative shadow-md w-2/3 rounded-lg max-lg:w-full">
            <HomeSlider />
          </div>
          <div className="w-1/3 relative items-center justify-center bg-accent flex shadow-md h-full rounded-lg p-10 max-md:p-6 max-lg:w-full">
            <ProductOfferCard />
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black max-lg:text-18px">
            Popular Products
          </h1>
          <Link
            to="/all-products"
            className="text-13px max-lg:text-12px font-medium underline underline-offset-4 opacity-80 hover:opacity-100 transition-all duration-300"
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
      <section className="mb-16 container">
        <OfferCard
          details={giftOffer}
          customCSS="flex max-lg:text-center max-lg:px-6 bg-cover bg-no-repeat flex-col py-12 items-center justify-center rounded-md w-full max-lg:bg-center"
        />
      </section>
      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black max-lg:text-18px">
            Our Featured Offers
          </h1>
          <Link
            to="/all-offers"
            className="text-13px max-lg:text-12px font-medium underline underline-offset-4 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            See All Offers
          </Link>
        </div>
        <div className="container mt-10 grid items-start gap-11 grid-cols-4 max-lg:grid-cols-2">
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
                className="text-center text-24px max-lg:text-14px leading-tight font-medium max-lg:font-semibold"
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
          <h1 className="text-28px font-medium capitalize text-black max-lg:text-18px">
            Explore Popular Categories
          </h1>
          <Link
            to="/all-categories"
            className="text-13px max-lg:text-12px font-medium underline underline-offset-4 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            See All <span className="max-lg:hidden">Categories</span>
          </Link>
        </div>
        <div className="container mt-10 grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 items-start grid-flow-row gap-10">
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
                  className="text-center text-16px max-lg:text-13px leading-tight font-medium"
                >
                  {item.name}
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
      <section className="mb-16 container">
        <OfferCard
          details={ctaOffer}
          customCSS="flex max-lg:text-center max-lg:px-6 bg-cover bg-no-repeat flex-col py-12 justify-center rounded-md w-full px-12"
        />
      </section>
      <section className="mb-16">
        <div className="container flex items-center justify-between font-outfit">
          <h1 className="text-28px font-medium capitalize text-black max-lg:text-18px">
            New Arrival
          </h1>
        </div>
        <div className="container mt-10 grid grid-cols-4 gap-20 max-lg:grid-cols-3 max-md:grid-cols-2 max-lg:gap-10">
          {allProductsLoading ? (
            <p>Loading new arrivals...</p>
          ) : allProductsError ? (
            <p>Error: {allProductsError.message}</p>
          ) : (
            products
              .slice(0, 8)
              .map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
