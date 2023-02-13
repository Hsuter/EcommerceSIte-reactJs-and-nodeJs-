import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useGetAllCapsQuery } from "../features/productsApi";

const MarqueeCard = () => {
  const { data, isLoading, error } = useGetAllCapsQuery();
  return (
    <div className="relative flex overflow-x-hidden flex-shrink-0 items-center justify-center  pause">
      <div className=" flex md:py-12 py-12 animate-marquee whitespace-nowrap ">
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
              <div className="mx-4 " key={product.id}>
                <img src={product.image} i={i}></img>
                <p className="">{product.name}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex absolute md:py-12 py-12 animate-marquee2  whitespace-nowrap ">
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
              <div className="mx-4" key={product.id}>
                <img src={product.image} i={i}></img>
                <p className="">{product.name}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MarqueeCard;
