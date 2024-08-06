import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API slice
export const targetAPI = createApi({
  reducerPath: 'targetAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://target1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_TARGET_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => 'categories/v2/list' }),
    getAllReviews: builder.query({ query: () => 'reviews/v2/list' }),
    getAllCategories: builder.query({ query: () => 'products/v2/list' }),
    getProductsByCategory: builder.query({ query: (category) => `categories/v2/list?category=${category}` }),
    getProductBySearch: builder.query({ query: (searchTerm) => `auto-complete?q=${searchTerm}` }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllProductsQuery,
  useGetAllReviewsQuery,
  useGetAllCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductBySearchQuery,
} = targetAPI;
