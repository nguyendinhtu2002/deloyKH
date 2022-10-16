import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deliverOrder } from "../../Redux/Actions/OrderActions";

const OrderDetailProducts = (props) => {
  const { order, orderId } = props;
  const dispatch = useDispatch();
  const [Link, setLink] = useState(order.orderItems[0].link);
  const [qty, setQty] = useState(order.orderItems[0].qty);

  const deliverHandler = () => {
    dispatch(deliverOrder(
      orderId,
      {
       
        orderItems: {
          link: Link,
          qty
        }
      }
    ));
  };

  return (
    <>
      <form >
        <div className="row mb-4">
          <div className="col-xl-12 col-lg-12">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">

                <div className="mb-4">
                  <label htmlFor="product_title" className="form-label">
                    Link
                  </label>
                  <input
                    onChange={(e) => { setLink(e.target.value); }}
                    type="text"
                    value={Link}
                    placeholder="Type here"
                    className="form-control"
                    id="product_title"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="product_price" className="form-label">
                    Quality
                  </label>
                  <input
                    onChange={(e) => { setQty(e.target.value); }}
                    type="number"
                    value={qty}
                    placeholder="Type here"
                    className="form-control"
                    id="product_price"
                    required
                  />
                </div>


                <div className="mb-4 ">
                  <button type="button" className="btn btn-success " onClick={deliverHandler}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </>
  );
};

export default OrderDetailProducts;
