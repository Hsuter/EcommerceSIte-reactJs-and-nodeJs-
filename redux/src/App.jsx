import "./App.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import NavBarHome from "./components/NavBarHome";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";
import Tshirts from "./pages/Tshirts";
import Hoodies from "./pages/Hoodies";
import Caps from "./pages/Caps";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Menu from "./components/Menu";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import NavBarOther from "./components/NavBarOther";
import PhoneNavBar from "./components/PhoneNavBar";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import FilteredProducts from "./pages/FilteredProducts";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setPrevScrollPosition(scrollPosition);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const windowSize = window.innerWidth;
    setWindowSize(windowSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, prevScrollPosition, windowSize]);

  const scrollDirection =
    scrollPosition > prevScrollPosition && scrollPosition > 700
      ? false
      : scrollPosition < prevScrollPosition && scrollPosition > 700
      ? false
      : scrollPosition > prevScrollPosition &&
        scrollPosition >= 230 &&
        windowSize < 1200
      ? false
      : true;

  return (
    <div
      className={`App flex-1   overflow-x-hidden hide-scrollbar  flex-col-reverse 
      `}
    >
      <ToastContainer />
      <Routes>
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route
          path="/Tshirts"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Tshirts />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/SearchResults"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <SearchResults />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/FilteredResults"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <FilteredProducts />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/Account"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Account />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/Hoodies"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Hoodies />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/Caps"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Caps />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/productdetails"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <ProductDetails />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <NavBarOther />

              <SignUp />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <NavBarOther />

              <SignIn />
            </>
          }
        />
        <Route path="/tshirt" element={<Tshirts />} />
        <Route
          path="/checkout"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Checkout />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/cart"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Cart />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <>
              <NavBarOther />
              <Menu menu={menu} setMenu={setMenu} />
              <Dashboard />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        >
          <Route path="products" element={<Products />}>
            <Route path="createproduct" element={<CreateProduct />} />
          </Route>
          <Route path="summary" element={<Summary />} />
        </Route>
        <Route
          path="/"
          element={
            <>
              <NavBarHome scrollDirection={scrollDirection} />
              <Menu
                scrollDirection={scrollDirection}
                menu={menu}
                setMenu={setMenu}
              />
              <Home />
              {windowSize < 768 ? (
                <PhoneNavBar menu={menu} setMenu={setMenu} />
              ) : null}
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
