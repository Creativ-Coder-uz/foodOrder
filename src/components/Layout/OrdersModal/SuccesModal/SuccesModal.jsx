import { useContext } from "react";
import Context from "../../../../context/Context";
import styles from "./SuccesModal.module.css";

const SuccessModal = (props) => {
  const ctx = useContext(Context);
  const succModal = () => {
    ctx.setSuccessModal(!ctx.successModal);
  };
  return (
    <>
      {ctx.successModal && (
        <div className={styles["modal"]}>
          <div className={styles["modal-overlay"]} onClick={succModal}></div>
          <div className={styles["modal-content"]}>
            {props.children}
            <button className={styles["ok-btn"]} onClick={succModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessModal;
