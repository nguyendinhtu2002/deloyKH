import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import AddUser from "../components/users/AddSv";

const AddUSER = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddUser />
      </main>
    </>
  );
};

export default AddUSER;
