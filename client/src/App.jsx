import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/***Home***/Home";
import axios from "axios";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
