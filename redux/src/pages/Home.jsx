import React from "react";
import {
  useGetAllHoodiesQuery,
  useGetAllStickersQuery,
  useGetAllCapsQuery,
  useGetAllTshirtsQuery,
} from "../features/productsApi";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const { data: data1, isLoading, error } = useGetAllCapsQuery();
  const { data: data2 } = useGetAllHoodiesQuery();

  return (
    <div className=" flex flex-col items-center">
      <h2 className="my-16 font-serif md:text-5xl text-3xl">
        Top Selling Items
      </h2>
      <div className="container flex flex-wrap gap-6 justify-around font-serif  ">
        {isLoading ? (
          <>
            <p>Loading</p>
            <CircularProgress />
          </>
        ) : error ? (
          <p>An error occured</p>
        ) : (
          <>
            {data1.map((product, i) => (
              <ProductCard product={product} key={product.id} i={i} />
            ))}
            {data1.map((product, i) => (
              <ProductCard product={product} key={product.id} i={i} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
