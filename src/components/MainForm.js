import React, { useState } from "react";
import "./MainForm.css";

const LoginForm = ({ setLoginForm, loginForm, setShowForm }) => {
  const handleClick = (e, value) => {
    e.preventDefault();
    setLoginForm(value);
  };

  return (
    <div className="loginForm">
      <span
        className="material-symbols-outlined"
        id="closeButton"
        onClick={() => setShowForm(false)}
      >
        close
      </span>
      <h1>{loginForm ? "Login" : "Signup"}</h1>
      <div className="chooseMethod">
        <button
          className={`formButton ${loginForm ? "active" : ""}`}
          onClick={(e) => handleClick(e, true)}
        >
          Login
        </button>
        <button
          className={`formButton ${!loginForm ? "active" : ""}`}
          onClick={(e) => handleClick(e, false)}
        >
          Signup
        </button>
      </div>
      <div className="inputsForm" id="usernameInputForm">
        <div className="inputForm">
          <input type="text" placeholder="Username" />
          <span className="material-symbols-outlined inputIcon">person</span>
        </div>
        {!loginForm && (
          <div className="inputForm" id="emailInputForm">
            <input type="text" placeholder="Email" />
            <span className="material-symbols-outlined inputIcon">mail</span>
          </div>
        )}
        <div className="inputForm" id="passowrdInputForm">
          <input type="password" placeholder="Password" />
          <span className="material-symbols-outlined inputIcon">lock</span>
        </div>
        {loginForm && (
          <a href="" id="forgot">
            Forgot password?
          </a>
        )}
      </div>
      <button
        className={`formButton active`}
        onClick={(e) => handleClick(e, loginForm)}
      >
        {loginForm ? "Login" : "Signup"}
      </button>
    </div>
  );
};

const MainForm = (props) => {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <form className="form">
      <LoginForm
        setLoginForm={setLoginForm}
        loginForm={loginForm}
        setShowForm={props.setShowForm}
      />
    </form>
  );
};

export default MainForm;
