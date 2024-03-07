import "./App.css";
import Logo from "../img/logo.png";
import MainForm from "./MainForm";
function App() {
  return (
    <div id="app">
      <header>
        <img src={Logo} id="logo" />
        <nav>
          <a href="#">Menu</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <button>Log in</button>
        </nav>
      </header>
      <main>
        <MainForm />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
