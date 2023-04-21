import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const MarqueeCard = () => {
  const {
    items: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);

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
              <>
                <div className="flex flex-col items-center">
                  <div
                    className="flex flex-col mx-4 border-x-2  w-[200px] justify-center items-center  h-[100%]   "
                    key={product.id}
                  >
                    <img
                      className="w-[100px] "
                      src={product.image.url}
                      i={i}
                    ></img>
                  </div>
                  <p>{product.name}</p>
                </div>
              </>
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
              <>
                <div className="flex flex-col items-center">
                  <div
                    className="flex flex-col mx-4 border-x-2  w-[200px] justify-center items-center  h-[100%] "
                    key={product.id}
                  >
                    <img
                      className="w-[100px]"
                      src={product.image.url}
                      i={i}
                    ></img>
                  </div>
                  <p>{product.name}</p>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MarqueeCard;
