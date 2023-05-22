import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://naxybackend.onrender.com/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSpecificProduct: builder.query({
      query: ({ gender, category, age }) =>
        `api/products?gender=${gender}&category=${category}&age=${age}`,
    }),
  }),
});

export const { useGetSpecificProductQuery } = productsApi;
