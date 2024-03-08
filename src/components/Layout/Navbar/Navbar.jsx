import styles from "./Navbar.module.css";
import F_Icon from "../../../assets/icons/F.svg";
import oodiIcon from "../../../assets/icons/oodi.svg";
import downIcon from "../../../assets/icons/down.svg";
import searchIcon from "../../../assets/icons/search.svg";
import OrderBagIcon from "../../../assets/icons/korzina.svg";
import successIcon from "../../../assets/successIcon.mp4";
import { useContext, useRef } from "react";
import Context from "../../../context/Context";
import OrdersList from "../../UI/OrdersList/OrdersList";
import SuccessModal from "../OrdersModal/SuccesModal/SuccesModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("responsive_nav");
    // console.log(navRef);
  };
  const ctx = useContext(Context);
  const toggleModal = () => {
    ctx.setOpenModal(!ctx.openModal);
  };
  return (
    <div className={styles["navbar"]}>
      <SuccessModal>
        <video src={successIcon} autoPlay></video>
        <h1>Buyurtmangiz qabul qilindi!</h1>
      </SuccessModal>
      <OrdersList />
      <h1 className={styles["logoName"]}>
        <img className={styles["F_icon"]} src={F_Icon} alt="" />{" "}
        <img className={styles["oodiIcon"]} src={oodiIcon} alt="" />
      </h1>
      <ul ref={navRef}>
        <li>
          <a>Home</a>
        </li>
        <li>
          Menu <img src={downIcon} alt="" />
        </li>
        <li>
          Services
          <img src={downIcon} alt="" />
        </li>
        <li>Offers</li>
        <Link to="/login">
          <button className={styles["univer-btn"]}>Log Out</button>
        </Link>
        <span onClick={showMenu} className={styles["x-btn"]}>
          X
        </span>
      </ul>
      <div className={styles["menu-btns"]}>
        <img src={searchIcon} alt="" />
        <img
          className={styles["ordersBag"]}
          src={OrderBagIcon}
          alt=""
          onClick={toggleModal}
        />
        <span className={ctx.orders.length > 0 ? styles["ordersCount"] : ""}>
          {ctx.orders.length < 1 ? "" : ctx.orders.length}
        </span>

        <Link to="/login">
          <button className={styles["univer-btn"]}>Log Out</button>
        </Link>

        <span className={styles["burger-btn"]} onClick={showMenu}>
          ☰
        </span>
      </div>
    </div>
  );
};

export default Navbar;
