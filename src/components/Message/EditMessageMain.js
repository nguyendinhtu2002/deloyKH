import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { messagelistDetailMessage, updateMessage } from '../../Redux/Actions/MessageAction';
export default function EditMessageMain() {
    const dispatch = useDispatch()
    const location = useLocation();
    const tempt = "/editMessage/1"
    const messageListDetail = useSelector((state) => state.messageListDetail)
    const redirect = location.pathname ? Number(location.pathname.split("/")[2]) : "";
    const { messager } = messageListDetail
    // const obj1 = Object.assign({}, messager);
    const [Request, setRequest] = useState(messager?.reportOrder[0].Request);
    const [message, setMessage] = useState(messager?.reportOrder[0].message);
    const [repmessage, setRepmessage] = useState(messager?.reportOrder[0].repmessage)
    const [status, setStatus] = useState('')
    useEffect(() => {
        dispatch((messagelistDetailMessage(redirect)))
    }, [dispatch])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateMessage({
                _id: redirect,
                repmessage,
                status,
            })
        );
    };
    return (
        <div>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={submitHandler} >
                    <div className="content-header">
                        <Link to="/users" className="btn btn-danger text-white">
                            Go to User
                        </Link>
                        <h2 className="content-title">Update Product</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Publish now
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    {/* {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : ( */}
                                    <>
                                        <div className="mb-4">
                                            <label htmlFor="product_title" className="form-label">
                                                Request
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className="form-control"
                                                id="product_title"
                                                value={Request}
                                                onChange={(e) => { setRequest(e.target.value) }}
                                                required
                                                readonly
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="product_price" className="form-label">
                                                Message
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className="form-control"
                                                // id="product_price"
                                                value={message}
                                                onChange={(e) => { setMessage(e.target.value) }}

                                                required

                                            />
                                        </div>
                                        {/* <div className="mb-4">
                      <label htmlFor="product_price" className="form-label">
                        IsAdmin
                      </label>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value={setCheck} onChange={(e)=>{setCheckbox(e.target.checked)}}/>
                        <label class="form-check-label">Admin</label>
                      </div>
                    </div> */}
                                        <div className="mb-4">
                                            <label htmlFor="product_price" className="form-label">
                                                Repmessage
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className="form-control"
                                                id="product_price"
                                                value={repmessage}
                                                onChange={(e) => { setRepmessage(e.target.value) }}
                                                required

                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="product_price" className="form-label">
                                                Status
                                            </label>
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setStatus(e.target.value) }} >
                                                <option selected>Open this select menu</option>
                                                <option value="Close">Close</option>

                                            </select>
                                        </div>

                                    </>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}
