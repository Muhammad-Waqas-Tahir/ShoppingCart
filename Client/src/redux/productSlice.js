import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  status: null,
};

export const FetchProduct = createAsyncThunk(
  "products/fetchproduct",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchProduct.pending]: (state) => {
      state.status = "pending";
    },
    [FetchProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.item = action.payload;
    },
    [FetchProduct.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
