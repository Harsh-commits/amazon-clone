import { React, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })

      .catch((error) => alert(error.message));

    //   do Some fancy firebase login shitt...
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it Successfully created a new user with email and password

        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })

      .catch((error) => alert(error.message));

    //   do Some fancy firebase register shitt...
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
          width="200px"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to terms and condition of fake AMAZON CLONE.
          Please see our privacy notice, our cookies notice and our interest
          based ads notice.
        </p>
        <button
          className="login_registerButton"
          type="submit"
          onClick={register}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
