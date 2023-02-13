import React from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllCapsQuery } from "../features/productsApi";
import { CircularProgress } from "@mui/material";

const Hoodies = () => {
  const { data, isLoading, error } = useGetAllCapsQuery();

  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="my-8 font-serif md:text-5xl text-3xl">Tshirts</h3>
      <div className=" flex flex-wrap ">
        {isLoading ? (
          <>
            <p>Loading</p>
            <CircularProgress />
          </>
        ) : error ? (
          <p>An error occured</p>
        ) : (
          <>
            {data
              ?.filter((product) => product.category == "Hoodies")
              .map((filteredProduct, i) => (
                <ProductCard
                  product={filteredProduct}
                  key={filteredProduct.id}
                  i={i}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Hoodies;
