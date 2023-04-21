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

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const windowSize = window.innerWidth;
    setPrevScrollPosition(scrollPosition);
    setScrollPosition(position);
    setWindowSize(windowSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

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
              <Menu />
              <Tshirts />
            </>
          }
        />
        <Route
          path="/Hoodies"
          element={
            <>
              <NavBarOther />
              <Menu />
              <Hoodies />
            </>
          }
        />
        <Route
          path="/Caps"
          element={
            <>
              <NavBarOther />
              <Menu />
              <Caps />
            </>
          }
        />
        <Route
          path="/productdetails"
          element={
            <>
              <NavBarOther />
              <Menu />
              <ProductDetails />
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
              <Menu />
              <Checkout />
            </>
          }
        />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/cart"
          element={
            <>
              <NavBarOther />
              <Menu />
              <Cart />
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <>
              <NavBarOther />
              <Menu />
              <Dashboard />
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
              <Menu scrollDirection={scrollDirection} />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
