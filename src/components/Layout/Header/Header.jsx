import styles from "./header.module.css";
import backbg from "../../../assets/images/backImg.png";
import watchIcon from "../../../assets/icons/watchIcon.svg";
import watchBoxBg from "../../../assets/icons/watchBoxbg.svg";
import ppFood1 from "../../../assets/images/ppfood.png";
import ppFood2 from "../../../assets/images/ppfood2.png";
import stars from "../../../assets/icons/whiteStar.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <div className={styles["left"]}>
          <h1>
            Dive into Delights Of Delectable <span>Food</span>
          </h1>
          <p>
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div className={styles["other-box"]}>
            <button className={styles["univer-btn"]}>Order now</button>
            <div className={styles["watch-box"]}>
              <a href="https://youtu.be/I_C9aFyL_qg?si=e_YZJiL34GVk0jv-">
                Watch Video{" "}
              </a>

              <img className={styles["watchBoxbg"]} src={watchBoxBg} alt="" />
              <img className={styles["watch-btn"]} src={watchIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["backbg"]}>
            <img src={backbg} alt="" />
          </div>
          <div className={styles["recommendedFoods"]}>
            <div className={styles["food"]}>
              <img src={ppFood1} alt="" />
              <div className={styles["other-items"]}>
                <h6>Spicy noodles</h6>
                <div className={styles["stars"]}>
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                </div>
                <p>
                  <span>$</span>18.00
                </p>
              </div>
            </div>
            <div className={styles["food"]}>
              {" "}
              <img src={ppFood2} alt="" />
              <div className={styles["other-items"]}>
                <h6>Vegetarian salad</h6>
                <div className={styles["stars"]}>
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                  <img src={stars} alt="" />
                </div>
                <p>
                  <span>$</span>23.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
