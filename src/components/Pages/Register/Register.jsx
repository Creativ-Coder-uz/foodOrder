import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useContext } from "react";
import Email from "emailjs-com";
import Context from "../../../context/Context";
const Register = () => {
  const ctx = useContext(Context);

  const SendCode = () => {
    const username = ctx.user.username;
    const email = ctx.user.email;
    const mainMessage = `Assalom Aleykum, ${username}. Foodi Appda ro'yxatdan o'tish uchun tasdiqlash kodingiz: ${verifyCode}`;
    const verifyCode = Math.floor(Math.random() * 10000);

    Email.send({
      SecureToken: "C3C0C3D22A59B3751CCA9A8623224B4FA6C7",
      To: email,
      From: "Foodi App",
      Subject: "This is the subject",
      Body: mainMessage,
    }).then((message) => alert(message));
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
            onBlur={(e) => {
              ctx.setUser({ username: e.target.value });
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
              ctx.setUser({ ...ctx.user, confirmPassword: e.target.value });
            }}
          />
        </div>
        <div className={styles["input-box"]}>
          <Link to="/home">
            <button type="button" onClick={SendCode}>
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
