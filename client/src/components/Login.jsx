import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import css from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State for error message
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:2030/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("Response from server:", response.data); // Log response for debugging

      if (response.data.success) {
        navigate("/home"); // Navigate on successful login
      }
      setError(response.data.error); // Set error message
    } catch (error) {
      console.error("Error during login request:", error);
      setError("Internetiin asuudal garlaa");
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
        {error && <p className={css.error}>{error}</p>}{" "}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
