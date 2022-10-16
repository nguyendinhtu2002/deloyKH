import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditUserMain from "../components/users/EdituserMain"

const UserEditScreen = ({ match }) => {
  const productId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditUserMain productId={productId} />
      </main>
    </>
  );
};
export default UserEditScreen;
