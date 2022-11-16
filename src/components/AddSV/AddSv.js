import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { addSv, createUser } from "../../Redux/Actions/userActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddSv = () => {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const orderList = useSelector((state) => state.orderList);
  const {  orders } = orderList;
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;
  useEffect(() => {
    if (product) {
      toast.success("Sv Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setUser("");
      setId("");
      
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addSv({
        user,
    },id));
  };

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
                      User
                    </label>
                    <select class="form-select" aria-label="Default select example" onChange={(e) => { setUser(e.target.value) }}>
                      <option selected>Chosse User</option>
                      {
                        users?.map((items) => items.role === "HV" ? <option value={items._id}>{items._id}</option> : null)
                      }
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Class
                    </label>
                    <select class="form-select" aria-label="Default select example" onChange={(e) => { setId(e.target.value) }}>
                      <option selected>Chosse Class</option>
                      {
                        orders?.listClass?.map((items) =>  <option value={items._id}>{items._id}</option> )
                      }
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

export default AddSv;
