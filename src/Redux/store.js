import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userCreateReducer, userListReducer, userLoginReducer } from "./Reducers/userReducers";
import {
  productCreateReducer,
  
} from "./Reducers/ProductReducers";
import {

  orderListReducer,
} from "./Reducers/OrderReducres";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productCreate: productCreateReducer,
  orderList: orderListReducer,
  createUser:userCreateReducer
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
