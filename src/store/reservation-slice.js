import { createSlice } from "@reduxjs/toolkit";

const reservSlice = createSlice({
  name: "reservation",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    reserve: {},
    reserveList: [],
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemTocart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    clearItemFromCart(state, action) {
      state.changed = true;
      state.totalQuantity = 0;
      state.items = [];
    },
    addReservationSeats(state, action) {
      console.log("reservActions state",state)
      const newItem = action.payload;
      state.changed = true;
      state.reserve = {
        id: newItem.id,
        name: newItem.title,
      };
    },
    addReservationList(state, action) {
      const newItem = action.payload;
      state.reserveList.push({
        restaurantName: newItem.restaurantName,
        customerName: newItem.customerName,
        numberOfCustomer: newItem.numberOfCustomer,
        bookingDate: newItem.bookingDate,
        time: newItem.time,
      });
    },
  },
});

export const reservActions = reservSlice.actions;
export default reservSlice.reducer;
