import "./MainForm.css";
const MainForm = () => {
  return (
    <form className="form">
      <h1>Login</h1>
      <div className="loginInputs">
        <label>Username</label>
        <input type="text" id="UsernameInput" />
      </div>
      <div className="loginInputs">
        <label>Password</label>
        <input type="password" id="PasswordInput" />
      </div>
      <a href="" id="forgotPassword">
        Forgot Password?
      </a>
      <button id="SignUp">Sign up</button>
      <div id=""></div>
    </form>
  );
};

export default MainForm;
