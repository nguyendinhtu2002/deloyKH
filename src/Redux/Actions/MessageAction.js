import { MESSAGE_DETAILS_LIST_MY_FAIL, MESSAGE_DETAILS_LIST_MY_REQUEST, MESSAGE_DETAILS_LIST_MY_SUCCESS, MESSAGE_LIST_FAIL, MESSAGE_LIST_REQUEST, MESSAGE_LIST_SUCCESS, MESSAGE_UPDATE_FAIL, MESSAGE_UPDATE_REQUEST, MESSAGE_UPDATE_SUCCESS } from "../Constants/MessageConstants";
import axios from "axios";
import { logout } from "./userActions";
import { URL } from './../Url';

// ALL MESSAGE
export const listMessage = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/report`, config);

    dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: MESSAGE_LIST_FAIL,
      payload: message,
    });
  }
};

export const messagelistDetailMessage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_DETAILS_LIST_MY_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/report/${id}`, config);
    dispatch({ type: MESSAGE_DETAILS_LIST_MY_SUCCESS, payload: data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: MESSAGE_DETAILS_LIST_MY_FAIL,
      payload: message,
    });
  }
};
export const updateMessage = (report) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_UPDATE_REQUEST });
    console.log(report._id);
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${URL}/api/report/${report._id}`,
      report,
      config
    );

    dispatch({ type: MESSAGE_UPDATE_SUCCESS, payload: data });
    // dispatch({ type: MESSAGE_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: MESSAGE_UPDATE_FAIL,
      payload: message,
    });
  }
};