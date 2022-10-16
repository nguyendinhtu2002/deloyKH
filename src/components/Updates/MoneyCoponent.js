import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCashFlow } from '../../Redux/Actions/CashFlowAction'
import { deleteWallet, getBalance } from '../../Redux/Actions/WalletAction'

export default function Money() {
  const dispatch = useDispatch()
  const getWalletBalance = useSelector((state) => state.getWalletBalance)
  const { balance } = getWalletBalance
  useEffect(() => {
    dispatch(getBalance())
  }, [])
  const handlerDelete = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteWallet(id))
      window.location.reload();
    }
  }
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
      name: "Balance",
      selector: (row) => (row.balance.toFixed(2))
    },
    {
      name: "Action",
      selector: (row) =>
        <div className="d-flex justify-content-around">
          <button type="button" onClick={() => handlerDelete(row._id)} className="btn ">Delete</button>
          <Link to={`/editMoney/${ row.user}`} className="text-success">
            <button type="button" className="btn ">Edit</button>

          </Link>
        </div>
    }
  ]
  return (
    <div>
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
          // value={search} onChange={(e) => { SetSearch(e.target.value) }}
          <input type="text" placeholder="Search here" className="w-25 form-control" />
        }
      />
    </div>
  )
}
