import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useContext, useState } from "react";
import Context from "../../../context/Context";

const Login = () => {
  const ctx = useContext(Context);
  const [trueLogin, setLogin] = useState(false);
  const [truePassword, setPassword] = useState(false);
  return (
    <>
      <div className={styles["container"]}>
        <h2>
          <strong>FOODI</strong> Login
        </h2>
        <form
          onChange={() => {
            {
              trueLogin && truePassword
                ? ctx.setVerify(true)
                : ctx.setVerify(false);
            }
          }}
        >
          <div className={styles["input-box"]}>
            <input
              type="text"
              placeholder="Enter username"
              required
              onInput={(e) => {
                e.target.value.length > 2 ? setLogin(true) : setLogin(false);
              }}
              className={styles[trueLogin ? "true" : "error"]}
            />
            <span>{trueLogin ? "✅" : "❌"}</span>
          </div>
          <div className={styles["input-box"]}>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onInput={(e) => {
                e.target.value.length > 8
                  ? setPassword(true)
                  : setPassword(false);
              }}
              className={styles[truePassword ? "true" : "error"]}
            />
            <span>{truePassword ? "✅" : "❌"}</span>
          </div>
          <div className={styles["login-btn"]}>
            <Link to={"/home"}>
              <button
                type="button"
                className={
                  styles[trueLogin && truePassword ? "onBtn" : "offBtn"]
                }
                disabled={trueLogin && truePassword ? false : true}
              >
                Login Now
              </button>
            </Link>
          </div>
          {/* <div className={styles["text"]}>
            <h3>
              haven't an account? <Link to="/register">Register now</Link>
            </h3>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;
