import React from "react";
import { useSelector } from "react-redux";
import { AccountCircleRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Account = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.warning("You've logged out", { position: "top-center" });
  };

  return (
    <div className="font-serif flex flex-col items-center mt-20 h-[100vh]">
      <h1 className="text-2xl font-bold">My Account</h1>
      {auth._id ? (
        <>
          <div className="flex w-full items-center justify-center   ">
            <AccountCircleRounded className="icon" />
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-[100vw] ">
              <p className="bg-black h-[1px] w-[100vw]"></p>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <LocalShippingIcon />
              <p>Orders</p>
            </div>
            <div className="w-[100vw] ">
              <p className="bg-black  h-[0.5px] w-[100vw]"></p>
            </div>

            <div className="flex flex-row gap-2 cursor-pointer">
              <PasswordIcon /> <p>Change password</p>
            </div>
            <div className="w-[100vw] ">
              <p className="bg-black h-[1px] w-[100vw]"></p>
            </div>

            <div className="flex flex-row gap-2 cursor-pointer">
              <LogoutIcon /> <p onClick={handleLogout}>Logout</p>
            </div>
            <div className="w-[100vw] ">
              <p className="bg-black bars h-[1px] w-[100vw]"></p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full items-center justify-center   ">
            <AccountCircleRounded className="icon" />
          </div>
          <Link to="/Signin">
            <p className="cursor cursor-pointer hover:text-blue-600">
              Login to access your account
            </p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Account;
