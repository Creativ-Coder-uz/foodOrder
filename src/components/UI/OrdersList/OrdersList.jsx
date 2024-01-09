import styles from "./OrdersList.module.css";
import OrdersModal from "../../Layout/OrdersModal/OrdersModal";
import Context from "../../../context/Context";
import emptyImg from "../../../assets/images/empty.png";
import { useContext } from "react";
const OrdersList = () => {
  const ctx = useContext(Context);
  const removeOrder = (id) => {
    ctx.setOrders((prev) => prev.filter((f) => f.id !== id));
  };
  const toOrder = (id) => {
    ctx.setOrders((prev) => prev.filter((f) => f.id !== id));
    succModal();
    toggleModal();
  };
  const succModal = () => {
    ctx.setSuccessModal(!ctx.successModal);
    toggleModal();
  };
  const toggleModal = () => {
    ctx.setOpenModal(!ctx.openModal);
  };
  const totalPrice = ctx.orders.reduce((acc, food) => {
    const price = +food.price * food.count;
    return acc + price;
  }, 0);
  return (
    <OrdersModal>
      <div
        className={
          ctx.orders.length < 1
            ? styles["modal-empty"]
            : styles["modal-content"]
        }
      >
        {/*=========================================================== Buyurtmalar mavjud bo'lsa */}
        {ctx.orders.length > 0 && (
          <div>
            <button
              className={styles["clear-cart-btn"]}
              onClick={() => {
                ctx.setOrders([]);
              }}
            >
              Clear all
            </button>
            <table className={styles["table"]}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>count</th>
                  <th>events</th>
                </tr>
              </thead>
              <tbody className={styles["tbody"]}>
                {ctx.orders.map((food) => {
                  return (
                    <tr key={food.id}>
                      <td>{food.name}</td>
                      <td>{food.price + " so'm"}</td>
                      <td>
                        <input
                          className={styles["ordersCount"]}
                          type="number"
                          defaultValue={food.count}
                          onInput={(e) => {
                            food.count = +e.target.value;
                          }}
                          min={1}
                          max={20}
                        />
                      </td>
                      <td className={styles["events"]}>
                        <button
                          className={styles["toOrder"]}
                          onClick={toOrder.bind(null, food.id)}
                        >
                          To order
                        </button>
                        <button
                          onClick={removeOrder.bind(null, food.id)}
                          className={styles["removeOrder"]}
                        >
                          remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total">
              <h2 className={styles["total-price"]}>
                Total Price: {totalPrice + " so'm"}
              </h2>
              <button
                className={styles["order-all-btn"]}
                onClick={() => {
                  succModal();
                  ctx.setOrders([]);
                }}
              >
                Order all
              </button>
            </div>
          </div>
        )}
        {/*============================================================= Buyurtmalar yo'q bo'lsa */}
        {ctx.orders.length < 1 && (
          <h2 className={styles["empty"]}>
            your orders will be visible here
            <img src={emptyImg} alt="" />
          </h2>
        )}

        <div className={styles["ctrls"]}>
          <button className={styles["close-btn"]} onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </OrdersModal>
  );
};

export default OrdersList;
