import SearchBar from "../Restaurant/SearchBar"
import { useDispatch, useSelector } from "react-redux"
import Styled from "styled-components"
import { uiAction } from "../../store/ui-slice"

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
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: right;
}`

const MainHeader = (props) => {
    const dispatch = useDispatch()

    const reserveListIsVisible = useSelector(
        (state) => state.ui.reserveListIsVisible
    )
    const toggleText = useSelector((state) => state.ui.toggleText)

    const toggleReservationList = () => {
        dispatch(uiAction.toggleReserveListIsVisible())
    }
    const searchHandler = (name) => {
        props.onSearch(name)
    }

    return (
        <HeaderStyled>
            <h1 className="d-none d-lg-block">Reserve App</h1>
            {!reserveListIsVisible && <SearchBar onSearch={searchHandler} />}
            <button onClick={toggleReservationList}>{toggleText}</button>
        </HeaderStyled>
    )
}

export default MainHeader
