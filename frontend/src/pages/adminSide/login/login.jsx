import { useState } from "react";
import { useLogin } from "../../../hooks/useLogin.jsx";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-light" />
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <input type="checkbox" className="input-check" id="input-check" />
          <label htmlFor="input-check" className="toggle">
            <span className="text off">off</span>
            <span className="text on">on</span>
          </label>
          <div className="light" />
          <h2 className="h2-login">Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail" />
            </span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label>Email</label>
            <div className="input-line" />
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed" />
            </span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label>Password</label>
            <div className="input-line" />
          </div>
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
