import React from "react";
import "./Login.css";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <img src={logo} alt="Queue-Less" className="login__logo" />
      </div>

      <div className="sub-content">
        <h1>Queue-Less</h1>
      </div>

      <div className="title">
        <p>Login to your account</p>
      </div>

      <div className="input-container">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;