import React from "react";
import { Person, SearchRounded, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

const PhoneNavBar = () => {
  return (
    <div className="flex flex-row w-full bg-white border-2 border-blackdark z-[9999] fixed bottom-0 justify-around py-2">
      <div>
        <Link to="/">
          <Home />
        </Link>
      </div>
      <div>
        <Person />
      </div>
      <div>
        <SearchRounded />
      </div>
    </div>
  );
};

export default PhoneNavBar;
