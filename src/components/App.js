import React, { useState } from "react";
import "./App.css";
import Logo from "../img/logo.png";
import MainForm from "./MainForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div id="app">
      <header>
        <img src={Logo} id="logo" />
        <nav>
          <a href="#">Menu</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <button onClick={() => setShowForm(true)}>Log in</button>
        </nav>
      </header>
      <main>{showForm && <MainForm setShowForm={setShowForm} />}</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
