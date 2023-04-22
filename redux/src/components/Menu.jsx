import React from "react";
import { Link } from "react-router-dom";
import {
  MenuTwoTone,
  CloseTwoTone,
  HomeOutlined,
  AccountCircleOutlined,
  StoreOutlined,
} from "@material-ui/icons";

import { useState } from "react";

const Menu = ({ scrollDirection }) => {
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
    console.log(menu);
  };

  return (
    <div
      className={`flex flex-col fixed md:mt-0 mt-[-25px]  md:w-full w-full z-[12]   ${
        scrollDirection ? "md:bg-transparent " : "bg-white"
      }    `}
      onClick={handleScroll}
    >
      <div className="bg-slate-100 w-full h-[1px] md:block hidden"></div>
      <div className=" mt-[-26px] ">
        <div
          className={`flex md:hidden mb-2   ${
            scrollDirection ? "text-white" : "text-black"
          }  `}
        >
          {menu ? (
            <div className="animate-slowfade " onClick={toggleMenu}>
              <CloseTwoTone />
            </div>
          ) : (
            <div className="animate-slowfade  " onClick={toggleMenu}>
              <MenuTwoTone />
            </div>
          )}
        </div>
        <div
          className={`bg-white md:hidden  h-[100vh] flex   ${
            menu ? "visible animate-slideleft" : "hidden animate-slideright"
          } `}
        >
          <div
            className={`${
              menu ? "visible animate-slideleft" : "hidden animate-slideright"
            } `}
          >
            <ul className="flex md:flex-row flex-col justify-around md:my-2 mt-5 font-serif cursor-pointer ml-6  text-black md:gap-0 gap-20">
              <Link to="/" className="flex flex-row gap-2">
                <HomeOutlined />
                <li onClick={toggleMenu}>Home</li>
              </Link>
              <Link to="/Tshirts" className="flex flex-row gap-2">
                <StoreOutlined />
                <li onClick={toggleMenu}>Tshirts</li>
              </Link>
              <Link to="/Caps" className="flex flex-row gap-2">
                <StoreOutlined />
                <li onClick={toggleMenu}>Caps</li>
              </Link>
              <Link to="/Hoodies" className="flex flex-row gap-2">
                <StoreOutlined />
                <li onClick={toggleMenu}>Hoodies</li>
              </Link>
              <Link className="flex flex-row gap-2" to="/Account">
                <AccountCircleOutlined />
                <li onClick={toggleMenu}>Account</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-md:hidden mt-10 flex justify-center ">
        <div className=" ">
          <ul
            className={`flex md:flex-row flex-col  md:my-2 font-serif cursor-pointer gap-8  ${
              scrollDirection ? "text-white" : "text-black"
            }`}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Tshirts">
              <li>Tshirts</li>
            </Link>
            <Link to="/Caps">
              <li>Caps</li>
            </Link>
            <Link to="/Hoodies">
              <li>Hoodies</li>
            </Link>
            <Link to="/Account">
              <li>Account</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="bg-slate-200 w-full text-[1px]  md:block hidden">.</div>
    </div>
  );
};

export default Menu;
