import React from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Class from "./Class";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ClassMain = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Class</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>
      

      <div className="card mb-4 shadow-sm">

        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Class orders={orders.listClass} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassMain;
