import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/ClassScreen";
import AddClass from "./screens/AddClass";
import Login from "./screens/LoginScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "./Redux/Actions/userActions";
import { listOrders } from "./Redux/Actions/OrderActions";
import ClassEditScreen from "./screens/ClassEditScreen";
import AddSV from "./screens/AddSv";
import ViewClassScreen from "./screens/ViewClassScreen";
import AddUSER from "./screens/AddUser";


function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.role === "admin") {
      dispatch(listUser());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={HomeScreen} exact />
          <PrivateRouter path="/class" component={OrderScreen} />
          <PrivateRouter path="/editClass/:id" component={ClassEditScreen} />
          <PrivateRouter path="/addproduct" component={AddClass} />
          <PrivateRouter path="/addSV" component={AddSV} />
          <PrivateRouter path="/addUser" component={AddUSER} />
          <PrivateRouter path="/viewclass/:id" component={ViewClassScreen} />

          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
