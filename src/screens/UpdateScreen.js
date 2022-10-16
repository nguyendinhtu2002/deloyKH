import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import Money from "../components/Updates/MoneyCoponent";
const UpdatesScreen = () => {
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <Money />
            </main>
        </>
    );
};

export default UpdatesScreen;
