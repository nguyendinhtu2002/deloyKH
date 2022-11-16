import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createUser } from "../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddClassMain = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [note, setNote] = useState("");
  const [mentor, setMentor] = useState('');
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;
  useEffect(() => {
    if (product) {
      toast.success("Class Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setCode("");
      setNote("");
      setMentor("");
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUser(name, code, note, mentor));
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
            <h2 className="content-title">Add Class</h2>
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
                      Code
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Mentor
                    </label>
                    <select class="form-select" aria-label="Default select example"  onChange={(e) => { setMentor(e.target.value) }}>
                      <option selected>Chosse Mentor</option>
                      {
                        users?.map((items) => items.role === "GV" ? <option value={items._id}>{items._id}</option> : null)
                      }
                    </select>
                    {/* <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    /> */}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Name
                    </label>
                    <select class="form-select" aria-label="Default select example" onChange={(e) => { setName(e.target.value) }}>
                      <option selected>Choose Name</option>
                      {
                        users?.map((items) => items._id === mentor ? <option value={items.name} >{items.name}</option> : null)
                      }
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Note</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
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

export default AddClassMain;
