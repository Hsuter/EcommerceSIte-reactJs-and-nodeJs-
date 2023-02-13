import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowBack, ShoppingCart } from "@material-ui/icons";
import CartCard from "../components/CartCard";
import { useDispatch } from "react-redux";
import { clearCart, getTotals } from "../features/cartSlice";
import PayButton from "../components/StripePayBtn";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <div></div>
      <h2 className="text-4xl font-serif my-5">Shopping Cart</h2>
      <div className="flex sm:flex-row flex-col w-screen sm:items-center xl:mx-20 mx-10 md:justify-around my-5">
        <h3 className="text-xl font-serif my-5">Products</h3>
      </div>
      {cart.cartItems.length === 0 ? (
        <>
          <div className="flex flex-col items-center">
            <p>Your cart is empty !!!</p>
            <Link to="/">
              <p className="text-4xl font-serif my-5 ">
                <ArrowBack />
                <span> Start Shopping</span>
              </p>
            </Link>
            <div>
              <ShoppingCart className="cart" size="lg" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className="h-0.5 font-bold bg-black"></div>

            {cart.cartItems.map((cartItem, i) => (
              <CartCard cartItem={cartItem} key={cartItem.id} i={i} />
            ))}
          </div>
          <div className="flex sm:flex-row flex-col justify-between w-full my-5 px-5 items-center font-serif">
            <button
              className="bg-transparent hover:bg-blue-500 text-red font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                handleClearCart();
              }}
            >
              Clear Cart
            </button>
            <div className="flex flex-col items-center ">
              <p className="my-5">
                Subtotal Ksh: <span>{cart.cartTotalAmount}</span>/=
              </p>
              <p className="text-[10px] text-red mb-5">
                Taxes and shipping calculated at checkout
              </p>
              {auth._id ? (
                <>
                  <p className="mb-1 text-style: underline">CECKOUT OPTIONS</p>

                  <Link to="/checkout">
                    <button className="w-36  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      M-PESA
                    </button>
                  </Link>
                  <p className="my-2">OR</p>
                  <Link to="">
                    <div className="w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded items-center justify-center ">
                      <PayButton cartItems={cart.cartItems} />
                    </div>
                  </Link>
                </>
              ) : (
                <Link to="/signin">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Login to Checkout
                  </button>
                </Link>
              )}

              <Link to="/">
                <p className="text-2xl font-serif my-5 ">
                  <ArrowBack />
                  <span> Continue Shopping</span>
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
