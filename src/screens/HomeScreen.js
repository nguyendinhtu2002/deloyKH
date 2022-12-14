import React from "react";
import Header from "../components/Header";
import MainUser from "../components/users/MainUser";
import Sidebar from "./../components/sidebar";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainUser />
      </main>
    </>
  );
};

export default HomeScreen;
