import { CASHFLOW_DELETE_FAIL, CASHFLOW_DELETE_REQUEST, CASHFLOW_DELETE_SUCCESS, CASHFLOW_LIST_FAIL, CASHFLOW_LIST_REQUEST, CASHFLOW_LIST_SUCCESS } from "../Constants/CashFlowContants";
import axios from "axios";
import { logout } from "./userActions";
import { URL } from "../Url";
// ALL MESSAGE
export const listCashFlow = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CASHFLOW_LIST_REQUEST });
        const { data } = await axios.get(`${URL}/api/cashFlow/getAll`);
        dispatch({ type: CASHFLOW_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: CASHFLOW_LIST_FAIL,
            payload: message,
        });
    }
};
export const deleteCashFLow = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: CASHFLOW_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(
        `${URL}/api/cashFlow/${id}`,
        config
      );
      dispatch({ type: CASHFLOW_DELETE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: CASHFLOW_DELETE_FAIL,
        payload: message,
      });
    }
  };