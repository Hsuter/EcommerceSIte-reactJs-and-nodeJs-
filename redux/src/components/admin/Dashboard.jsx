import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth);

  if (!user.isAdmin)
    return (
      <h1 className="text-center text-2xl mt-10">
        You are not authorized to view this page
      </h1>
    );

  return (
    <div className="flex flex-row md:flex-nowrap flex-wrap text-center  justify-center">
      <div className=" font-serif">
        <h3 className=" md:mt-20 mt-5 mb-5  font-bold text-xl underline   ">
          Quick Links
        </h3>
        <div className="flex flex-col  text-gray-700 gap-3 text-[17px]">
          <NavLink
            to="/admin/products"
            className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
          >
            Products
          </NavLink>
          <NavLink
            to="/admin/summary"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Summary
          </NavLink>
          <div className="md:hidden block w-[80vw] border-2 text-black ml-2"></div>
        </div>
      </div>
      <div className="md:block hidden h-100 border-2 text-black ml-2"></div>

      <div className="mx-10 mt-10 w-[80vw] ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
