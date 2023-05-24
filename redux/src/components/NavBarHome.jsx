import React from "react";
import { ShoppingBasket, Person, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const NavBarHome = ({ scrollDirection }) => {
  const [searchBarStat, setSearchBarStat] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  {
    /* Search query */
  }

  const [searchQuery, setSearchQuery] = useState("");
  const {
    items: data,
    isLoading,
    error,
  } = useSelector((state) => state.products);

  const handeleSearch = () => {
    if (searchBarStat === false) {
      setSearchBarStat(true);
      const filteredData = data.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

      // call the filterData function
      navigate("/searchresults", { state: { filteredData } });
    } else {
      setSearchBarStat(false);
    }
  };

  {
    /**Search query*/
  }

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.warning("You've logged out", { position: "top-center" });
  };
  return (
    <div className="flex  flex-col xl:mb-4  mb-2 ">
      <div
        className={`flex flex-row ${
          scrollDirection ? "bg-black z-50" : "bg-white z-50"
        }   font-serif  items-center fixed  w-full  pr-5 `}
      >
        <div className="w-full  flex justify-between items-center mb-3 mt-2 ">
          <Link to="/">
            <h2
              className={`xl:text-3xl text-[15px]  font-bold  sm:ml-7 ml-[30px] md:w-full w-[80vw]
             ${scrollDirection ? "text-white" : "text-black"}`}
            >
              Naxy Brands
            </h2>
          </Link>

          <div className="flex-row md:flex hidden justify-center items-center">
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type here"
              className={`${
                searchBarStat
                  ? "shadow-sm shadow-white w-96 p-1 animate-slideleft"
                  : "hidden animate-slideright"
              } ${
                scrollDirection
                  ? "border-white border-2"
                  : "border-black border-2"
              }`}
            />
            <Search
              className={` ${scrollDirection ? "text-white" : "text-black"}`}
              onClick={handeleSearch}
            />
            <Link to="/Cart" className="">
              <div className="flex   items-center justify-center  mr-6 ml-4">
                <ShoppingBasket
                  className={` ${
                    scrollDirection ? "text-white" : "text-black"
                  }`}
                />
                <div
                  className={`rounded-full  ${
                    scrollDirection ? "text-black" : "text-black"
                  }  px-1 items-center justify-center text-sm bg-slate-300   `}
                >
                  <p className="items-center justify-center text-[10px]">
                    {cart.cartTotalsQuantity}
                  </p>
                </div>
              </div>
            </Link>
            <div className="md:hidden visible">
              {auth._id ? (
                <p
                  className={`font-serif text-[12px] ${
                    scrollDirection ? "text-white" : "text-black"
                  }`}
                >
                  {auth.name}
                </p>
              ) : (
                <p
                  className={`font-serif text-[12px] ${
                    scrollDirection ? "text-white" : "text-black"
                  }`}
                >
                  <Link to="/login">Login</Link>
                </p>
              )}
            </div>
          </div>
        </div>

        {auth._id ? (
          <div
            className={`flex flex-row  gap-5 w-40 visible ${
              scrollDirection ? "text-white" : "text-black"
            } text-[12px] 
            items-center `}
          >
            {auth.isAdmin ? (
              <Link to="/admin" className="md:flex hidden">
                Admin
              </Link>
            ) : null}

            <div className="  ">
              <p className="flex flex-col    ">
                <div className="md:flex hidden">
                  <Person className=" idden person" />
                </div>
                <p className="sm:flex flex text-white"> {auth.name} </p>
              </p>
            </div>
            <Link to="/signin">
              <div className="mr-5 md:flex hidden">
                <button className="" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </Link>
          </div>
        ) : (
          <div
            className={`md:flex flex-row  gap-5 w-40 md:visible hidden ${
              scrollDirection ? "text-white" : "text-black"
            } text-[12px]  `}
          >
            <Link to="/signin">
              <div>
                <button className="">Login</button>
              </div>
            </Link>
            <Link to="/signup">
              <div className="">Register</div>
            </Link>
          </div>
        )}
      </div>
      <div className="md:pt-16 pt-12 "></div>
    </div>
  );
};

export default NavBarHome;
