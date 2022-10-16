import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditMessageMain from "../components/Message/EditMessageMain";
const MessageEditScreen = ({ match }) => {
  const productId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditMessageMain/>
      </main>
    </>
  );
};
export default MessageEditScreen;
