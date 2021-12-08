import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer, { FetchProduct } from "./productSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.dispatch(FetchProduct());
