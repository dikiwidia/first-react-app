import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: cartReducer,
});

console.log("Store OnCreate: ", store.getState());

store.subscribe(() => {
  console.log("Store OnChange: ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(addToCart({ id: 5, qty: 15 }));
