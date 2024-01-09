import { data } from "../../Helper/data";
import Food from "../Food/Food";
import styles from "./AllFoods.module.css";

const AllFoods = () => {
  if (data.length < 1) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className={styles["allFoods"]}>
        <h1 className={styles["title"]}>Foods for you</h1>
        <div className={styles["container"]}>
          {data.map((food) => (
            <Food key={food.name} food={food} />
          ))}
        </div>
      </div>
    );
  }
};

export default AllFoods;
