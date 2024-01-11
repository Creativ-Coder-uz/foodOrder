import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useContext, useState } from "react";
import Context from "../../../context/Context";
const Register = () => {
  const ctx = useContext(Context);
  const [noVerify, setVerify] = useState(true);
  const checker = (username, email, password, confirmPassword) => {
    if (!username || !email || !password || password !== confirmPassword) {
      setVerify(true);
      alert("error");
    } else {
      setVerify(false);
    }
  };
  return (
    <div className={styles["container"]}>
      <h2>
        <strong>FOODI</strong> Registration
      </h2>
      <form>
        <div className={styles["input-box"]}>
          <input
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => {
              ctx.setUser({ username: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="text"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              ctx.setUser({ ...ctx.user, email: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            placeholder="Create password"
            required
            onChange={(e) => {
              ctx.setUser({ ...ctx.user, password: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) => {
              ctx.setUser({ ...ctx.user, confirmPassword: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <Link to={noVerify ? "/register" : "/home"}>
            <button
              // disabled={noVerify}
              type="button"
              title="ro'yxatdan o'tish uchun 2 marta bosing"
              onClick={() => {
                checker(
                  ctx.user.username,
                  ctx.user.email,
                  ctx.user.password,
                  ctx.user.confirmPassword
                );
              }}
            >
              Register Now
            </button>
          </Link>
        </div>
        <div className={styles["text"]}>
          <h3>
            Already have an account? <Link to="/login">Login now</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Register;
