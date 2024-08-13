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
      query: (id) => `/products/v2/list-recommended?tcins=${id}&store_id=911`,
      transformResponse: (response) => {
        return response;
      },
    }),
    getAllReviews: builder.query({ query: (id) => `reviews/v2/list?reviewedId=${id}&sortBy=most_recent&size=30&page=0&hasOnlyPhotos=false&verifiedOnly=false` }),
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


