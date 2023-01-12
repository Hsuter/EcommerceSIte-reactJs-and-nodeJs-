import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useGetAllCapsQuery } from "../features/productsApi";

const MarqueeCard = () => {
  const { data, isLoading, error } = useGetAllCapsQuery();
  return (
    <div className="relative flex overflow-x-hidden ">
      <div className=" flex md:py-12 py-5 animate-marquee whitespace-nowrap">
        {isLoading ? (
          <>
            <p>Loading</p>
            <CircularProgress />
          </>
        ) : error ? (
          <p>An error occured</p>
        ) : (
          <>
            {data.map((product, i) => (
              <div className="mx-4">
                <img src={product.image} i={i}></img>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="absolute flex md:py-12 py-5  animate-marquee2 whitespace-nowrap">
        {isLoading ? (
          <>
            <p>Loading</p>
            <CircularProgress />
          </>
        ) : error ? (
          <p>An error occured</p>
        ) : (
          <>
            {data.map((product, i) => (
              <div className="mx-4">
                <img src={product.image} i={i}></img>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MarqueeCard;
