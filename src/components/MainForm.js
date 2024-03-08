import React, { useState } from "react";
import "./MainForm.css";
const MainForm = () => {
  const [activeForm, setActive] = useState(false);
  return (
    <form className="form">
      <div class={activeForm ? "loginForm" : "loginForm activeLoginForm"}>
        <h1>Login</h1>
        <div className="chooseMethod">
          <button
            className="formButton active"
            onClick={() => setActive(false)}
          >
            Login
          </button>
          <button className="formButton" onClick={() => setActive(true)}>
            Singup
          </button>
        </div>
        <div className="inputsForm">
          <div className="inputForm">
            <input type="text" placeholder="Username" required />
            <span class="material-symbols-outlined inputIcon">person</span>
          </div>
          <div className="inputForm">
            <input type="password" placeholder="Password" required />
            <span class="material-symbols-outlined inputIcon">lock</span>
          </div>
          <a href="" id="forgot">
            Forgot password?
          </a>
        </div>

        <button className="formButton active">Login</button>
      </div>

      <div class={activeForm ? "loginForm activeRegisterForm" : "loginForm"}>
        <h1>Register</h1>
        <div className="chooseMethod">
          <button className="formButton" onClick={() => setActive(false)}>
            Login
          </button>
          <button className="formButton active" onClick={() => setActive(true)}>
            Singup
          </button>
        </div>
        <div className="inputsForm">
          <div className="inputForm">
            <input type="text" placeholder="Username" required />
            <span class="material-symbols-outlined inputIcon">person</span>
          </div>
          <div className="inputForm">
            <input type="text" placeholder="Email" required />
            <span class="material-symbols-outlined inputIcon">mail</span>
          </div>
          <div className="inputForm">
            <input type="password" placeholder="Password" required />
            <span class="material-symbols-outlined inputIcon">lock</span>
          </div>
        </div>

        <button className="formButton active">Singup</button>
      </div>
    </form>
  );
};

export default MainForm;
