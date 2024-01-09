import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useContext } from "react";
import Context from "../../../context/Context";
const Register = () => {
  const ctx = useContext(Context);

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
            onBlur={(e) => {
              ctx.setUser({ firstName: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="text"
            placeholder="Enter your email"
            required
            onBlur={(e) => {
              ctx.setUser({ ...ctx.user, email: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            placeholder="Create password"
            required
            onBlur={(e) => {
              ctx.setUser({ ...ctx.user, password: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            placeholder="Confirm password"
            required
            onBlur={(e) => {
              ctx.setUser({ ...ctx.user, cPassword: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <Link to="/home">
            <button
              type="button"
              disabled={ctx.user.password === ctx.user.cPassword ? false : true}
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
