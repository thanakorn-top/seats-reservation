import { uiAction } from "./ui-slice";
import { cartActions } from "./reservation-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-ac112-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch cart data.");
      }
      const data = await response.json();

      return data;
    };

    try {
      // const cartData = await fetchData();
      // dispatch(cartActions.replaceCart({
      //     items: cartData.items || [],
      //     totalQuantity: cartData.totalQuantity
      // }));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "fetch cart Data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  console.log("cart",cart)
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-ac112-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      // await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Edit cart Data Successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart Data failed",
        })
      );
    }
  };
};
