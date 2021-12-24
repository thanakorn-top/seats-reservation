import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    reservationIsVisible: false,
    toggleText: "Show Reserve List",
    notification: null,
    reserveListIsVisible: false,
  },
  reducers: {
    toggleReservationFormVisible(state) {
      state.reservationIsVisible = !state.reservationIsVisible;
    },
    toggleReserveListIsVisible(state) {
      state.reserveListIsVisible = !state.reserveListIsVisible;
      if (state.reserveListIsVisible) {
        state.toggleText = "Show Restaurant";
      } else {
        state.toggleText = "Show Reserve List";
      }
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
