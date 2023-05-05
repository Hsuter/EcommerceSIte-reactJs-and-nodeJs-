import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";
import { useGetSpecificProductQuery } from "./../features/productsApi";
import { useLocation } from "react-router-dom";

const FilteredProducts = () => {
  const location = useLocation();
  const filters = location.state?.filters;
  const { category, age, gender } = filters;
  const { data, isLoading, isError } = useGetSpecificProductQuery({
    gender,
    category,
    age,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filters]);

  return (
    <div className="flex flex-col items-center mt-10 md:ml-20 ml-2 ">
      {filters.gender ? (
        <h1 className="my-8 font-serif md:text-5xl text-3xl items-center justify-center flex flex-col">
          {filters.gender == "Both" && filters.age == "Kids" ? (
            <p>Kids' Section</p>
          ) : filters.gender == "Women" && filters.age == "Kids" ? (
            <p>Girls' Section</p>
          ) : filters.gender == "Men" && filters.age == "Kids" ? (
            <p>Boys' Section</p>
          ) : filters.gender == "Men" ? (
            <p>Mens' Section</p>
          ) : (
            <p>Womens' Section</p>
          )}
          <p className="ml-4">{filters.category}</p>
        </h1>
      ) : (
        <h1 className="my-8 font-serif md:text-5xl text-3xl">
          No matching products
        </h1>
      )}

      <div className=" flex flex-wrap gap-8 ">
        {isLoading ? (
          <>
            <p>Loading</p>
            <CircularProgress />
          </>
        ) : isError ? (
          <p>An error occured</p>
        ) : (
          <>
            {filters.gender && data.length > 0 ? (
              data?.map((product, i) => (
                <ProductCard product={product} key={product._id} i={i} />
              ))
            ) : (
              <p className="mb-[17vw]">No matching products</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
