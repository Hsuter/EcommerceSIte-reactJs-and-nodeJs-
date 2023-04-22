import React from "react";
import { Link } from "react-router-dom";
import {
  MenuTwoTone,
  CloseTwoTone,
  HomeOutlined,
  AccountCircleOutlined,
  StoreOutlined,
  SearchOutlined,
  ArrowDropDown,
} from "@material-ui/icons";

import { useState } from "react";

const Menu = ({ scrollDirection }) => {
  const [menu, setMenu] = useState(false);
  const [kidsMenu, setKidsMenu] = useState(false);
  const [menMenu, setMenMenu] = useState(false);
  const [womMenu, setWomMenu] = useState(false);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  const toggleMenMenu = () => {
    if (menMenu == true) {
      setMenMenu(false);
    } else {
      setMenMenu(true);
      setWomMenu(false);
      setKidsMenu(false);
    }
  };
  const toggleWomMenu = () => {
    if (womMenu == true) {
      setWomMenu(false);
    } else {
      setWomMenu(true);
      setMenMenu(false);
      setKidsMenu(false);
    }
  };
  const toggleKidsMenu = () => {
    if (kidsMenu == true) {
      setKidsMenu(false);
    } else {
      setKidsMenu(true);
      setMenMenu(false);
      setWomMenu(false);
    }
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
          className={`bg-white md:hidden justify-center  h-[100vh] flex   ${
            menu ? "visible animate-slideleft" : "hidden animate-slideright"
          } `}
        >
          <div
            className={`w-full ${
              menu ? "visible animate-slideleft" : "hidden animate-slideright"
            } `}
          >
            <div className="w-full  border-2 shadow-lg border-black  ">
              <input
                placeholder=""
                className="border-2 shadow-lg w-[88%] h-10 mr-2"
              />

              <span>
                <SearchOutlined className="" />
              </span>
            </div>

            <ul className="flex md:flex-row flex-col justify-around md:my-2  font-serif cursor-pointer   text-black md:gap-0  w-full items-center ">
              <div className="flex flex-row bg-slate-200  w-full justify-center ">
                <div className="flex flex-row  py-4 ">
                  <h1 className="font-bold">MENU</h1>
                </div>
              </div>
              {/* Men*/}
              <div className="flex flex-col w-full">
                <div
                  className={`flex flex-row gap-2 w-full  border-2 shadow-lg h-10 items-center ${
                    menMenu ? "bg-slate-300" : null
                  }  `}
                >
                  <StoreOutlined />
                  <h2 onClick={toggleMenu} className="w-full">
                    Men
                  </h2>
                  <div
                    className={`border-x-2 px-2 cursor-pointer `}
                    onClick={toggleMenMenu}
                  >
                    <ArrowDropDown />
                  </div>
                </div>

                {/*Dropdown*/}
                <div
                  className={`flex flex-col   cursor-pointer ${
                    menMenu ? "visible " : "hidden "
                  }`}
                >
                  <ul className="" onClick={toggleMenu}>
                    <li className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full   hover:bg-slate-200 ">
                      <Link to="/Tshirts">Tshirts</Link>
                    </li>
                    <li>
                      <Link
                        to="/Hoodies"
                        className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full  hover:bg-slate-200  "
                      >
                        Hoodies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Caps"
                        className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full hover:bg-slate-200  "
                      >
                        Caps
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Women*/}
              <div className="flex flex-col w-full">
                <div
                  className={`flex flex-row gap-2 w-full  border-2 shadow-lg h-10 items-center ${
                    womMenu ? "bg-slate-300" : null
                  }  `}
                >
                  <StoreOutlined />
                  <h2 onClick={toggleMenu} className="w-full">
                    Women
                  </h2>
                  <div
                    className={`border-x-2 px-2 cursor-pointer `}
                    onClick={toggleWomMenu}
                  >
                    <ArrowDropDown />
                  </div>
                </div>

                {/*Dropdown*/}
                <div
                  className={`flex flex-col   cursor-pointer ${
                    womMenu ? "visible " : "hidden "
                  }`}
                >
                  <ul onClick={toggleMenu}>
                    <li className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full  hover:bg-slate-200 ">
                      <Link to="/Tshirts">Tshirts</Link>
                    </li>
                    <li>
                      <Link
                        to="/Hoodies"
                        className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full  hover:bg-slate-200  "
                      >
                        Hoodies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Caps"
                        className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full hover:bg-slate-200   "
                      >
                        Caps
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Kids*/}
              <div className="flex flex-col w-full">
                <div
                  className={`flex flex-row gap-2 w-full  border-2 shadow-lg h-10 items-center ${
                    kidsMenu ? "bg-slate-300" : null
                  }  `}
                >
                  <StoreOutlined />
                  <h2 onClick={toggleMenu} className="w-full ">
                    Kids
                  </h2>
                  <div
                    className={`border-x-2 px-2 cursor-pointer `}
                    onClick={toggleKidsMenu}
                  >
                    <ArrowDropDown />
                  </div>
                </div>

                {/*Dropdown*/}
                <div
                  className={`flex flex-col   cursor-pointer ${
                    kidsMenu ? "visible " : "hidden "
                  }`}
                >
                  <ul className=" " onClick={toggleMenu}>
                    <li className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full hover:bg-slate-200  ">
                      <Link to="/Tshirts">Tshirts</Link>
                    </li>
                    <li>
                      <Link
                        to="/Hoodies"
                        className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full hover:bg-slate-200   "
                      >
                        Hoodies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Caps"
                        className="flex flex-row gap-2 border-2 shadow-lg h-10 items-center w-full hover:bg-slate-200  "
                      >
                        Caps
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                className="flex flex-row gap-2 border-2 shadow-lg h-10 w-full items-center justify-center"
                to="/Account"
              >
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
