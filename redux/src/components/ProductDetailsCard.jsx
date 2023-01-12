import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useEffect, useState } from "react";

const ProductDetailsCard = ({ detailsItem }) => {
  const cart = useSelector((state) => state.cart);
  const [detailsQuantity, setDetailsQuantity] = useState();

  useEffect(() => {
    for (let i = 1; i <= cart.cartItems.length; i++) {
      let p = i - 1;

      if (cart.cartItems[p].name == detailsItem.name) {
        setDetailsQuantity(cart.cartItems[p].cartQuantity);
      }
    }
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (detailsItem) => {
    dispatch(addToCart(detailsItem));
    window.location.reload(true);
  };
  const handleRemoveFromCart = (detailsItem) => {
    dispatch(removeFromCart(detailsItem));
  };

  return (
    <div className=" flex sm:flex-row flex-col items-center justify-center  sm:gap-20  gap-10">
      <div className="flex flex-col  pb-5">
        <h1 className="font-bold text-3xl overline mb-6">{detailsItem.name}</h1>
        <div className="flex bg-white shadow-lg shadow-black border-black sm:w-80 w-52 sm:h-80 h-52  justify-center items-center">
          <img className="w-[80%] " src={detailsItem.image} />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div>
          <h2 className="font-bold">Description</h2>
          <p>xdfcghjfdxgchjbkkxdgcfhvjbknkm</p>
          <p>{detailsItem.dec}</p>
        </div>
        <div>
          <h3 className="font-bold">Price</h3>
          <p>Kes {detailsItem.price}/=</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-2">Quantity</h1>
          <div className="flex flex-col   ">
            <div className="flex flex-row w-[120px] justify-around border-2 border-sky-900	border-color: rgb(14 165 233) items-center font-serif font-bold ">
              <button onClick={() => handleAddToCart(detailsItem)}>+</button>
              <div className="text-sm border-x-2 border-sky-900	border-color: rgb(14 165 233) px-2 ">
                {detailsQuantity}
              </div>
              <button
                className="pr-1 "
                onClick={() => handleRemoveFromCart(detailsItem)}
              >
                -
              </button>
            </div>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-5"
              onClick={() => handleAddToCart(detailsItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
