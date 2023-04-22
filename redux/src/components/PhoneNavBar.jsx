import React from "react";
import { Person, ShoppingBasket, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PhoneNavBar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="flex flex-row w-full bg-white border-2 border-blackdark z-[9999] fixed bottom-0 justify-around py-2">
      <div>
        <Link to="/">
          <Home />
        </Link>
      </div>
      <div>
        <Link to="/Account">
          <Person />
        </Link>
      </div>
      <div className="flex flex-row">
        <Link to="/Cart">
          <ShoppingBasket />
        </Link>
        <p className="flex items-center justify-center bg-black rounded-full text-white  px-[3px] text-[12px]">
          {cart.cartTotalsQuantity}
        </p>
      </div>
    </div>
  );
};

export default PhoneNavBar;
