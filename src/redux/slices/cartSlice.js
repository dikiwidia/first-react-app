import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: JSON.parse(localStorage.getItem("cart")) || [] },
  reducers: {
    addToCart: (state, action) => {
      const itemInChart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInChart) {
        itemInChart.qty += action.payload.qty;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
