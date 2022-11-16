import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../../Redux/Actions/OrderActions"; 
import axios from "axios";
const ViewClass = (props) => {
  const { Id } = props;
  console.log(Id);
  const dispatch = useDispatch();
  const [search, SetSearch] = useState('')
  const [data, setData] = useState()


  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://app-task-mana-demo.herokuapp.com/api/class/${Id}`)
                .then(data => {
                    setData(data.data.student)
                })
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchData();

    // const result = data?.filter(temp=>{
    //   return temp.code.toLowerCase().match(search.toLowerCase())
    // })
    // setData(result)
  }, [dispatch,search])

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id
    },
    {
      name: "Id User",
      selector: (row) => row.user,
      sortable: true,
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

export default ViewClass;
