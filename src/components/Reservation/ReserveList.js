import Reserve from "./Reserve"
// import { DUMMY_RESTAURANT } from "../../constants/Restaurant";
import Styled from "styled-components"
import { useSelector } from "react-redux"
const SectionStyled = Styled.section`
h2 {
  color: white;
  margin: 2rem auto;
  text-align: center;
  text-transform: uppercase;
}
div {
  list-style: none;
  margin: 0;
  padding: 0;
}
`

const ReserveList = (props) => {
    const reserveList = useSelector((state) => state.reservation.reserveList)

    return (
        <SectionStyled>
            <div>
                {reserveList.map((reserve) => (
                    <Reserve
                        key={reserve.bookingDate + "" + reserve.customerName}
                        id={reserve.bookingDate + "" + reserve.customerName}
                        customerName={reserve.customerName}
                        numberOfCustomer={reserve.numberOfCustomer}
                        restaurantName={reserve.restaurantName}
                        bookingDate={reserve.bookingDate}
                        time={reserve.time}
                    />
                ))}

            </div>
        </SectionStyled>
    )
}

export default ReserveList
