import notFound from "../../../assets/images/notFound.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles["container"]}>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
