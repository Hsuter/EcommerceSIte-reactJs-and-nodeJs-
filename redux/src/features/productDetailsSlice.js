import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  detailsItems: localStorage.getItem("detailsItems")
    ? JSON.parse(localStorage.getItem("detailsItems"))
    : [],
  detailsTotalsQuantity: 0,
  detailsTotalAmount: "sedrftyguhijok",
};

const productDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    viewDetails(state, action) {
      state.detailsItems = [];
      localStorage.setItem("detailsItems", JSON.stringify(state.detailsItems));
      console.log("action.payload", action.payload);
      state.detailsItems.push(action.payload);

      localStorage.setItem("detailsItems", JSON.stringify(state.detailsItems));
    },
  },
});

export const { viewDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
