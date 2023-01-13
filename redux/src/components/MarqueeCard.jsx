import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useGetAllCapsQuery } from "../features/productsApi";

const MarqueeCard = () => {
  const { data, isLoading, error } = useGetAllCapsQuery();
  return (
    <div className="relative flex overflow-x-hidden w-[50vw]">
      <div className=" flex md:py-12 py-12 animate-marquee whitespace-nowrap mrq w-[100%]">
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
