import { DELETE_BALANCE_FAIL, DELETE_BALANCE_REQUEST, DELETE_BALANCE_SUCCESS, GETDETAILS_BALANCE_FAIL, GETDETAILS_BALANCE_REQUEST, GETDETAILS_BALANCE_SUCCESS, GET_BALANCE_FAIL, GET_BALANCE_REQUEST, GET_BALANCE_SUCCESS, UPDATE_BALANCE_FAIL, UPDATE_BALANCE_REQUEST, UPDATE_BALANCE_SUCCESS } from "../Constants/WalletContants";


// GET BALANCE
export const getBalenceReducer = (state = { balance: [] }, action) => {
    switch (action.type) {
        case GET_BALANCE_REQUEST:
            return { loading: true, balance: [] };
        case GET_BALANCE_SUCCESS:
            return { loading: false, success: true, balance: action.payload };
        case GET_BALANCE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const updateBalanceReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_BALANCE_REQUEST:
            return { loading: true };
        case UPDATE_BALANCE_SUCCESS:
            return { loading: false, success: true, balance: action.payload };
        case UPDATE_BALANCE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getDetailsBalanceReducer = (state = { balance: [] }, action) => {
    switch (action.type) {
        case GETDETAILS_BALANCE_REQUEST:
            return { loading: true, balance: [] };
        case GETDETAILS_BALANCE_SUCCESS:
            return { loading: false, success: true, balance: action.payload };
        case GETDETAILS_BALANCE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const deleteBalancedReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BALANCE_REQUEST:
        return { loading: true };
      case DELETE_BALANCE_SUCCESS:
        return { loading: false, success: true, balance: action.payload };
      case DELETE_BALANCE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  