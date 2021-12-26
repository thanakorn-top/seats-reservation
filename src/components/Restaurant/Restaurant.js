import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { reservActions } from "../../store/reservation-slice";
import { uiAction } from "../../store/ui-slice";
import Styled from "styled-components";

const DivItemStyled = Styled.div`
h3{
  margin: 0.5rem 0;
  font-size: 1.25rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
img {
  width: 200px;
}
`;
const DivDescStyled = Styled.div`
display: flex;
justify-content: flex-start;
p {
  color: #3a3a3a;
}`
;

const DivActionsStyled = Styled.div`
display: flex;
justify-content: flex-end;
`;

const Restaurant = (props) => {
  const { title, description, id, img,img2,img3 } = props;
  const dispatch = useDispatch();

  // const addToCartHandler = () => {
  //   // dispatch(cartActions.addItemTocart({ id, title, price }));
  // };

  const reservation = () => {
    dispatch(reservActions.selectRestaurant({ id, title }));
    dispatch(uiAction.toggleReservationFormVisible());
  };
  return (
    <DivItemStyled>
      <Card>
        <header>
          <img src={img} alt="img"></img>
          <img src={img2} alt="img"></img>
          <img src={img3} alt="img"></img>
        
          {/* <div className={classes.price}>${price.toFixed(2)}</div> */}
        </header>
        <div>
        <h3>{title}</h3>
          <DivDescStyled >
            <p>{description}</p>
          </DivDescStyled>
          <DivActionsStyled >
            <button onClick={reservation}>Reserve</button>
          </DivActionsStyled>
        </div>
      </Card>
    </DivItemStyled>
  );
};

export default Restaurant;
