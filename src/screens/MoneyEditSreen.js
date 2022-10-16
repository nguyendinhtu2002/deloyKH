import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditMoneyMain from "../components/Updates/EditMoney"
const MoneyEditScreen = ({ match }) => {
    const productId = match.params.id;
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <EditMoneyMain productId={productId}/>
            </main>
        </>
    );
};
export default MoneyEditScreen;
