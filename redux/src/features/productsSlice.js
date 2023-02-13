import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
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
  },
});

export default productsSlice.reducer;
