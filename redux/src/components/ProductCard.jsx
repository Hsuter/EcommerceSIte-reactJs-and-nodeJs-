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
    <div className="flex flex-col justify-center items-center">
      <div
        className={`flex flex-col w-80 h-100 items-center m-5 shadow-xl px-10 border-2 `}
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
          className="w-96 h-60 mb-8  "
          onClick={handleViewDetails}
        />
      </div>
      <p className="text-grey-800 text-[14px] ">{product.name}</p>
      <p className="text-grey-800 text-[14px] ">Kes {product.price}/=</p>
    </div>
  );
};

export default ProductCard;
