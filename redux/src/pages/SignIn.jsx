import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadUser, loginUser } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const verify = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form>
                {/*Email*/}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />
                </div>

                {/*Password*/}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                </div>
                <div className="text-style: italic mb-4 font-bold ">
                  {auth.loginStatus === "rejected" ? (
                    <p className=" text-rose-900 ">
                      {auth.loginStatus ===
                        `"name" is not allowed to be empty` ||
                      `"email" is not allowed to be empty`
                        ? "Invalid credentials."
                        : null}
                    </p>
                  ) : null}
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white onchange:bg-blue-600 onchange:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      onChange={() => {}}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>

                {/*Submit*/}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={verify}
                >
                  Sign in
                </button>
                <div className="flex gap-2">
                  <p className="text-cyan-700 ">New to naxy brands?</p>
                  <Link to="/signup">
                    <button className="font-bold  font-style: italic text-cyan-700 ">
                      create account
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
