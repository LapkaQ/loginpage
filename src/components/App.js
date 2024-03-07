import "./App.css";
import Logo from "../img/logo.png";
import background1 from "../img/background1.png";
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
        <form className="form">
          <h1>Login</h1>
          <input type="text" />
          <input type="text" />
        </form>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
