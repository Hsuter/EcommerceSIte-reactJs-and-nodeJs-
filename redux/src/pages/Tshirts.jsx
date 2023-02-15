import React from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllCapsQuery } from "../features/productsApi";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Tshirts = () => {
  const {
    items: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);
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
              ?.filter((product) => product.category == "Tshirt")
              .map((filteredProduct, i) => (
                <ProductCard
                  product={filteredProduct}
                  key={filteredProduct._id}
                  i={i}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Tshirts;
