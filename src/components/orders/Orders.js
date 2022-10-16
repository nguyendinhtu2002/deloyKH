import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from "react-redux";
import { listStatus } from "../../Redux/Actions/statusActions";
import { deleteOrder } from "../../Redux/Actions/OrderActions";

const Orders = (props) => {
  const { orders } = props;
  const dispatch = useDispatch();
  const statusOrders = useSelector((state) => state.statusOrders)
  const { status } = statusOrders
  const [search, SetSearch] = useState('')
  const [data,setData] = useState(orders)
  

  const arr = []
  const handlerDelete = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteOrder(id))
    }
  }

  useEffect(() => {
    dispatch(listStatus(arr.toString()))
    const result = orders.filter(idUser=>{
      return idUser.user.toLowerCase().match(search.toLowerCase())
    })
    setData(result)
  }, [dispatch,search])
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id
    },
    {
      name: "ID User",
      selector: (row) => row.user,
      sortable: true,
    },
    {
      name: "Service",
      selector: (row) => (arr.push(row.orderItems[0].order), row.orderItems[0].service)
    },
    {
      name: "Quality",
      selector: (row) => row.orderItems[0].qty
    },
    {
      name: "Link",
      selector: (row) => row.orderItems[0].link
    },
    {
      name: "Total Price",
      selector: (row) => row.totalPrice
    }, {
      name: "Status",
      selector: (row) =>  status[row?.orderItems[0].order]?.status
    },
    {
      name: "Action",
      selector: (row) =>
        <button type="button" onClick={() =>  handlerDelete(row._id) } className="btn btn-primary">Delete</button>
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
        <input type="text" placeholder="Search here" className="w-25 form-control" value={search} onChange={(e)=>{SetSearch(e.target.value)}}/>
      }
    />
  );
};

export default Orders;
