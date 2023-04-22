import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { viewDetails } from "../features/productDetailsSlice";
import { StarBorderTwoTone, AddShoppingCart } from "@material-ui/icons";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let stars = [];
  const productRating = () => {
    for (let i = 0; i < product.ratings; i++) {
      stars.push(<StarBorderTwoTone className="text-yellow-400 " />);
    }

    return stars;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleViewDetails = () => {
    dispatch(viewDetails(product));
    navigate("/productdetails");
  };

  return (
    <div className="flex flex-col flex-wrap justify-center items-center mb-10  ">
      <div
        className={`flex flex-col  items-center  shadow-xl px-10 border-2 md:w-[300px] w-[150px] md:h-[300px] h-[200px] relative `}
        key={product.id}
      >
        <div className="flex w-[135%] z-10">
          <AddShoppingCart
            onClick={() => handleAddToCart(product)}
            className="ml-[85%] text-black m-5 cursor-pointer"
          />
        </div>

        <img
          alt={product.name}
          src={product.image.url}
          className="absolute md:h-full h-[80%] w-auto object-conatin mb-8 hover:scale-125 transition duration-500 ease-in-out sm:pt-0 pt-6 "
          onClick={handleViewDetails}
        />
      </div>
      <p className="text-grey-800 text-[14px] ">{product.name}</p>
      <p className="text-grey-800 text-[14px] ">Kes {product.price}/=</p>

      <div> {productRating(product.ratings)}</div>
    </div>
  );
};

export default ProductCard;
