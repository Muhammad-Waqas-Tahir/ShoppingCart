import { configureStore } from "@reduxjs/toolkit";
import productReducer, { FetchProduct } from "./productSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.dispatch(FetchProduct());
