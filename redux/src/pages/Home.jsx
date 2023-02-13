import React from "react";
import { useGetAllCapsQuery } from "../features/productsApi";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const { data, isLoading, error } = useGetAllCapsQuery();

  return (
    <div className=" flex flex-col items-center mt-10">
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
            {data
              ?.filter((product) => product.ratings > 2)
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
      <h2 className="my-16 font-serif md:text-5xl text-3xl">Other products</h2>
      <div className="flex flex-row flex-wrap justify-center gap-20 ">
        <div className="flex flex-col items-center ">
          <h3 className="my-16 font-serif md:text-5xl text-3xl">Tshirts</h3>
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
                .splice(0, 3)
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
        <div className="flex flex-col items-center">
          <h3 className="my-16 font-serif md:text-5xl text-3xl">Hoodies</h3>
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
                .splice(0, 3)
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
        <div className="flex flex-col items-center">
          <h3 className="my-16 font-serif md:text-5xl text-3xl">Caps</h3>
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
                ?.filter((product) => product.category == "Cap")
                .splice(0, 3)
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
    </div>
  );
};

export default Home;
