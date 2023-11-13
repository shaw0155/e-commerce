import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../actions/auth_actions";

function RegisterCard() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  function numberChangeHandler(event) {
    setNumber(event.target.value);
  }
  function passChangeHandler(event) {
    setPass(event.target.value);
  }
  function confirmPassChangeHandler(event) {
    setConfirmPass(event.target.value);
  }

  function registerHandler(e) {
    e.preventDefault();
    setIsLoading(true);

    signUp({
      name: name,
      email: email,
      password: pass,
      rePassword: confirmPass,
      phone: number,
    })
      .then((response) => {
        navigate("/register-success");
      })
      .catch((err) => {
        setErrMsg(
          `${err.response.data.errors.param} ${err.response.data.errors.msg} !!`
        );
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="register-card-container">
      <form className="register-card" onSubmit={registerHandler}>
        <h1>Register</h1>
        {errMsg && <p className="message">{errMsg}</p>}

        <input placeholder="username" onChange={nameChangeHandler} required />
        <input
          placeholder="Email"
          type={"email"}
          onChange={emailChangeHandler}
          required
        />
        <input
          placeholder="Phone Number"
          type={"number"}
          onChange={numberChangeHandler}
          required
        />
        <input
          placeholder="enter password"
          type={"password"}
          onChange={passChangeHandler}
          required
        />
        <input
          placeholder="confirm password"
          type={"password"}
          onChange={confirmPassChangeHandler}
          required
        />
        <button
          disabled={isLoading}
          className={isLoading ? "link loading" : "link"}
        >
          {isLoading ? "Loading..." : "create an account"}
        </button>
        <p>already have an account?</p>
        <Link className="link" to="/login">
          Login Now
        </Link>
      </form>
    </div>
  );
}

export default RegisterCard;
