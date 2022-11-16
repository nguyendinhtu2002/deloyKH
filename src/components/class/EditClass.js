import React, { useState, useEffect } from "react";
import Toast from "../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    updateUser,
} from "../../Redux/Actions/UserActions";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { ORDER_DETAILS_REQUEST } from "../../Redux/Constants/OrderConstants";
import axios from "axios"
const ToastObjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
};

const EditCLass = (props) => {
    const { productId } = props;
    console.log()
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order } = orderDetails;
    const [Code, setCode] = useState('');
    const [Name, setName] = useState('');
    const [Mentor, setMentor] = useState('');
    const [Note, setNote] = useState('');


    const dispatch = useDispatch();

    const productEdit = useSelector((state) => state.productEdit);
    const { loading, error, product } = productEdit;


    const productUpdate = useSelector((state) => state.productUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate;
    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: ORDER_DETAILS_REQUEST });
            toast.success("Class Updated Success", ToastObjects);
        }
        else {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`https://app-task-mana-demo.herokuapp.com/api/class/${productId}`)
                        .then(data => {
                            setCode(data.data.code);
                            setName(data.data.name);
                            setMentor(data.data.mentor);
                            setNote(data.data.note);
                        })
                } catch (err) {
                    console.log(err.message);
                }
            }
            fetchData();

        }
    }, [product, dispatch, productId, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateUser({
                _id: productId,
                name: Name,
                code: Code,
                mentor: Mentor,
                note: Note,
            })
        );
    };

    return (
        <>
            <Toast />
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={submitHandler}>
                    <div className="content-header">
                        <Link to="/class" className="btn btn-danger text-white">
                            Go to Class
                        </Link>
                        <h2 className="content-title">Update Class</h2>
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
                                    {errorUpdate && (
                                        <Message variant="alert-danger">{errorUpdate}</Message>
                                    )}
                                    {loadingUpdate && <Loading />}
                                    {loading ? (
                                        <Loading />
                                    ) : error ? (
                                        <Message variant="alert-danger">{error}</Message>
                                    ) : (
                                        <>
                                            <div className="mb-4">
                                                <label htmlFor="product_title" className="form-label">
                                                    Code
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    value={Code}
                                                    onChange={(e) => { setCode(e.target.value) }}
                                                    id="product_title"
                                                    required

                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="product_price" className="form-label">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    value={Name}
                                                    onChange={(e) => { setName(e.target.value) }}

                                                    id="product_price"
                                                    required

                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="product_price" className="form-label">
                                                    Mentor
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    value={Mentor}
                                                    onChange={(e) => { setMentor(e.target.value) }}

                                                    id="product_price"
                                                    required

                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Note</label>
                                                <textarea
                                                    placeholder="Type here"
                                                    className="form-control"
                                                    value={Note}
                                                    onChange={(e) => { setNote(e.target.value) }}

                                                    rows="7"
                                                    required

                                                ></textarea>
                                            </div>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default EditCLass;
