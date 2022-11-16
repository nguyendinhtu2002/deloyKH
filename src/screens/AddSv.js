import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import AddSv from "../components/AddSV/AddSv";

const AddSV = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddSv />
      </main>
    </>
  );
};

export default AddSV;
