import classes from "./Notification.module.css"
import { useDispatch } from "react-redux"
import { uiAction } from "../../store/ui-slice"

const Notification = (props) => {
    const dispatch = useDispatch()
    const closeNotification = () => {
        dispatch(uiAction.closeNotification())
    }
    let specialClasses = ""

    if (props.status === "error") {
        specialClasses = classes.error
    }
    if (props.status === "success") {
        specialClasses = classes.success
    }

    let cssClasses = `${classes.notification} ${specialClasses}`

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <button
                className="btn btn-outline-light btn-sm"
                onClick={closeNotification}
            >
                Close
            </button>
        </section>
    )
}

export default Notification
