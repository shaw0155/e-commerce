import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../actions/auth_actions";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function EmailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function loginHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    signIn({
      email: email,
      password: password,
    })
      .then((response) => {
        localStorage.removeItem("userToken");
        localStorage.setItem("userToken", response.data.token);
        navigate("/home");
        window.location.reload();
      })
      .catch((err) => {
        setIsErr(true);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="register-card-container">
      <form className="register-card" onSubmit={loginHandler}>
        <h1>LOGIN NOW</h1>
        {isErr && <p className="message">wrong email or password</p>}
        <input placeholder="email" onChange={EmailHandler} required />
        <input
          placeholder="enter password"
          type={"password"}
          onChange={passwordHandler}
          required
        />
        <button
          style={{ backgroundColor: "#333" }}
          className={isLoading ? "link loading" : "link"}
          type="submit"
        >
          {isLoading ? "Loading..." : "login"}
        </button>
        <p>don't have an account?</p>
        <Link className="link" to="/register">
          Register Now
        </Link>
      </form>
    </div>
  );
}

export default Login;
