import img1 from "../../assets/images/element-4.png";
import styles from "./Header.module.css";
import logo from "../../assets/images/Logo.png";
import searchImg from "../../assets/images/search-normal.png";
import heart from "../../assets/images/heart.png";
import shopping_bag from "../../assets/images/shopping-bag.png";
import profile from "../../assets/images/profile.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const menuHandler = () => {
    setIsMenu((prev) => {
      return !prev;
    });
  };

  return (
    <nav>
      <div className={styles.above_nav}>
        <label className={styles.val} htmlFor="lorem">
          <img src={img1} alt="error" />
          <span>Lorem ipsum dolar</span>
        </label>
        <label htmlFor="lorem">
          <img src={img1} alt="error" />
          <span>Lorem ipsum dolar</span>
        </label>
        <label className={styles.val} htmlFor="lorem">
          <img src={img1} alt="error" />
          <span>Lorem ipsum dolar</span>
        </label>
      </div>
      <div className={styles.middle_nav}>
        <div className={styles.left_nav}>
          <FiMenu onClick={menuHandler} className={styles.menu} />
          <img src={logo} alt="error" />
        </div>
        {isMenu && (
          <div className={styles.menu_show}>
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        )}
        <div className={styles.mid_nav}>LOGO</div>
        <div className={styles.right_nav}>
          <ul>
            <li>
              <img src={searchImg} alt="error" />
            </li>
            <li>
              <a href="#">
                <img src={heart} alt="error" />
              </a>
            </li>
            <li>
              <img src={shopping_bag} alt="error" />
            </li>
            <li>
              <a href="#">
                <img src={profile} alt="error" className={styles.d1} />
              </a>
            </li>
            <select name="language" id="language" className={styles.language}>
              <option value="eng">ENG</option>
              <option value="hindi">HINDI</option>
            </select>
          </ul>
        </div>
      </div>
      <div className={styles.below_nav}>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
