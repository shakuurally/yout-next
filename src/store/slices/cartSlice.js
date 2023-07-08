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
      const existingItem = state.items.find((Item) => Item.id == item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = existingItem.price * existingItem.quantity;
      } else {
        const newItem = { ...item, quantity: 1 };
        state.items.push(newItem);
        state.itemCount += 1;
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price,
        0
      );
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
          state.itemCount -= 1;
          state.totalPrice -= existingItem.price; // Subtract the price of the removed item from the total price
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
