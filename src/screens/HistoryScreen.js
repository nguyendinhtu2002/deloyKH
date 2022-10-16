import React from "react";
import Header from "../components/Header";
import Sidebar from "./../components/sidebar";
import HistoryComponents from "../components/History/HistoryComponent";
const HistoryScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <HistoryComponents/>
      </main>
    </>
  );
};

export default HistoryScreen;
