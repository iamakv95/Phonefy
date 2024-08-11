import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const targetAPI = createApi({
  reducerPath: "targetAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://target1.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_TARGET_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () =>
        "products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance",
      transformResponse: (response) => {
        return response;
      },
    }),
    getFeaturedProducts: builder.query({
      query: () => "/products/v2/list-recommended?tcins=54191097&store_id=911",
      transformResponse: (response) => {
        return response;
      },
    }),
    getAllReviews: builder.query({ query: () => "reviews/v2/list" }),
    getAllCategories: builder.query({
      query: () => "categories/v2/list",
      transformResponse: (response) => {
        return response;
      },
    }),
    getProductsByCategory: builder.query({
      query: (category) => `categories/v2/list?category=${category}`,
    }),
    getProductsDetails: builder.query({
      query: (id) => `products/v3/get-details?tcin=${id}&store_id=911`,
    }),
    getProductBySearch: builder.query({
      query: (searchTerm) => `auto-complete?q=${searchTerm}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsDetailsQuery,
  useGetFeaturedProductsQuery,
  useGetAllReviewsQuery,
  useGetAllCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductBySearchQuery,
} = targetAPI;
