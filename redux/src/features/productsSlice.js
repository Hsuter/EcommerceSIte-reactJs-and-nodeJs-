import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import url from "./api";

const initialState = {
  items: [],
  status: null,
  error: null,
  createStatus: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:4000");
      console.log("res", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue("An error occured");
    }
  }
);

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/products",
        values
      );
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      toast.error(error.response?.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      //immer(mutataion)
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "Success";
      state.items = action.payload;
      console.log("state", state.items);
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "Error";
      state.error = action.payload;
    },
    [productsCreate.pending]: (state, action) => {
      //immer(mutataion)
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.createStatus = "Success";
      state.items = [...state.items, action.payload];
      console.log("state", state.items);
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "Error";
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
