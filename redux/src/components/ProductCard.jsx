import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { viewDetails } from "../features/productDetailsSlice";

const ProductCard = ({ product }) => {
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
    <div
      className="flex flex-col w-80 h-100 items-center m-5 shadow-xl px-10"
      key={product.id}
    >
      <p className="font-bold">{product.name}</p>

      <img
        alt={product.name}
        src={product.image.url}
        className="w-96 h-60"
        onClick={handleViewDetails}
      />
      <div>
        <p>{product.desc}</p>
        <p className="font-bold">
          Price: <span className="font-light">{product.price}</span>
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-5"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
