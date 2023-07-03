// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items = [...state.items, item]; // Create a new array with the updated items
      state.totalPrice = state.totalPrice + item.price;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
