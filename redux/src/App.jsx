import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";
import Tshirts from "./pages/Tshirts";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="App flex-1   overflow-x-hidden hide-scrollbar  flex-col-reverse ">
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/tshirt" element={<Tshirts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
