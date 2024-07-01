import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/***Home***/Home";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const token = localStorage.getItem("token");

  console.log(token.valueOf());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
