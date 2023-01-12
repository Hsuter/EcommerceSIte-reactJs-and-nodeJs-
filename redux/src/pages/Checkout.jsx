import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ArrowDropDown } from "@material-ui/icons";
import CheckoutCard from "../components/CheckoutCard";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const [phone, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setAmount(cart.cartTotalAmount);
  }, []);

  const payHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/token", {
        amount,
        phone,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <div className="flex md:flex-row flex-col">
      <div className="h-100 md:w-[40%] ">
        <div className="md:hidden  bg-black text-white flex p-2 " onClick={toggleMenu}>
          <p>Details</p>
          <ArrowDropDown />
        </div>

        {/* Products card*/}
        <div
          className={`menu flex flex-col pb-5 items-center h-[100%] bg-black text-white ${
            menu ? "visible" : "hidden"
          }  `}
        >
          <h1 className="mb-5">Products</h1>

          {cart.cartItems.map((cartItem, i) => (
            <CheckoutCard cartItem={cartItem} key={cartItem.id} i={i} />
          ))}

          <div>
            <p>
              Total Price: <span>Kes {cart.cartTotalAmount}/=</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-5 h-screen items-center justify-center z-10 ">
        <div className=" flex flex-col flex-wrap items-center justify-center ">
          <h3 className=" text-[30px] font-serif text-green-700">
            Lipa na M-Pesa
          </h3>

          <form className=" max-w-lg m-10 ">
            <div className="flex flex-wrap mb-6 ">
              <div className="w-[100%]">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-[100%]">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap  mb-6">
              <div className="w-full ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className="w-full appearance-none block w-30 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="grid-password"
                  placeholder="0712345678"
                />
              </div>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full "
                onClick={payHandler}
              >
                Pay {cart.cartTotalAmount} /=
              </button>
            </div>
            <div className="items-center indent-center">
              <p className="font-bold font-style: italic text-center">
                An M-pesa menu will be prompted on you phone, enter pin to
                proceed.Thank you.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
