import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../../Redux/Actions/OrderActions";

const Class = (props) => {
  const { orders } = props;
  const dispatch = useDispatch();
  const [search, SetSearch] = useState('')
  const [data, setData] = useState(orders)


  const handlerDelete = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteOrder(id))
    }
  }

  useEffect(() => {
    const result = data?.filter(temp=>{
      return temp.code.toLowerCase().match(search.toLowerCase())
    })
    setData(result)
  }, [dispatch,search])
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id
    },
    {
      name: "Code",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "Mentor",
      selector: (row) => row.mentor,
    },
    {
      name: "name Mentor",
      selector: (row) => row.name,
    },
    ,
    {
      name: "Note",
      selector: (row) => row.note
    },
    {
      name: "Action",
      selector: (row) =>
        <>
          <div className="d-flex justify-content-around">
            <button type="button" onClick={() => handlerDelete(row._id)} className="btn ">Delete</button>
            <Link to={`/editClass/${row._id}`} className="text-success">
              <button type="button" className="btn ">Edit</button>
            </Link>
            <Link to={`/viewClass/${row._id}`} className="text-success">
              <button type="button" className="btn ">View</button>
            </Link>
          </div>

        </>
    }
  ]
  return (

    <DataTable
      columns={columns}
      data={data}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      progressComponent
      selectableRows
      selectableRowsHighlight
      subHeader
      subHeaderComponent={
        <input type="text" placeholder="Search by code" className="w-25 form-control" value={search} onChange={(e) => { SetSearch(e.target.value) }} />
      }
    />
  );
};

export default Class;
