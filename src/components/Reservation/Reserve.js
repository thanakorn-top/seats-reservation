import Card from "../UI/Card";
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

const Reserve = (props) => {


  // const addToCartHandler = () => {
  //   // dispatch(cartActions.addItemTocart({ id, title, price }));
  // };
  return (
    <DivItemStyled>
      <Card>
        <header>
        <h3>Booking Name : {props.customerName}</h3>
        </header>
        <div>
        <h3>Restaurant Name : {props.restaurantName}</h3>
          <DivDescStyled >
            <p>at : {props.bookingDate} - {props.time}</p>
          
          </DivDescStyled>
          <DivDescStyled >
           <p>Booking For {props.numberOfCustomer} people</p>
          </DivDescStyled>

        </div>
      </Card>
    </DivItemStyled>
  );
};

export default Reserve;
