import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./ui-slice"
import reservationSlice from "./reservation-slice"

const store = configureStore({
    reducer: { ui: uiSlice, reservation: reservationSlice },
})

export default store
