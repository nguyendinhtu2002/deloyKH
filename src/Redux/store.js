import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { deleteUserdReducer, userEditReducer, userListReducer, userLoginReducer, userUpdateReducer } from "./Reducers/userReducers";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from "./Reducers/ProductReducers";
import {
  deleteOrderdReducer,
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from "./Reducers/OrderReducres";
import { statusCreateReducer } from "./Reducers/StatusReducers";
import { messageListDetailMyReducer, messageListReducer, messageUpdateReducer } from "./Reducers/MessageReducres";
import { deleteBalancedReducer, getBalenceReducer, getDetailsBalanceReducer } from "./Reducers/WalletContants";
import { cashFlowListReducer } from "./Reducers/CashFlowReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  statusOrders: statusCreateReducer,
  deleteOrders: deleteOrderdReducer,
  deleteUser: deleteUserdReducer,
  editUser: userEditReducer,
  getWalletBalance: getBalenceReducer,
  getWalletByUser :getDetailsBalanceReducer,
  deleteWalletBanlance : deleteBalancedReducer,
  deleteCashFlow:deleteBalancedReducer,
  messageList: messageListReducer,
  messageListDetail:messageListDetailMyReducer,
  messageUpdate:messageUpdateReducer,
  updateUser: userUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliveredReducer,
  cashFlowList :cashFlowListReducer,
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
