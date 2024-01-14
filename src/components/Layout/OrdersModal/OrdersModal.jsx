import { useContext } from "react";
import Context from "../../../context/Context";
import styles from "./OrdersModal.module.css";

const OrdersModal = (props) => {
  const ctx = useContext(Context);
  const toggleModal = () => {
    ctx.setOpenModal(!ctx.openModal);
  };
  return (
    <>
      {ctx.openModal && (
        <div className={styles["modal"]}>
          <div className={styles["modal-overlay"]} onClick={toggleModal}></div>
          {props.children}
        </div>
      )}
    </>
  );
};

export default OrdersModal;
