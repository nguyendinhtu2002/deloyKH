import React from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import User from "./User";

const MainUser = () => {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">User</h2>
        <div>
          <Link to="/addUser" className="btn btn-primary">
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
              <User users={users} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainUser;
