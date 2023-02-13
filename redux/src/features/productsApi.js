import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllHoodies: builder.query({ query: () => "products/hoodies" }),
    getAllTshirts: builder.query({ query: () => "/products/tshirts" }),
    getAllCaps: builder.query({ query: () => "products" }),
    getAllStickers: builder.query({ query: () => "products/stickers" }),
  }),
});

export const {
  useGetAllHoodiesQuery,
  useGetAllCapsQuery,
  useGetAllStickersQuery,
  useGetAllTshirtsQuery,
} = productsApi;
