// import CartButton from '../Cart/CartButton';
import SearchBar from "../Restaurant/SearchBar";
import { useSelector } from "react-redux";
import Styled from "styled-components";
const HeaderStyled = Styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
h1 {
  color: white;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}`;

const MainHeader = (props) => {
  const reservation = useSelector((state) => state.reservation);
  console.log("main header", reservation);
  const searchHandler = (name) => {
    props.onSearch(name);
  };
  return (
    <HeaderStyled>
      <h1>myK-store</h1>
      <nav>
        <ul>
          {/* <li>{cart.reserveList}</li> */}
          {/* <li>News</li> */}
          <li>
            <SearchBar onSearch={searchHandler} />
            {/* <CartButton /> */}
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default MainHeader;
