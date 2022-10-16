import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listMessage } from '../../Redux/Actions/MessageAction';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from "react-router-dom"
import DataTable from 'react-data-table-component'

const MessageComponent = () => {
    const dispatch = useDispatch();
    const messageList = useSelector((state) => state.messageList)
    const { loading, message, error } = messageList
    const columns = [
        {
            name: "ID",
            selector: (row) => row._id
        },
        {
            name: "ID User",
            selector: (row) => row.user
        },
        {
            name: "Order",
            selector: (row) => row.reportOrder[0].order
        },
        {
            name: "Request",
            selector: (row) => row.reportOrder[0].Request
        },
        {
            name: "Message",
            selector: (row) => row.reportOrder[0].message
        },
        {
            name: "RepMessage",
            selector: (row) => row.reportOrder[0].repmessage
        },
        {
            name: "Status",
            selector: (row) => row.reportOrder[0].status
        },
        {
            name: "Action",
            selector: (row) => <>
                {/* onClick={() => handlerDelete(row._id)} */}
                <div className="d-flex justify-content-around">
                    <button type="button" className="btn ">Delete</button>
                    <Link to={`/editMessage/${row._id}`} className="text-success">
                        <button type="button" className="btn ">Edit</button>

                    </Link>
                </div>

            </>
        }
    ]
    useEffect(() => {
        dispatch(listMessage())
    }, [dispatch])
    return (
        <div>
            <section className="content-main">

                {/* Card */}
                <div className="card-body">
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <Message variant="alert-danger">{error}</Message>
                    ) : (
                        <DataTable
                            columns={columns}
                            data={message}
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
                    )}

                </div>
            </section>
        </div>
    )
}

export default MessageComponent