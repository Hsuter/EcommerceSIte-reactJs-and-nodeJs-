import React from "react";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import bunner from "../assets/bunner.png";

const Home = () => {
  const {
    items: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  return (
    <div className=" flex flex-col items-center mt-10">
      <div className={`sm:mt-[-120px] mt-[-28px] `}>
        <img src={bunner} alt="bunner" className="" />
      </div>
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
            {data?.map((filteredProduct, i) => (
              <ProductCard
                product={filteredProduct}
                key={filteredProduct._id}
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
                    key={filteredProduct._id}
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
                    key={filteredProduct._id}
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
                    key={filteredProduct._id}
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
