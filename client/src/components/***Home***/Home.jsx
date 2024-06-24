import React from "react";
import Sidebar from "../../Sidebar";
import Css from "./home.module.css";
import Navbar from "../navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
const Home = () => {
  return (
    <div className={Css.container}>
      <Sidebar />
      <div className={Css.body}>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Home;
