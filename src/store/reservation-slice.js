import { createSlice } from "@reduxjs/toolkit"

const reservSlice = createSlice({
    name: "reservation",
    initialState: {
        changed: false,
        reserve: {},
        reserveList: [],
    },
    reducers: {
        replaceReservationList(state, action) {
            state.reserveList = action.payload
            // state.reserveList = action.payload;
        },
        selectRestaurant(state, action) {
            const newItem = action.payload
            state.reserve = {
                id: newItem.id,
                name: newItem.title,
            }
        },
        addReservationList(state, action) {
            console.log(state)
            console.log(state.reserveList)
            state.changed = true
            const newItem = action.payload
            state.reserveList.push({
                id: newItem.id,
                restaurantName: newItem.restaurantName,
                customerName: newItem.customerName,
                numberOfCustomer: newItem.numberOfCustomer,
                bookingDate: newItem.bookingDate,
                time: newItem.time,
            })
        },
    },
})

export const reservActions = reservSlice.actions
export default reservSlice.reducer
