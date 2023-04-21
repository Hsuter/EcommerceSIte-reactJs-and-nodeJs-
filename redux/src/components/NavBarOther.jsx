import React from "react";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";

const NavBarHome = ({ scrollDirection }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.warning("You've logged out", { position: "top-center" });
  };
  return (
    <div className="flex flex-col mb-2 ">
      <div
        className={`flex flex-row ${
          scrollDirection ? "bg-white" : "bg-white"
        }   font-serif  items-center fixed  w-full  pr-5 z-[12]  `}
      >
        <div className="w-full  flex justify-between items-center mb-3 mt-2 ">
          <Link to="/">
            <h2
              className={`sm:text-3xl  font-bold  ml-7 
             ${scrollDirection ? "text-black" : "text-black"}`}
            >
              Naxy Brands
            </h2>
          </Link>
          <div>
            <Link to="/Cart" className="md:block hidden">
              <div className="flex mr-4 items-center justify-center">
                <ShoppingBasket
                  className={` ${
                    scrollDirection ? "text-black" : "text-black"
                  }`}
                />
                <div
                  className={`md:text-[16px] text-[12px] rounded-full  ${
                    scrollDirection ? "text-black" : "text-black"
                  } md:p-2 px-2 items-center justify-center text-sm bg-slate-300 m-2 `}
                >
                  <p className="items-center justify-center">
                    {cart.cartTotalsQuantity}
                  </p>
                </div>
              </div>
            </Link>
            <div>
              <p
                className={`font-serif text-[12px] ${
                  scrollDirection ? "text-white" : "text-black"
                }`}
              >
                Welcome {auth.name}
              </p>
            </div>
          </div>
        </div>

        {auth._id ? (
          <div
            className={`md:flex flex-row  gap-5 w-40 md.visible hidden ${
              scrollDirection ? "text-black" : "text-black"
            } text-[12px] 
            items-center `}
          >
            {auth.isAdmin ? <Link to="/admin">Admin</Link> : null}

            <div>
              <p className="">Welcome {auth.name}</p>
            </div>
            <Link to="signin">
              <div className="mr-5">
                <button className="" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row  gap-5 w-40 text-black text-[12px]  ">
            <Link to="signin">
              <div>
                <button className="">Login</button>
              </div>
            </Link>
            <Link to="/signup">
              <div className="text-black">Register</div>
            </Link>
          </div>
        )}
      </div>
      <div className="md:pt-16 pt-12 "></div>
    </div>
  );
};

export default NavBarHome;
