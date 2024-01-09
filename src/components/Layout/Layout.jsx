import Header from "./Header/Header";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles["container"]}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
