import { MESSAGE_DETAILS_LIST_MY_FAIL, MESSAGE_DETAILS_LIST_MY_REQUEST, MESSAGE_DETAILS_LIST_MY_RESET, MESSAGE_DETAILS_LIST_MY_SUCCESS, MESSAGE_LIST_FAIL, MESSAGE_LIST_REQUEST, MESSAGE_LIST_SUCCESS, MESSAGE_UPDATE_FAIL, MESSAGE_UPDATE_REQUEST, MESSAGE_UPDATE_SUCCESS } from "../Constants/MessageConstants";

// ALL MESSAGE
export const messageListReducer = (state = { message: [] }, action) => {
  switch (action.type) {
    case MESSAGE_LIST_REQUEST:
      return { loading: true };
    case MESSAGE_LIST_SUCCESS:
      return { loading: false, message: action.payload };
    case MESSAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//LIST DETAIL MESSAGE

export const messageListDetailMyReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_DETAILS_LIST_MY_REQUEST:
      return { loading: true };
    case MESSAGE_DETAILS_LIST_MY_SUCCESS:
      return { loading: false, messager: action.payload };
    case MESSAGE_DETAILS_LIST_MY_FAIL:
      return { loading: false, error: action.payload };
    case MESSAGE_DETAILS_LIST_MY_RESET:
      return { messager: [] };
    default:
      return state;
  }
};


// UPDATE USER
export const messageUpdateReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case MESSAGE_UPDATE_REQUEST:
      return { ...state, loading: true };
    case MESSAGE_UPDATE_SUCCESS:
      return { loading: false, user: action.payload };
    case MESSAGE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
