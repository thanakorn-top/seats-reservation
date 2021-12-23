import Cart from "../Reservation/Reservation"
import Layout from "../Layout/Layout";
import RestaurantList from "../Restaurant/RestaurantList";
// import SearchBar from "../Restaurant/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect,useState } from "react";
import Notification from "../UI/Notification";
import { sendCartData, fetchCartData } from "../../store/reservation-actions";
let isInitial = true;

const MainPage = () => {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const reservation = useSelector((state) => state.reservation);
  const notification = useSelector((state) => state.ui.notification);
  const [restName,setRestName] = useState("") ; 
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (reservation.changed) {
      dispatch(sendCartData(reservation));
    }
  }, [reservation, dispatch]);


  const searchHandler = (name) =>{
    console.log(name);
    setRestName(name);
  }
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout onSearch={searchHandler}>
        {cartIsVisible && <Cart />}
        <RestaurantList name={restName}/>
        
      </Layout>
    </Fragment>
  );
};
export default MainPage;
