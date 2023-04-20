import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { viewDetails } from "../features/productDetailsSlice";
import { ShoppingBasketOutlined } from "@material-ui/icons";

const ProductCard = ({ product }) => {
  const [showPrice, setShowPrice] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleViewDetails = () => {
    dispatch(viewDetails(product));
    navigate("/productdetails");
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div
        className={`flex flex-col  items-center  shadow-xl px-10 border-2 md:w-[300px] w-[200px] md:h-[300px] h-[200px]`}
        onMouseMove={() => setShowPrice(true)}
        onMouseLeave={() => setShowPrice(false)}
        key={product.id}
      >
        <div className="flex w-[135%]">
          <ShoppingBasketOutlined
            onClick={() => handleAddToCart(product)}
            className="ml-[85%] text-black m-5 cursor-pointer"
          />
        </div>

        <img
          alt={product.name}
          src={product.image.url}
          className="w-96 h-60 mb-8 hover:scale-125 transition duration-500 ease-in-out"
          onClick={handleViewDetails}
        />
      </div>
      <p className="text-grey-800 text-[14px] ">{product.name}</p>
      <p className="text-grey-800 text-[14px] ">Kes {product.price}/=</p>
    </div>
  );
};

export default ProductCard;
