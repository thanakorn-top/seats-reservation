import { useDispatch } from "react-redux";
import { reservActions } from "../../store/reservation-slice";
import { uiAction } from "../../store/ui-slice";
import { useRef, useState } from "react";
import { RESERVATION_TIMES } from "../../constants/Restaurant";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
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
    color: white;
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
`;
const isEmpty = (value) => value.trim() === "";
const ReservationForm = (props) => {
  const { title } = props.item;
  const [timeSlot, setTimeslot] = useState("10.00 AM");
  const [bookingDate, setBookingDate] = useState(new Date());

  const [formInputsValidity, setFormInoutsValidity] = useState({
    name: true,
    number: true,
  });
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const numberOfCustomerRef = useRef();

  const comfirmReservation = (event) => {
    event.preventDefault();

    const resterauntName = title;
    const enteredName = nameInputRef.current.value;
    const enteredNumberOfCustomer = numberOfCustomerRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredNumberOfCustomerIsValid = !isEmpty(enteredNumberOfCustomer);

    setFormInoutsValidity({
      name: enteredNameIsValid,
      number: enteredNumberOfCustomerIsValid,
    });

    const formIsValid = enteredNumberOfCustomerIsValid && enteredNameIsValid;

    if (!formIsValid) {
      return;
    }

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
    dispatch(uiAction.toggleReservationFormVisible());
  };

  const cancelReservation = () => {
    dispatch(uiAction.toggleReservationFormVisible());
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
    <Styles>
      <form>
        <div>
          <label htmlFor="name">Resteraunt Name</label>
          <input
            type="text"
            id="resterauntName"
            defaultValue={title}
            disabled
          />
          {/* {!formInputsValidity.name && <p>please enter a valid value</p>} */}
        </div>
        <div>
          <label htmlFor="name">Booking Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputsValidity.name && <p>please enter Name</p>}
        </div>
        <div>
          <label htmlFor="numberOfCustomer">Number Of Customer</label>
          <input
            type="number"
            id="numberOfCustomer"
            ref={numberOfCustomerRef}
            max="5"
            min="1"
          />
          {!formInputsValidity.number && <p>please enter a valid value</p>}
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
          <button type="button" onClick={cancelReservation}>
            Cancel
          </button>
          <button type="submit" onClick={comfirmReservation}>
            Confirm
          </button>
        </div>
      </form>
    </Styles>
  );
};

export default ReservationForm;
