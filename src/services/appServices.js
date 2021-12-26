import { DUMMY_RESTAURANT } from "../constants/Restaurant"

export function checkAvailableSeats({
    reserveList,
    restId,
    dateBooking,
    timeBooking,
    numberOfCustomer,
}) {
    let reservedSeats = numberOfCustomer

    reserveList.forEach((reserve) => {
        if (
            restId === reserve.id &&
            dateBooking === reserve.bookingDate &&
            timeBooking === reserve.time
        ) {
            reservedSeats += parseInt(reserve.numberOfCustomer)
        }
    })

    let foundIndex = DUMMY_RESTAURANT.findIndex(
        (restaurant) => restaurant.id === restId
    )
    console.log("reservedSeats", reservedSeats)
    if (foundIndex !== -1) {
        console.log("foundIndex")
        if (reservedSeats > DUMMY_RESTAURANT[foundIndex].seats) {
            return false
        }
        console.log("foundIndex0")
        return true
    }
    return false
}
