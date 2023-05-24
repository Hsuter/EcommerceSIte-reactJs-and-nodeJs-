import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MenuTwoTone,
  CloseTwoTone,
  AccountCircleOutlined,
  StoreOutlined,
  SearchOutlined,
  ArrowDropDown,
  ArrowRight,
} from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Menu = ({ scrollDirection, setMenu, menu }) => {
  const navigate = useNavigate();
  const [kidsFMenu, setKidsFMenu] = useState(false);
  const [kidsTMenu, setKidsTMenu] = useState(false);
  const [kidsHMenu, setKidsHMenu] = useState(false);
  const [kidsCMenu, setKidsCMenu] = useState(false);
  const [kidsMenu, setKidsMenu] = useState(false);
  const [menMenu, setMenMenu] = useState(false);
  const [womMenu, setWomMenu] = useState(false);
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");

  const filters = { gender, category, age };

  {
    /* Set Main Filter functions gender and age*/
  }

  const setMen = () => {
    setGender("Men");
    setAge("Adult");
  };
  const setWom = () => {
    setGender("Women");
    setAge("Adult");
  };
  const setKids = () => {
    setGender("Both");
    setAge("Kids");
  };

  {
    /* Set Main Filter functions gender and age*/
  }

  {
    /* Set Kids Filter functions on categories*/
  }

  const setBoysT = () => {
    setGender("Both");
    setAge("Kids");
    setCategory("Tshirt");
  };
  const setGirlsT = () => {
    setGender("Both");
    setAge("Kids");
    setCategory("Tshirt");
  };
  const setBoysC = () => {
    setGender("Men");
    setAge("Kids");
    setCategory("Cap");
  };
  const setGirlsC = () => {
    setGender("Women");
    setAge("Kids");
    setCategory("Cap");
  };
  const setBoysH = () => {
    setGender("Men");
    setAge("Kids");
    setCategory("Hoodies");
  };
  const setGirlsH = () => {
    setGender("Women");
    setAge("Kids");
    setCategory("Hoodies");
  };
  const setGirlsF = () => {
    setGender("Women");
    setAge("Kids");
    setCategory("Footware");
  };
  const setBoysF = () => {
    setGender("Men");
    setAge("Kids");
    setCategory("Footware");
  };

  {
    /* Set Kids Filter functions on categories*/
  }

  {
    /* Set Filter functions on all categories*/
  }

  const setMenTshirt = () => {
    setGender("Men");
    setAge("Adult");
    setCategory("Tshirt");
  };

  const setMenHoodies = () => {
    setGender("Men");
    setAge("Adult");
    setCategory("Hoodies");
  };
  const setMenCaps = () => {
    setGender("Men");
    setAge("Adult");
    setCategory("Cap");
  };

  const setWomenCaps = () => {
    setGender("Women");
    setAge("Adult");
    setCategory("Cap");
  };
  const setWomenHoodies = () => {
    setGender("Women");
    setAge("Adult");
    setCategory("Hoodies");
  };
  const setWomenTshirts = () => {
    setGender("Women");
    setAge("Adult");
    setCategory("Tshirt");
  };

  const setKidsCaps = () => {
    setGender("Both");
    setAge("Kids");
    setCategory("Cap");
  };
  const setKidsHoodies = () => {
    setGender("Both");
    setAge("Kids");
    setCategory("Hoodies");
  };

  const setKidsTshirts = () => {
    setGender("Both");
    setAge("Kids");
    setCategory("Tshirt");
  };
  const setKidsFootware = () => {
    setGender("Both");
    setAge("Kids");
    setCategory("Footware");
  };
  const setMensFootware = () => {
    setGender("Men");
    setAge("Adult");
    setCategory("Footware");
  };
  const setWomenFootware = () => {
    setGender("Women");
    setAge("Adult");
    setCategory("Footware");
  };

  {
    /* Set Filter functions on all categories*/
  }

  {
    /* Toggle main menu*/
  }
  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  {
    /* Toggle main menu*/
  }

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
    const filteredData = data.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    // call the filterData function
    navigate("/searchresults", { state: { filteredData } });
  };

  {
    /**Search query*/
  }

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  {
    /**Gender and age Menu*/
  }

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

  {
    /**Gender and age Menu*/
  }

  {
    /**Kids category Menu*/
  }
  const toggleKidsTMenu = () => {
    if (kidsTMenu == true) {
      setKidsTMenu(false);
    } else {
      setKidsTMenu(true);
      setKidsHMenu(false);
      setKidsCMenu(false);
    }
  };
  const toggleKidsHMenu = () => {
    if (kidsHMenu == true) {
      setKidsHMenu(false);
    } else {
      setKidsHMenu(true);
      setKidsTMenu(false);
      setKidsCMenu(false);
    }
  };
  const toggleKidsCMenu = () => {
    if (kidsCMenu == true) {
      setKidsCMenu(false);
    } else {
      setKidsCMenu(true);
      setKidsHMenu(false);
      setKidsTMenu(false);
    }
  };

  const toggleKidsFMenu = () => {
    if (kidsFMenu == true) {
      setKidsFMenu(false);
    } else {
      setKidsFMenu(true);
      setKidsHMenu(false);
      setKidsTMenu(false);
    }
  };

  {
    /**Kids category Menu*/
  }

  useEffect(() => {
    if (age == "" && gender == "" && category == "") {
      null;
    } else {
      navigate("/FilteredResults", { state: { filters } });
      if (menu == true) {
        setMenu(false);
      }
    }
  }, [age, gender, category]);

  return (
    <div
      className={`flex flex-col fixed mt-[-25px]  md:w-full w-full menu bg-white ${
        scrollDirection ? "md:bg-transparent " : "bg-white"
      }`}
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
            <div className="animate-slowfade   " onClick={toggleMenu}>
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
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=""
                className="border-2 shadow-lg w-[88%] h-10 mr-2"
              />

              <span>
                <SearchOutlined
                  className=""
                  onClick={() => {
                    handeleSearch();
                    toggleMenu();
                  }}
                />
              </span>
            </div>

            <ul className="flex md:flex-row flex-col justify-around md:my-2  font-serif cursor-pointer   md:gap-0  w-full items-center ">
              <div className="flex flex-row bg-slate-200  w-full justify-center ">
                <div className="flex flex-row  py-4 ">
                  <h1 className="font-bold">MENU</h1>
                </div>
              </div>
              {/* Men*/}
              <div className="flex flex-col w-full">
                <div
                  className={`flex flex-row gap-2 w-full  border-2  h-10 items-center text-blackdark ${
                    menMenu ? "bg-slate-300" : null
                  }  `}
                >
                  <StoreOutlined />
                  <h2 className="w-full" onClick={setMen}>
                    Men
                  </h2>
                  <div
                    className={`border-x-2 px-2 cursor-pointer ${
                      menMenu ? "bg-slate-500 " : null
                    }  `}
                    onClick={toggleMenMenu}
                  >
                    {menMenu ? <ArrowDropDown /> : <ArrowRight />}
                  </div>
                </div>

                {/*Dropdown*/}
                <div
                  className={`flex flex-col   cursor-pointer ${
                    menMenu ? "visible " : "hidden "
                  }`}
                >
                  <ul className="">
                    <li className="flex flex-row gap-2 border-2  h-10 items-center w-full   hover:bg-slate-200 ">
                      <div onClick={setMenTshirt}>Tshirts</div>
                    </li>
                    <li>
                      <div
                        className="flex flex-row gap-2 border-2  h-10 items-center w-full  hover:bg-slate-200  "
                        onClick={setMenHoodies}
                      >
                        Hoodies
                      </div>
                    </li>
                    <li>
                      <div
                        className="flex flex-row gap-2 border-2  h-10 items-center w-full hover:bg-slate-200  "
                        onClick={setMenCaps}
                      >
                        Caps
                      </div>
                    </li>
                    <li>
                      <div
                        className="flex flex-row gap-2 border-2  h-10 items-center w-full hover:bg-slate-200  "
                        onClick={setMensFootware}
                      >
                        Footware
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Women*/}
              <div className="flex flex-col w-full">
                <div
                  className={`flex flex-row gap-2 w-full  border-2  h-10 items-center text-blackdark ${
                    womMenu ? "bg-slate-300" : null
                  }  `}
                >
                  <StoreOutlined />
                  <h2 onClick={setWom} className="w-full">
                    Women
                  </h2>
                  <div
                    className={`border-x-2 px-2 cursor-pointer ${
                      womMenu ? "bg-slate-500 " : null
                    }  `}
                    onClick={toggleWomMenu}
                  >
                    {womMenu ? <ArrowDropDown /> : <ArrowRight />}
                  </div>
                </div>

                {/*Dropdown*/}
                <div
                  className={`flex flex-col   cursor-pointer ${
                    womMenu ? "visible " : "hidden "
                  }`}
                >
                  <ul>
                    <li className="flex flex-row gap-2 border-2  h-10 items-center w-full  hover:bg-slate-200 ">
                      <div onClick={setWomenTshirts}>Tshirts</div>
                    </li>
                    <li>
                      <div
                        className="flex flex-row gap-2 border-2  h-10 items-center w-full  hover:bg-slate-200  "
                        onClick={setWomenHoodies}
                      >
                        Hoodies
                      </div>
                    </li>
                    <li>
                      <div
                        className="flex flex-row gap-2 border-2  h-10 items-center w-full hover:bg-slate-200   "
                        onClick={setWomenCaps}
                      >
                        Caps
                      </div>
                    </li>
                    <li>
                      <div
                        className="flex flex-row gap-2 border-2  h-10 items-center w-full hover:bg-slate-200  "
                        onClick={setWomenFootware}
                      >
                        Footware
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Kids*/}
              <div className="flex flex-col w-full">
                <div
                  className={`flex flex-row gap-2 w-full  border-2  h-10 items-center  text-blackdark   ${
                    kidsMenu ? "bg-slate-300" : null
                  }`}
                >
                  <StoreOutlined />
                  <h2 onClick={setKids} className="w-full ">
                    Kids
                  </h2>
                  <div
                    className={`border-x-2 px-2 cursor-pointer ${
                      kidsMenu ? "bg-slate-500 " : null
                    } `}
                    onClick={toggleKidsMenu}
                  >
                    {kidsMenu ? <ArrowDropDown /> : <ArrowRight />}
                  </div>
                </div>

                {/*Dropdown*/}
                <div
                  className={`flex flex-col   cursor-pointer ${
                    kidsMenu ? "visible " : "hidden "
                  }`}
                >
                  <ul className=" flex flex-col">
                    <li className="flex flex-col gap-2 border-2  items-center w-full hover:bg-slate-200   ">
                      <div className="w-full ">
                        <div className="flex flex-row w-full ">
                          <div className="w-full" onClick={setKidsTshirts}>
                            Tshirts
                          </div>
                          <div
                            className={`border-x-2 px-2 cursor-pointer ${
                              kidsTMenu ? "bg-slate-500 " : null
                            }}`}
                            onClick={toggleKidsTMenu}
                          >
                            {kidsTMenu ? <ArrowDropDown /> : <ArrowRight />}
                          </div>
                        </div>
                        <div
                          className={`${kidsTMenu ? "flex w-full" : "hidden"}`}
                        >
                          <ul className="flex flex-col w-full border-2 text-slate-600">
                            <li
                              className="border-2  w-full py-1"
                              onClick={setBoysT}
                            >
                              Boys
                            </li>
                            <li
                              className="border-2  w-full py-1"
                              onClick={setGirlsT}
                            >
                              Girls
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-2 border-2  items-center w-full hover:bg-slate-200   ">
                      <div className="w-full ">
                        <div className="flex flex-row w-full ">
                          <div onClick={setKidsHoodies} className="w-full">
                            Hoodies
                          </div>
                          <div
                            className={`border-x-2 px-2 cursor-pointer ${
                              kidsHMenu ? "bg-slate-500 " : null
                            }}`}
                            onClick={toggleKidsHMenu}
                          >
                            {kidsHMenu ? <ArrowDropDown /> : <ArrowRight />}
                          </div>
                        </div>
                        <div
                          className={`${kidsHMenu ? "flex w-full" : "hidden"}`}
                        >
                          <ul className="flex flex-col w-full border-2 text-slate-600">
                            <li
                              className="border-2  w-full py-1"
                              onClick={setBoysH}
                            >
                              Boys
                            </li>
                            <li
                              className="border-2 w-full py-1"
                              onClick={setGirlsH}
                            >
                              Girls
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-2 border-2  items-center w-full  hover:bg-slate-200   ">
                      <div className="w-full ">
                        <div className="flex flex-row w-full ">
                          <div onClick={setKidsCaps} className="w-full">
                            Caps
                          </div>
                          <div
                            className={`border-x-2 px-2 cursor-pointer ${
                              kidsCMenu ? "bg-slate-500 " : null
                            }}`}
                            onClick={toggleKidsCMenu}
                          >
                            {kidsCMenu ? <ArrowDropDown /> : <ArrowRight />}
                          </div>
                        </div>
                        <div
                          className={`${
                            kidsCMenu
                              ? "flex flex-col w-full border-y-2"
                              : "hidden"
                          }`}
                        >
                          <ul className="flex flex-col w-full text-slate-600 ">
                            <li className="border-2 py-1 " onClick={setBoysC}>
                              Boys
                            </li>
                            <li className="border-2 py-1" onClick={setGirlsC}>
                              Girls
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-2 border-2  items-center w-full hover:bg-slate-200   ">
                      <div className="w-full ">
                        <div className="flex flex-row w-full ">
                          <div onClick={setKidsFootware} className="w-full">
                            Footware
                          </div>
                          <div
                            className={`border-x-2 px-2 cursor-pointer ${
                              kidsFMenu ? "bg-slate-500 " : null
                            }}`}
                            onClick={toggleKidsFMenu}
                          >
                            {kidsFMenu ? <ArrowDropDown /> : <ArrowRight />}
                          </div>
                        </div>
                        <div
                          className={`${kidsFMenu ? "flex w-full" : "hidden"}`}
                        >
                          <ul className="flex flex-col w-full border-2 text-slate-600">
                            <li
                              className="border-2  w-full py-1"
                              onClick={setBoysF}
                            >
                              Boys
                            </li>
                            <li
                              className="border-2 w-full py-1"
                              onClick={setGirlsF}
                            >
                              Girls
                            </li>
                          </ul>
                        </div>
                      </div>
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

      {/* Start of desktop Menu */}

      <div
        className={`max-md:hidden mt-10 flex justify-center ${
          scrollDirection ? "bg-transparent" : "bg-white"
        } `}
      >
        <div className=" ">
          <ul
            className={`flex md:flex-row flex-col  md:my-2 font-serif cursor-pointer gap-8  ${
              scrollDirection ? "text-white" : "text-blackdark"
            }`}
          >
            <Link to="/">
              <p>Home</p>
            </Link>
            <div>
              <div
                className={`flex flex-col  `}
                onMouseEnter={toggleMenMenu}
                onMouseLeave={toggleMenMenu}
              >
                <p>Men</p>
                <div className="">
                  <ul
                    className={`${menMenu ? "flex flex-col gap-3" : "hidden"}`}
                  >
                    <h1 className="font-bold underline text-[15px]">
                      Mens Clothing
                    </h1>
                    <li onClick={setMenTshirt} className="hover:text-blue-600">
                      Tshirts
                    </li>
                    <li onClick={setMenHoodies} className="hover:text-blue-600">
                      Hoodies
                    </li>
                    <li onClick={setMenCaps} className="hover:text-blue-600">
                      Caps
                    </li>
                    <h1 className="font-bold underline text-[15px]">
                      Mens Footware
                    </h1>
                    <li
                      className="hover:text-blue-600"
                      onClick={setMensFootware}
                    >
                      Footware
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex flex-col  `}
                onMouseEnter={toggleWomMenu}
                onMouseLeave={toggleWomMenu}
              >
                <p>Women</p>
                <div className="">
                  <ul
                    className={`${womMenu ? "flex flex-col gap-3" : "hidden"}`}
                  >
                    <h1 className="font-bold underline text-[15px]">
                      Womens Clothing
                    </h1>
                    <li
                      onClick={setWomenTshirts}
                      className="hover:text-blue-600"
                    >
                      Tshirts
                    </li>
                    <li
                      onClick={setWomenHoodies}
                      className="hover:text-blue-600"
                    >
                      Hoodies
                    </li>
                    <li onClick={setWomenCaps} className="hover:text-blue-600">
                      Caps
                    </li>
                    <h1 className="font-bold underline text-[15px]">
                      Womens Footware
                    </h1>
                    <li
                      className="hover:text-blue-600"
                      onClick={setWomenFootware}
                    >
                      Footware
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex flex-col  `}
                onMouseEnter={toggleKidsMenu}
                onMouseLeave={toggleKidsMenu}
              >
                <p>Kids</p>
                <div className="">
                  <ul
                    className={`${kidsMenu ? "flex flex-col gap-3" : "hidden"}`}
                  >
                    <h1 className="font-bold underline text-[15px]">
                      Kids Clothing
                    </h1>
                    <p className="font-bold underline text-[10px]">
                      Boys Clothing
                    </p>
                    <li onClick={setBoysT} className="hover:text-blue-600">
                      Boys Tshirts
                    </li>
                    <li onClick={setBoysH} className="hover:text-blue-600">
                      Boys Hoodies
                    </li>
                    <li onClick={setBoysC} className="hover:text-blue-600">
                      Boys Caps
                    </li>
                    <li className="hover:text-blue-600" onClick={setBoysF}>
                      Boys Footware
                    </li>
                    <p className="font-bold underline text-[10px]">
                      Girls Clothing
                    </p>
                    <li onClick={setGirlsT} className="hover:text-blue-600">
                      Girls Tshirts
                    </li>
                    <li onClick={setGirlsH} className="hover:text-blue-600">
                      Girls Hoodies
                    </li>
                    <li onClick={setGirlsC} className="hover:text-blue-600">
                      Girls Caps
                    </li>
                    <li className="hover:text-blue-600" onClick={setGirlsF}>
                      Girls Footware
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Link to="/Account">Account</Link>
            </div>
          </ul>
        </div>
      </div>

      <div className="bg-slate-200 w-full text-[1px]  md:block hidden">.</div>
    </div>
  );
};

export default Menu;
