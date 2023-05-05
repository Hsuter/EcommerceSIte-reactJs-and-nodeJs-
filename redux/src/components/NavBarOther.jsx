import React from "react";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { Person } from "@material-ui/icons";

const NavBarHome = ({ scrollDirection }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const [searchBarStat, setSearchBarStat] = useState(false);

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
        console.log(searchQuery);
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      // call the filterData function
      navigate("/searchresults", { state: { filteredData } });
    } else {
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
    <div className="flex flex-col mb-2 ">
      <div
        className={`flex flex-row ${
          scrollDirection ? "bg-white z-50" : "bg-white z-50 "
        }   font-serif  items-center fixed  w-full  pr-5  `}
      >
        <div className="w-full  flex justify-between items-center mb-3 mt-2   ">
          <Link to="/">
            <h2
              className={`xl:text-3xl text-[15px]  font-bold  md:ml-7 ml-[30px]
             ${scrollDirection ? "text-black" : "text-black"}`}
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
                  ? "shadow-sm shadow-white w-96 p-1 animate-slideleft border-2 border-black "
                  : "hidden animate-slideright"
              } `}
            />
            <Search
              className={`mr-4 ${
                scrollDirection ? "text-white" : "text-black"
              }`}
              onClick={handeleSearch}
            />
            <Link to="/Cart" className="md:block hidden">
              <div className="flex   items-center justify-center mr-4">
                <ShoppingBasket
                  className={` ${
                    scrollDirection ? "text-white" : "text-black"
                  }`}
                />
                <div
                  className={` rounded-full  ${
                    scrollDirection ? "text-black" : "text-black"
                  }  items-center justify-center text-sm bg-slate-300 px-1`}
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
              scrollDirection ? "text-black" : "text-black"
            } text-[12px] 
            items-center `}
          >
            {auth.isAdmin ? (
              <Link to="/admin" className="md:flex hidden">
                Admin
              </Link>
            ) : null}

            <div>
              <p className="flex flex-col items-center ">
                <Person className="person" />
                <p className="sm:flex hidden"> {auth.name}</p>
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
              scrollDirection ? "text-black" : "text-black"
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
