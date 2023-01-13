import React from "react";
import { useSelector } from "react-redux";
import MarqueeCard from "../components/MarqueeCard";

import ProductDetailsCard from "../components/ProductDetailsCard";

const ProductDetails = () => {
  const details = useSelector((state) => state.details);

  return (
    <div className=" justify-between flex flex-col mt-10 font-serif ">
      {details.detailsItems.map((detailsItem, i) => (
        <ProductDetailsCard
          detailsItem={detailsItem}
          key={detailsItem.id}
          i={i}
        />
      ))}

      <div className="flex items-center justify-center ">
        <MarqueeCard />
      </div>
    </div>
  );
};

export default ProductDetails;
