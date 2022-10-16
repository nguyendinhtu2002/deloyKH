import { Status_CREATE_FAIL, Status_CREATE_REQUEST, Status_CREATE_SUCCESS } from "../Constants/StatusContants";

// CREATE STATUS
export const statusCreateReducer = (state = [], action) => {
    switch (action.type) {
        case Status_CREATE_REQUEST:
            return { loading: true, status: [] };
        case Status_CREATE_SUCCESS:
            return { loading: false, success: true, status:  action.payload };
        case Status_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};