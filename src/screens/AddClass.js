import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import AddClassMain from "../components/class/AddClassMain";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddClassMain />
      </main>
    </>
  );
};

export default AddProduct;
