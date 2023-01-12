import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import url from "./api";

const initialState = {
  firstName: "",
  secondName: "",
  phoneNumber: "",
  amountPaid: "",
  isLoading: "",
  payStatus: "",
  payError: "",
};


