import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemInChart = state.find((item) => item.id === action.payload.id);
      if (itemInChart) {
        itemInChart.qty += action.payload.qty;
      } else {
        state.push(action.payload);
      }
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

console.log("Store OnCreate: ", store.getState());

store.subscribe(() => {
  console.log("Store OnChange: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 10 }));
store.dispatch(cartSlice.actions.addToCart({ id: 5, qty: 15 }));
