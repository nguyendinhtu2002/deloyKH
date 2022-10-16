import axios from "axios";
import { Status_CREATE_FAIL, Status_CREATE_REQUEST, Status_CREATE_SUCCESS } from "../Constants/StatusContants";
// STATUS LIST
export const listStatus = (orders="") => async (dispatch) => {
    try {
        const params = new URLSearchParams()
        params.append('key', '6b45b91c3ab933089e7c5619ca4d4f8c')
        params.append('action', 'status')
        params.append('orders', orders)
        dispatch({ type: Status_CREATE_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const { data } = await axios.post("https://1dg.me/api/v2", params, config);
        dispatch({ type: Status_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: Status_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};