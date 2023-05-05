import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SearchResults = () => {
  const location = useLocation();
  
  const filteredData = location.state?.filteredData;

  return (
    <div className="flex flex-col items-center font-serif font-bold justify-center md:mt-20">
      <h1 className="my-4 underline">Search Results</h1>
      <div className="flex flex-row flex-wrap gap-8 items-center justify-center ">
        {filteredData.length > 0 ? (
          <>
            {filteredData.map((product, i) => (
              <ProductCard product={product} key={product._id} i={i} />
            ))}
          </>
        ) : (
          <p className="text-black h-[100vw] pt-[20vw]">No results found !!!</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
