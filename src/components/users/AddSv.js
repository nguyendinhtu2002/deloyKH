import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {  resgisUSer } from "../../Redux/Actions/userActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('');
  const orderList = useSelector((state) => state.orderList);
  const {  orders } = orderList;
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const createUser = useSelector((state) => state.createUser);
  const { loading, error, user } = createUser;
  useEffect(() => {
    if (user) {
      toast.success("Sv Added", ToastObjects);
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    }
  }, [user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resgisUSer(name, email, password,role))
  }
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/class" className="btn btn-danger text-white">
              Go to class
            </Link>
            <h2 className="content-title">Add SV in Class </h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-12 col-lg-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      onChange={(e)=>setEmail(e.target.value)}

                    />

                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      onChange={(e)=>setPassword(e.target.value)}

                    />

                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Role
                    </label>
                    <select class="form-select" aria-label="Default select example" onChange={(e) => { setRole(e.target.value) }}>
                      <option selected>Chosse Role</option>
                      <option value="HV">HV</option>
                      <option value="GV">GV</option>
                      <option value="admin">admin</option>

                    </select>

                  </div>




                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddUser;
