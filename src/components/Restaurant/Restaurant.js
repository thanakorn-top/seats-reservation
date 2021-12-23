import Card from "../UI/Card";
import classes from "./Restaurant.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reservActions } from "../../store/reservation-slice";
import { uiAction } from "../../store/ui-slice";

const Restaurant = (props) => {
  const { title, price, description, id, img } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // dispatch(cartActions.addItemTocart({ id, title, price }));
  };

  const reservation = () => {

    dispatch(reservActions.addReservationSeats({ id, title, price }));
    dispatch(uiAction.toggleCartVisible());
  };
  return (
    <div className={classes.item}>
      <Card>
        <header>
          <img src={img} alt="1234" className={classes.newsImg}></img>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div>
          <div className={classes.desc}>
            <p>{description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={reservation}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </div>
    // <li className={classes.item}>
    //   <Card>
    //     <header>
    //       <img src={img} alt="1234" className={classes.newsImg}></img>
    //       <h3>{title}</h3>
    //       <div className={classes.price}>${price.toFixed(2)}</div>
    //     </header>

    //     <div >
    //       <div className={classes.desc}> <p>{description}</p></div>
    //       <div className={classes.actions}> <button onClick={addToCartHandler}>Add to Cart</button></div>
    //     </div>
    //   </Card>
    // </li>
  );
};

export default Restaurant;
