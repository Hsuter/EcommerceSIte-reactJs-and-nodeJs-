import React from "react";

const CheckoutCard = ({ cartItem, i }) => {
  return (
    <div className="flex flex-row gap-10  items-center mb-5 font-serif">
      <div className=" bg-white rounded-md shadow-md shadow-lime">
        <img className="w-[80px]" src={cartItem.image} alt="" />
      </div>
      <div className="flex flex-row text-[15px] gap-10 ">
        <p>
          Quantiy : <span>{cartItem.cartQuantity}</span>
        </p>

        <p>Total price: Kes: {cartItem.price * cartItem.cartQuantity}/=</p>
      </div>
    </div>
  );
};

export default CheckoutCard;
