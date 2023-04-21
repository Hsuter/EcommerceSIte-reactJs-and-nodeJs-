import React from "react";
import ProductCard from "../components/ProductCard";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import bunner from "../assets/bunner.png";
import { tshirtbunner1 } from "../assets";
import { hoodiebunner } from "../assets";
import { capbunner } from "../assets";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    items: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  return (
    <div className=" flex flex-col mt-10 items-center w-[100vw]">
      <div className={`sm:mt-[-30px] mt-[-28px] banner `}>
        <img src={bunner} alt="bunner" className="" />
      </div>
      <h2 className="my-16 font-serif md:text-5xl text-3xl">
        Top Selling Items
      </h2>
      <div className="flex md:flex-wrap flex-row overflow-x-auto  w-full md:justify-center font-serif gap-5 ">
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
                  key={filteredProduct._id}
                  i={i}
                />
              ))}
          </>
        )}
      </div>

      <h2 className="my-16 font-serif md:text-5xl text-3xl">Other products</h2>
      <div className="flex flex-col  md:gap-20 gap-8 w-[100vw]  ">
        <h3 className=" font-serif md:text-5xl text-3xl">Tshirts</h3>
        <div className="flex md:flex-row flex-col gap-8  ">
          <img src={tshirtbunner1} className="sm:w-full w-[100vw] " />
          <div className="flex md:flex-wrap flex-row overflow-x-auto  w-full md:justify-center font-serif gap-5  ">
            {isLoading ? (
              <>
                <p>Loading</p>
                <CircularProgress />
              </>
            ) : error ? (
              <p>An error occured</p>
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="flex flex-row md:flex-wrap flex-nowrap gap-8 mt-6">
                    {data
                      ?.filter((product) => product.category == "Tshirt")
                      .splice(0, 4)
                      .map((filteredProduct, i) => (
                        <ProductCard
                          product={filteredProduct}
                          key={filteredProduct._id}
                          i={i}
                        />
                      ))}
                  </div>
                </div>
              </>
            )}
            <Link to="/Tshirts" className="cursor-pointer  md:block hidden ">
              View more
            </Link>
          </div>
          <Link
            to="/Tshirts"
            className="cursor-pointer  md:hidden block pl-[43%]"
          >
            View more
          </Link>
        </div>
        <h3 className=" font-serif md:text-5xl text-3xl">Hoodies</h3>
        <div className="flex md:flex-row flex-col gap-8 ">
          <img src={hoodiebunner} className="lg:w-full w-[100vw] " />
          <div className="flex md:flex-wrap flex-row overflow-x-auto  w-full md:justify-center font-serif gap-5  ">
            {isLoading ? (
              <>
                <p>Loading</p>
                <CircularProgress />
              </>
            ) : error ? (
              <p>An error occured</p>
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="flex flex-row md:flex-wrap flex-nowrap gap-8 mt-6">
                    {data
                      ?.filter((product) => product.category == "Hoodies")
                      .splice(0, 4)
                      .map((filteredProduct, i) => (
                        <ProductCard
                          product={filteredProduct}
                          key={filteredProduct._id}
                          i={i}
                        />
                      ))}
                  </div>
                </div>
              </>
            )}
            <Link to="/Hoodies" className="cursor-pointer  md:block hidden ">
              View more
            </Link>
          </div>
          <Link
            to="/Hoodies"
            className="cursor-pointer  md:hidden block pl-[43%]"
          >
            View more
          </Link>
        </div>
        <h3 className="font-serif md:text-5xl text-3xl">Caps</h3>
        <div className="flex md:flex-row flex-col gap-8 ">
          <img src={capbunner} className="lg:w-full w-[100vw]" />
          <div className="flex md:flex-wrap flex-row overflow-x-auto  w-full md:justify-center font-serif gap-5  ">
            {isLoading ? (
              <>
                <p>Loading</p>
                <CircularProgress />
              </>
            ) : error ? (
              <p>An error occured</p>
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="flex flex-row md:flex-wrap flex-nowrap gap-8 mt-6">
                    {data
                      ?.filter((product) => product.category == "Cap")
                      .splice(0, 4)
                      .map((filteredProduct, i) => (
                        <ProductCard
                          product={filteredProduct}
                          key={filteredProduct._id}
                          i={i}
                        />
                      ))}
                  </div>
                </div>
              </>
            )}
            <Link to="/Caps" className="cursor-pointer  md:block hidden ">
              View more
            </Link>
          </div>
          <Link
            to="/Caps"
            className="cursor-pointer  md:hidden block pl-[43%] pb-20"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
