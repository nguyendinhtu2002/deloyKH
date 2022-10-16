import React, { useEffect } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../Redux/Actions/WalletAction";

const MainCategories = () => {
  const dispatch = useDispatch();
  const getWalletBalance = useSelector((state) => state.getWalletBalance);
  const { balance } = getWalletBalance

  useEffect(() => {
    dispatch(getBalance())
  }, [dispatch])
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Wallet</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create category */}
            <CreateCategory balance={balance}/>
            {/* Categories table */}
            {/* <CategoriesTable /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
