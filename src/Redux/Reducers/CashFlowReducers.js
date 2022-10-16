import { CASHFLOW_DELETE_FAIL, CASHFLOW_DELETE_REQUEST, CASHFLOW_DELETE_SUCCESS, CASHFLOW_LIST_FAIL, CASHFLOW_LIST_REQUEST, CASHFLOW_LIST_SUCCESS } from "../Constants/CashFlowContants";
// ALL CashFLow
export const cashFlowListReducer = (state = { message: [] }, action) => {
    switch (action.type) {
        case CASHFLOW_LIST_REQUEST:
            return { loading: true };
        case CASHFLOW_LIST_SUCCESS:
            return { loading: false, cashFlow: action.payload };
        case CASHFLOW_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const deleteCashFlow = (state = {}, action) => {
    switch (action.type) {
      case CASHFLOW_DELETE_REQUEST:
        return { loading: true };
      case CASHFLOW_DELETE_SUCCESS:
        return { loading: false, success: true, cashFlow: action.payload };
      case CASHFLOW_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  