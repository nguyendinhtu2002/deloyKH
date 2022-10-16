import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import MessageComponent from "../components/Message/MessageComponent"
const MessageScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MessageComponent/>
      </main>
    </>
  );
};

export default MessageScreen;
