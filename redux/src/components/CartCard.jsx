import React from "react";
import { RemoveShoppingCartRounded } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { removeFromCart, removeAllSimilarItems } from "../features/cartSlice";

function CartCard({ cartItem }) {
  const dispatch = useDispatch();

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleRemoveAll = (cartItem) => {
    dispatch(removeAllSimilarItems(cartItem));
  };
  return (
    <div>
      <div
        className="  flex sm:flex-row flex-col w-screen sm:items-center xl:mx-20 mx-10 md:justify-around my-5 "
        key={cartItem.id}
      >
        <div className="flex flex-row items-center sm:w-96 w-80 mx-5  ">
          <div className="shadow-2xl ">
            <img alt={cartItem.name} src={cartItem.image} className="  p-3 " />
          </div>
          <div className="flex flex-col items-start gap-5 mx-5">
            <div className="w-40">
              <h3 className="text-[12px] font-serif text-sky-700">
                {cartItem.desc}
              </h3>
            </div>
            <h3 className="text-sm">Kes: {cartItem.price}/= </h3>

            <button
              className="text-[11px] text-red underline"
              onClick={() => handleRemoveAll(cartItem)}
            >
              Remove
              <span>
                <RemoveShoppingCartRounded className="remove" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-10 gap-2 sm:ml-0 ml-10 sm:my-0 my-5 w-96  justify-around  ">
          <div className="flex flex-row w-20 justify-around border-2 border-sky-500	border-color: rgb(14 165 233) items-center font-serif font-bold ">
            <button onClick={() => handleAddToCart(cartItem)}>+</button>
            <div className="text-sm border-x-2 border-sky-500	border-color: rgb(14 165 233) px-2 ">
              {cartItem.cartQuantity}
            </div>
            <button
              className="pr-1 "
              onClick={() => handleRemoveFromCart(cartItem)}
            >
              -
            </button>
          </div>
          <div>
            <h3 className="text-sm">
              <div className="font-serif underline">Total Price</div>
              Kes: {cartItem.price * cartItem.cartQuantity}/=
            </h3>
          </div>
        </div>
      </div>
      <div className="h-0.5 font-bold bg-black"></div>
    </div>
  );
}

export default CartCard;
