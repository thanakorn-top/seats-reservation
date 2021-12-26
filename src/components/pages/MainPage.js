import Cart from "../Reservation/Reservation"
import Layout from "../Layout/Layout"
import RestaurantList from "../Restaurant/RestaurantList"
// import SearchBar from "../Restaurant/SearchBar";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import Notification from "../UI/Notification"
import {
    sendReserveData,
    fetchReserveData,
} from "../../store/reservation-actions"
import ReserveList from "../Reservation/ReserveList"
let isInitial = true

const MainPage = () => {
    const dispatch = useDispatch()
    const reservationIsVisible = useSelector(
        (state) => state.ui.reservationIsVisible
    )
    const reserveListIsVisible = useSelector(
        (state) => state.ui.reserveListIsVisible
    )
    const reservation = useSelector((state) => state.reservation)
    const notification = useSelector((state) => state.ui.notification)
    const [restName, setRestName] = useState("")

    useEffect(() => {
        dispatch(fetchReserveData())
    }, [dispatch])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }
        if (reservation.changed) {
            dispatch(sendReserveData(reservation.reserveList))
        }
    }, [reservation, dispatch])

    const searchHandler = (name) => {
        console.log(name)
        setRestName(name)
    }
    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout onSearch={searchHandler}>
                {reservationIsVisible && <Cart />}
                {!reserveListIsVisible && <RestaurantList name={restName} />}
                {reserveListIsVisible && <ReserveList />}
            </Layout>
        </>
    )
}
export default MainPage
