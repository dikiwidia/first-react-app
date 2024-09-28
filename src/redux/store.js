import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({ reducer: { cart: cartReducer } });

console.log("Store OnCreate: ", store.getState());

store.subscribe(() => {
  console.log("Store OnChange: ", store.getState());
});

export default store;
