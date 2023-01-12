import React from "react";
import { useGetAllTshirtsQuery } from "../features/productsApi";

import { CircularProgress } from "@mui/material";

const Tshirts = () => {
  const { data, error, isLoading } = useGetAllTshirtsQuery();

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
            {data.map((product) => (
              <div
                className="flex flex-col justify-between w-80 h-100 items-center  m-5 shadow-xl px-10"
                key={product.id}
              >
                <p className="font-bold">{product.name}</p>

                <img
                  alt={product.name}
                  src={product.image}
                  className="w-96 h-60"
                />
                <div>
                  <p>{product.desc}</p>
                  <p className="font-bold">
                    Price: <span className="font-light">{product.price}</span>
                  </p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-5"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Tshirts;
