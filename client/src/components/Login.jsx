import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/v1/auth", {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.success === true) {
        navigate("/home"); // Navigate to '/home' on successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      console.log("aldaa garlaa");
    }
  };

  return (
    <div className={css.background}>
      <div className={css.shape}></div>
      <div className={css.shape}></div>

      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Email</label>
        <input
          type="text"
          placeholder="Email"
          className={css.username}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          className={css.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
