import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/admin/products/createproduct");
  };
  return (
    <div className="flex flex-col font-serif">
      <div className="flex flex-row  md:mt-10  justify-between  ">
        <div>
          <h1 className="font-bold">Products</h1>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded   ">
          <button onClick={handleAddProduct} className=" hover:cursor-pointer ">
            Create 
          </button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
