import React from "react";
import Sidebar from "../../Sidebar";
import Css from "./home.module.css";
import Navbar from "../navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Company from "../company/Company";
import Users from "../users/Users";
import Product from "../products/Product";
import Transfer from "../transfer/Transfer";
import Action from "../action/Action";
const Home = () => {
  return (
    <div className={Css.container}>
      <Sidebar />
      <div className={Css.body}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/transfer" element={<Transfer />}></Route>
          <Route path="/action" element={<Action />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Home;
