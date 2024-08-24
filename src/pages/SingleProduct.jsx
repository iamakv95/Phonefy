import React from "react";
import {
  BreadCrumbCard,
  ProductSlider,
  RatingDetails,
  RatingsCard,
  SingleProductDetails,
  SingleProductSlider,
} from "../components";
import { ProductInfoSectionCard } from "../components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import {
  useGetProductsDetailsQuery,
  useGetFeaturedProductsQuery,
  useGetAllReviewsQuery,
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

  const {
    data: reviewLists,
    isLoading: isLoadingReview,
    error: reviewError,
  } = useGetAllReviewsQuery(id);

  const product = singleProduct?.data;
  console.log("single product", product);

  const products = featuredProducts?.data?.recommended_products?.products;

  const allReviewLists = reviewLists?.results;

  const ratings = product?.product?.ratings_and_reviews;

  return (
    <>
      <section className="py-3 border-t border-gray border-opacity-15 mt-1 font-outfit">
        <BreadCrumbCard product={product} />
      </section>
      <section className="py-4 font-outfit ">
        <div className="container flex gap-16">
          <div className="py-6 w-1/2 sticky top-0  h-max transition-all duration-500">
            {isLoadingProduct ? (
              <p>Slider</p>
            ) : productError ? (
              <p>Error: {productError.message}</p>
            ) : (
              <SingleProductSlider product={product} />
            )}
          </div>
          <div className="py-6 w-1/2 flex flex-col">
            {isLoadingProduct ? (
              <p>Details</p>
            ) : productError ? (
              <p>Error: {productError.message}</p>
            ) : (
              <SingleProductDetails product={product} />
            )}
          </div>
        </div>
      </section>
      <section className="py-8 font-outfit">
        {isLoadingProduct ? (
          <p>Additional info</p>
        ) : productError ? (
          <p>Error: {productError.message}</p>
        ) : (
          <ProductInfoSectionCard product={product} />
        )}
      </section>

      <section className="py-8 font-outfit">
        <div className="container flex flex-col gap-8 items-center">
          <h3 className="capitalize text-24px border-b-2 w-max border-black font-medium leading-tight">
            Similar items
          </h3>
          <div className="w-full">
            {isLoadingFeatured ? (
              <p>Similar Products</p>
            ) : featuredError ? (
              <p>Error: {featuredError.message}</p>
            ) : (
              <ProductSlider products={products} />
            )}
          </div>
        </div>
      </section>
      <section className="py-8 font-outfit">
        <div className="container flex flex-col gap-8 items-center">
          <h3 className="capitalize text-24px border-b-2 w-max border-black font-medium leading-tight">
            Customer Reviews and Ratings
          </h3>
          <div className="flex justify-center gap-10 py-2">
            <RatingDetails ratings={ratings} />
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-28px leading-tight font-bold text-black">
                {Math.round(
                  product?.product?.ratings_and_reviews?.statistics?.rating
                    ?.average * 10
                ) / 10}
              </h3>
              <RatingsCard
                rating={
                  product?.product?.ratings_and_reviews?.statistics?.rating
                    ?.average || 0
                }
                customCSS="h-8 w-8"
              />
              <p className="text-14px leading-tight font-medium text-opacity-60 text-black">
                {
                  product?.product?.ratings_and_reviews?.statistics?.rating
                    ?.count
                }
                <span className="text-16px"> star ratings</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12">
                <CircularProgressbar
                  styles={buildStyles({
                    rotation: 0.05,
                    strokeLinecap: "butt",
                    textSize: "30px",
                    pathTransitionDuration: 0.5,
                    pathColor: "#16a34a",
                    textColor: "#000",
                    trailColor: "#7c818b26",
                    backgroundColor: "#3e98s",
                  })}
                  value={
                    product?.product?.ratings_and_reviews?.statistics
                      ?.recommended_percentage
                  }
                  text={`${product?.product?.ratings_and_reviews?.statistics?.recommended_percentage}`}
                />
              </div>
              <p className=" leading-tight font-medium text-opacity-90 text-black">
                <span className="text-14px">
                  {
                    product?.product?.ratings_and_reviews?.statistics
                      ?.recommended_percentage
                  }
                  %
                </span>
                <span className="text-16px mt-1"> would recommend</span>
              </p>
              <p className="text-14px leading-tight font-medium text-opacity-60 text-black">
                {
                  product?.product?.ratings_and_reviews?.statistics
                    ?.recommended_count
                }
                <span className="text-16px"> recommendations</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="font-outfit py-8">
        <div className="container">
          <div className="flex items-center justify-center gap-10">
            {product?.product?.ratings_and_reviews?.statistics?.rating?.secondary_averages.map(
              (item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <div className="w-12">
                    <CircularProgressbar
                      styles={buildStyles({
                        rotation: 0.05,
                        strokeLinecap: "butt",
                        textSize: "30px",
                        pathTransitionDuration: 0.5,
                        pathColor: "#16a34a",
                        textColor: "#000",
                        trailColor: "#7c818b26",
                        backgroundColor: "#3e98s",
                      })}
                      value={(item?.value / item?.range) * 100}
                      text={`${Math.round(item?.value * 10) / 10}`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className=" leading-none font-medium text-opacity-90 text-black">
                      {item.label}
                    </p>
                    <span className="text-14px mt-1">out of 5</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
