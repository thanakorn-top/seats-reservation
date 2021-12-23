import classes from "./ReservationForm.module.css";

import { useDispatch } from "react-redux";
import { reservActions } from "../../store/reservation-slice";
import { uiAction } from "../../store/ui-slice";
import { useRef, useState } from "react";
import { RESERVATION_TIMES } from "../../constants/Restaurant";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservationForm = (props) => {
  const { title } = props.item;
  const [timeSlot, setTimeslot] = useState("10.00 AM");
  const [bookingDate, setBookingDate] = useState(new Date());

  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const numberOfCustomerRef = useRef();

  const comfirmReservation = (event) => {
    event.preventDefault();
    const resterauntName = title;
    const enteredName = nameInputRef.current.value;
    const enteredNumberOfCustomer = numberOfCustomerRef.current.value;
    //     const datetest = Moment(bookingDate.toString()).format('DD-MM-YYYY');
    //     const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
    // const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

    const formatted_date =
      bookingDate.getDate() +
      "-" +
      (bookingDate.getMonth() + 1) +
      "-" +
      bookingDate.getFullYear();


    // console.log(datetest)
    const bookingData = {
      restaurantName: resterauntName,
      customerName: enteredName,
      numberOfCustomer: enteredNumberOfCustomer,
      bookingDate: formatted_date.toString(),
      time: timeSlot,
    };

    dispatch(reservActions.addReservationList(bookingData));
    dispatch(uiAction.toggleCartVisible());
  };

  const timeslotChangeHandler = (event) => {
    console.log(event.target.value);
    const time = event.target.value;
    setTimeslot(time);
  };
  const dateChangeHandler = (date) => {
    setBookingDate(date);
  };
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="name">Resteraunt Name</label>
        <input type="text" id="resterauntName" defaultValue={title} disabled />
        {/* {!formInputsValidity.name && <p>please enter a valid value</p>} */}
      </div>
      <div>
        <label htmlFor="name">Booking Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {/* {!formInputsValidity.name && <p>please enter a valid value</p>} */}
      </div>
      <div>
        <label htmlFor="numberOfCustomer">Number Of Customer</label>
        <input type="text" id="numberOfCustomer" ref={numberOfCustomerRef} />
        {/* {!formInputsValidity.street && <p>please enter a valid value</p>} */}
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <DatePicker
          selected={bookingDate}
          dateFormat="dd-MM-yyyy"
          onChange={dateChangeHandler}
        />

        {/* <input type="text" id="date" ref={dateRef} /> */}
        {/* {!formInputsValidity.postalCode && <p>please enter a valid value</p>} */}
      </div>
      <div>
        <label htmlFor="time">Time Slot</label>
        {/* <input type="text" id="city" ref={cityInputRef} /> */}
        <select value={timeSlot} id="time" onChange={timeslotChangeHandler}>
          {RESERVATION_TIMES.map((time, key) => (
            <option key={key} value={time.time}>
              {time.time}
            </option>
          ))}
        </select>
        {/* {!formInputsValidity.city && <p>please enter a valid value</p>} */}
      </div>
      <div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={comfirmReservation}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
