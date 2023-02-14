import React from "react";
import { Link } from "react-router-dom";
import { MenuTwoTone, CloseTwoTone } from "@material-ui/icons";

import { useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
    console.log(menu);
  };

  return (
    <div className="flex flex-col fixed  md:w-full w-[100px] bg-slate-900 text-white ">
      <div className=" mt-[-35.9px] ">
        <div className="flex md:hidden mb-3 ">
          {menu ? (
            <div className="animate-slowfade " onClick={toggleMenu}>
              <CloseTwoTone />
            </div>
          ) : (
            <div className="animate-slowfade " onClick={toggleMenu}>
              <MenuTwoTone />
            </div>
          )}
        </div>
        <div className="md:hidden text-center">
          <div
            className={`${
              menu ? "visible animate-slidedown" : "hidden animate-slideup"
            } `}
          >
            <ul className="flex md:flex-row flex-col justify-around md:my-2 font-serif cursor-pointer ">
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
              <Link>
                <li>My Orders</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-md:hidden mt-10 ">
        <div className="">
          <ul className="flex md:flex-row flex-col justify-around md:my-2 font-serif cursor-pointer ">
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
            <Link>
              <li>My Orders</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
