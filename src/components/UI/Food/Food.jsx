import styles from "./Food.module.css";
import { useContext } from "react";
import Context from "../../../context/Context";
const Food = ({ food }) => {
  const ctx = useContext(Context);
  const addOrders = () => {
    const isHave = ctx.orders.filter((e) => e.name === food.name);
    if (isHave.length > 0) {
      const newArr = ctx.orders.map((e) => {
        if (e.name === food.name) {
          const newObj = { ...e, count: e.count + 1 };
          return newObj;
        }
        {
          return e;
        }
      });
      ctx.setOrders((prev) => newArr);
    } else {
      const obj = { ...food, count: 1 };
      ctx.setOrders((prev) => {
        return [...prev, obj];
      });
    }
  };
  return (
    <div className={styles["food-card"]}>
      <img src={food.image} alt="" />
      <h3 className={styles["foodName"]}>{food.name}</h3>
      <p className={styles["foodPrice"]}>{food.price + " so'm"}</p>

      <button
        type="button"
        className={styles["addOrders-btn"]}
        onClick={addOrders}
      >
        {" "}
        Add to Cart
      </button>
    </div>
  );
};

export default Food;
