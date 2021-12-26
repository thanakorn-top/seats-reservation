import { uiAction } from "./ui-slice";
import { reservActions } from "./reservation-slice";

export const fetchReserveData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-ac112-default-rtdb.asia-southeast1.firebasedatabase.app/reserve.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch cart .");
      }
      const data = await response.json();

      return data;
    };

    try {
      const reserveData = await fetchData();
      console.log("reserveData",reserveData)
     
      if(reserveData===null){
        dispatch(reservActions.replaceReservationList([]));
      }else{
        dispatch(reservActions.replaceReservationList(reserveData));
      }
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "fetch cart failed",
        })
      );
    }
  };
};

export const sendReserveData = (data) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-ac112-default-rtdb.asia-southeast1.firebasedatabase.app/reserve.json",
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Edit Data Successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Data failed",
        })
      );
    }
  };
};
