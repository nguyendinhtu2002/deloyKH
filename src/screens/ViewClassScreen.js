import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ViewClass from "../components/class/ViewClass";

const ViewClassScreen = ({ match }) => {
    const Id = match.params.id;

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ViewClass Id={Id} />
      </main>
    </>
  );
};

export default ViewClassScreen;
