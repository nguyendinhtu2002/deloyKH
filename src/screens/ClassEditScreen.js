import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import EditClass from "../components/class/EditClass";

const OrderEditScreen = ({ match }) => {
  const productId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditClass productId={productId} />
      </main>
    </>
  );
};
export default OrderEditScreen;
