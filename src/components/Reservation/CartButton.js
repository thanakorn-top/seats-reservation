import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch,useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
const cartQuantity = useSelector(state => state.reservation.totalQuantity)

  const cartToggle = () => {
    dispatch(uiAction.toggleCartVisible());
  };

  return (
    <button className={classes.button} onClick={cartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
