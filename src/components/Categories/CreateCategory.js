import React from "react";
import DataTable from 'react-data-table-component'
import { Link } from "react-router-dom";

const CreateCategory = (props) => {
  const { balance } = props
  const columns = [
    {
      name: "ID",
      selector: (row) => (row._id)
    },
    {
      name: "Money",
      selector: (row) => row.balance
    },
    {
      name: "Action",
      selector: (row) => <>
        <div className="d-flex justify-content-around">
          <button type="button"  className="btn ">Delete</button>
          <Link to={`/editUser/${row._id}`} className="text-success">
            <button type="button" className="btn ">Edit</button>
v
          </Link>
        </div>

      </>
    }
  ]
  return (
    <DataTable
      columns={columns}
      data={balance}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      progressComponent
      selectableRows
      selectableRowsHighlight
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search here" className="w-25 form-control"  />
      }

    />
  );
};

export default CreateCategory;
