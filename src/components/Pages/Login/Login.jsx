import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useContext, useState } from "react";
import Context from "../../../context/Context";

const Login = () => {
  const [userLogin, setUserLogin] = useState([]);
  const [isVerify, setIsVerify] = useState(false);
  const ctx = useContext(Context);
  const checker = () => {
    if (ctx.user.firstName !== userLogin[0]) {
      setIsVerify(true);
      console.log(isVerify);
    }
  };
  return (
    <>
      <div className={styles["container"]}>
        <h2>
          <strong>FOODI</strong> Login
        </h2>
        <form>
          <div className={styles["input-box"]}>
            <input
              type="text"
              placeholder="Enter your name"
              required
              onBlur={(e) => {
                setUserLogin((prev) => [...prev, e.target.value]);
              }}
            />
          </div>
          <div className={styles["input-box"]}>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onBlur={(e) => {
                setUserLogin((prev) => [...prev, e.target.value]);
              }}
            />
          </div>
          <div className={styles["input-box"]}>
            <Link to="/home">
              <button
                type="button"
                onClick={() => {
                  checker();
                }}
                // disabled={true}
              >
                Login Now
              </button>
            </Link>
          </div>
          <div className={styles["text"]}>
            <h3>
              haven't an account? <Link to="/register">Register now</Link>
            </h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
