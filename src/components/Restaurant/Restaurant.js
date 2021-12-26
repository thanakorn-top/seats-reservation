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
  margin: 0px -5px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.image-wrapper {
  height: 200px;
  flex : 1;
  background-color : red;
  background-size : cover;
  background-position : center center;
  margin: 0px 5px;
}
`;
const DivDescStyled = Styled.div`
display: flex;
justify-content: flex-start;
p {
  color: #3a3a3a;
}`;
const DivActionsStyled = Styled.div`
display: flex;
justify-content: flex-end;
`;

const Restaurant = (props) => {
  const { title, description, id, images = [] } = props;
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
          {images.map((img, index) => (
            <div key={index} className="image-wrapper" style={{backgroundImage: `url(${img})`}}> 

            </div>
          ))}

          {/* <div className={classes.price}>${price.toFixed(2)}</div> */}
        </header>
        <div>
          <h3>{title}</h3>
          <DivDescStyled>
            <p>{description}</p>
          </DivDescStyled>
          <DivActionsStyled>
            <button onClick={reservation}>Reserve</button>
          </DivActionsStyled>
        </div>
      </Card>
    </DivItemStyled>
  );
};

export default Restaurant;
