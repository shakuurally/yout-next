// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    itemCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items = [...state.items, item];
      state.totalPrice += item.price;
      state.itemCount += 1; // Increase the item count by 1
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
