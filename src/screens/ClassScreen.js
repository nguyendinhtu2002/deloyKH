import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ClassMain from "../components/class/ClassMain";

const OrderScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ClassMain />
      </main>
    </>
  );
};

export default OrderScreen;
