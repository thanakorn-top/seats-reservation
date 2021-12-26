import { useDispatch } from "react-redux"
import { reservActions } from "../../store/reservation-slice"
import { uiAction } from "../../store/ui-slice"
import { useRef, useState } from "react"
import { RESERVATION_TIMES } from "../../constants/Restaurant"
import { useSelector } from "react-redux"
import { checkAvailableSeats } from "../../services/appServices"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components"
const Styles = styled.div`
    //  padding: 20px;

    h1 {
        border-bottom: 1px solid white;
        color: #3d3d3d;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        padding: 10px;
        text-align: center;
    }

    input {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
    }
    input[type="text"]:disabled {
        color: black;
    }
    label {
        color: white;
        display: block;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    p {
        color: red;
        display: block;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
    }
`
const isEmpty = (value) => value.trim() === ""
const ReservationForm = (props) => {
    const { title, id } = props.item
    const [timeSlot, setTimeslot] = useState("10.00 AM")
    const [bookingDate, setBookingDate] = useState(new Date())
    const reserveList = useSelector((state) => state.reservation.reserveList)
    const [formInputsValidity, setFormInoutsValidity] = useState({
        name: true,
        number: true,
    })
    const dispatch = useDispatch()

    const nameInputRef = useRef()
    const numberOfCustomerRef = useRef()

    const comfirmReservation = (event) => {
        event.preventDefault()

        const resterauntName = title
        const enteredName = nameInputRef.current.value
        const enteredNumberOfCustomer = numberOfCustomerRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredNumberOfCustomerIsValid =
            !isEmpty(enteredNumberOfCustomer) && enteredNumberOfCustomer > 0

        setFormInoutsValidity({
            name: enteredNameIsValid,
            number: enteredNumberOfCustomerIsValid,
        })

        const formIsValid = enteredNumberOfCustomerIsValid && enteredNameIsValid

        if (!formIsValid) {
            return
        }

        const formatted_date =
            bookingDate.getDate() +
            "-" +
            (bookingDate.getMonth() + 1) +
            "-" +
            bookingDate.getFullYear()

        const bookingData = {
            id: id,
            restaurantName: resterauntName,
            customerName: enteredName,
            numberOfCustomer: enteredNumberOfCustomer,
            bookingDate: formatted_date.toString(),
            time: timeSlot,
        }

        console.log(bookingData)

        const isAvalable = checkAvailableSeats({
            reserveList,
            restId: id,
            dateBooking: formatted_date.toString(),
            timeBooking: timeSlot,
            numberOfCustomer: parseInt(enteredNumberOfCustomer),
        })

        if (!isAvalable) {
            dispatch(
                uiAction.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "No available seats at this time",
                })
            )
            return
        }

        dispatch(reservActions.addReservationList(bookingData))
        dispatch(uiAction.toggleReservationFormVisible())
    }

    const cancelReservation = () => {
        dispatch(uiAction.toggleReservationFormVisible())
    }
    const timeslotChangeHandler = (event) => {
        console.log(event.target.value)
        const time = event.target.value
        setTimeslot(time)
    }
    const dateChangeHandler = (date) => {
        setBookingDate(date)
    }

    return (
        <Styles>
            <form>
                <div>
                    <label htmlFor="name">Resteraunt Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="resterauntName"
                        defaultValue={title}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="name">Booking Name</label>
                    <input type="text" id="name" ref={nameInputRef} />
                    {!formInputsValidity.name && <p>please enter Name</p>}
                </div>
                <div>
                    <label htmlFor="numberOfCustomer">Number Of Customer</label>
                    <input
                        className="form-control"
                        type="number"
                        id="numberOfCustomer"
                        ref={numberOfCustomerRef}
                        max="5"
                        min="1"
                    />
                    {!formInputsValidity.number && (
                        <p>please enter Number more than 0</p>
                    )}
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <DatePicker
                        selected={bookingDate}
                        dateFormat="dd-MM-yyyy"
                        onChange={dateChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="time">Time Slot</label>
                    {/* <input type="text" id="city" ref={cityInputRef} /> */}
                    <select
                        className="form-select"
                        value={timeSlot}
                        id="time"
                        onChange={timeslotChangeHandler}
                    >
                        {RESERVATION_TIMES.map((time, key) => (
                            <option key={key} value={time.time}>
                                {time.time}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="row mt-4">
                    <div className="col d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                            onClick={cancelReservation}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={comfirmReservation}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        </Styles>
    )
}

export default ReservationForm
