import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import axios from "./api/axios";
import "./LoginForm.css";
import DefaultButton from "../default/DefaultButton";
import Logo from "../default/Logo";

const LOGIN_URL = "/auth";

const LoginForm = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setErrMsg("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setUser("");
      setPwd("");
      setSuccess(true);
      localStorage.setItem("user", JSON.stringify(response.data));
      setCookie("user", JSON.stringify(response.data), { path: "/" });

      console.log(cookies.user);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  if (cookies.user != null) {
    history.push("/");
  }

  return (
    <div className="individual-page-body">
    <div className="logo-signing-page ">
        <Logo></Logo>
    </div>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <div className="signin-section-outer">
          <section className="signin-section-inner">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <form className="signing-form" onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                className="form-control"
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className="form-control"
              />
              <button hidden></button>
              <div onClick={handleSubmit}className="signin-page-button">

                <DefaultButton title={"Sign-in"}></DefaultButton>
              </div>
              <p>
                Need an Account?
                <br />
                <span className="line">
                  {/*put router link here*/}
                  <a href="/signup">Sign Up</a>
                </span>
              </p>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
