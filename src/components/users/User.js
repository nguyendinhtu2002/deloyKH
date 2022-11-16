import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import DataTable from 'react-data-table-component'

import axios from "axios";

const User = (props) => {
  const { users } = props;
  const [data, setData] = useState(users)
  const [search, SetSearch] = useState('')

  useEffect(() => {
    const result = users?.filter(temp => {
      return temp.name.toLowerCase().match(search.toLowerCase())
    })
    setData(result)
  }, [search])
  const columns = [
    {
      name: "ID",
      selector: (row) => (row._id)
    },
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "Email",
      selector: (row) => row.email
    },
    {
      name: "Role",
      selector: (row) => row.role
    },


  ]
  // useEffect(() => {
  //   dispatch(listUser());

  // }, [dispatch]);



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
        <input type="text" placeholder="Search here" className="w-25 form-control" value={search} onChange={(e) => { SetSearch(e.target.value) }} />
      }

    />
  );
};

export default User;
