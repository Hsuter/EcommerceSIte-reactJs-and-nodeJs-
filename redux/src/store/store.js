import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "../features/productsSlice";
import { productsApi } from "../features/productsApi";
import cartReducer, { addToCart, getTotals } from "../features/cartSlice";
import authReducer, { loadUser, logoutUser } from "../features/authSlice";
import productDetailsReducer, {
  viewDetails,
} from "../features/productDetailsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    details: productDetailsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));

