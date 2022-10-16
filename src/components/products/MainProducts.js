import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import DataTable from 'react-data-table-component'
const MainProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // const productDelete = useSelector((state) => state.productDelete);
  // const { error: errorDelete, success: successDelete } = productDelete;

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id
    },
    {
      name: "Service",
      selector: (row) => row.service,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "Category",
      selector: (row) => row.category
    }, {
      name: "Platform",
      selector: (row) => row.platform
    }
    , {
      name: "Action",
      selector: (row) =>
        <Link
          to={`/product/${row._id}/edit`}
          // className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
        >
          <button className="btn btn-primary">Edit</button>
        </Link>
    }
  ]
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">


        <div className="card-body">

          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">

              <DataTable
                columns={columns}
                data={products}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="450px"
                progressComponent
                selectableRows
                selectableRowsHighlight
              // actions={<button className="btn btn-sm btn-info">Export</button>}

              />
            </div>
          )}


        </div>
      </div>
    </section>
  );
};

export default MainProducts;
