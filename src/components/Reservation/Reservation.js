import Card from "../UI/Card";
import ReservationForm from "./ReservationForm";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { reservActions } from "../../store/reservation-slice";
import { uiAction } from "../../store/ui-slice";

const CardStyle = styled(Card)`
max-width: 30rem;
background-color: #313131;
color: white;
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
h2{
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: red;
}
`;

const Reservation = (props) => {
  // const cartItems = useSelector((state) => state.reservation.items);
  const reserveResteraunt = useSelector((state) => state.reservation.reserve);
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.reservation.totalQuantity);
  const clearCartHanler = () => {
    dispatch(reservActions.clearItemFromCart({}));
    cartToggle();
  };

  const cartToggle = () => {
    dispatch(uiAction.toggleCartVisible());
  };

  return (
    <Modal onClose={cartToggle}>
      <CardStyle>
      {/* <Card> */}
        <h2>Your Reservation </h2>
        <ul>
          {/* {cartItems.map((item) => ( */}
          <ReservationForm
            key={reserveResteraunt.id}
            item={{
              id: reserveResteraunt.id,
              title: reserveResteraunt.name,
              quantity: reserveResteraunt.quantity,
              total: reserveResteraunt.totalPrice,
              price: reserveResteraunt.price,
            }}
          />
          {/* ))} */}
        </ul>
        {/* <div className={classes.actions}> */}
        <div>
          {cartTotal !== 0 && <button onClick={clearCartHanler}>Clear</button>}
        </div>
      </CardStyle>
    </Modal>
  );
};

export default Reservation;
