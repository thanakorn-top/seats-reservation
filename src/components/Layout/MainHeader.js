// import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import SearchBar from '../Restaurant/SearchBar';
import { useSelector } from 'react-redux';

const MainHeader = (props) => {
  const reservation = useSelector((state) => state.reservation);
  const searchHandler = (name) =>{
    props.onSearch(name);
  }
  return (
    <header className={classes.header}>
      <h1>myK-store</h1>
      <nav>
        <ul>
          {/* <li>{cart.reserveList}</li> */}
          {/* <li>News</li> */}
          <li>
          <SearchBar onSearch={searchHandler}/>
            {/* <CartButton /> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
