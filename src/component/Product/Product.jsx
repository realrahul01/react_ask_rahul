import styles from "./Product.module.css";
import arrow from "../../assets/images/arrow-left.png";
import arrow1 from "../../assets/images/arrow-lefts.png";
import arrowDown from "../../assets/images/arrow-down.png";
import heart from "../../assets/images/heart.png";
import { useState } from "react";
import productList from "../../db";
import { FaCheck } from "react-icons/fa";
import heartRed from "../../assets/images/heartRed.png";

console.log(productList);
const Product = () => {
  const [sideItems, setSideItems] = useState([
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ]);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [isShow, setIsShow] = useState(false);
  const [isDiv, setIsDiv] = useState(false);
  const [heartState, setHeartState] = useState({});

  const divHandler = () => {
    setIsDiv((prev) => {
      return !prev;
    });
  };
  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const showHandler = () => {
    setIsShow((prev) => {
      return !prev;
    });
  };

  const heartHandler = (index) => {
    // Function to toggle heart icon for a specific product
    setHeartState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const filterOptHandler = () => {
    setIsShow((prev) => {
      return !prev;
    });
  };

  return (
    <main>
      <div className={styles.above_main}>
        <p className={styles.product_name}>DISCOVER OUR PRODUCTS</p>
        <p className={styles.lorem_sec}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora
          et eos dignissimos provident recusandae quisquam.
        </p>
      </div>

      <div className={styles.below_main}>
        <div className={styles.product_head}>
          <div className={styles.left_head}>
            <p className={styles.values} htmlFor="">
              3425 ITEMS
            </p>
            {isShow && (
              <p htmlFor="" className={styles.filter} onClick={showHandler}>
                <img src={arrow1} alt="error" />
                HIDE FILTER
              </p>
            )}
            {!isShow && (
              <p htmlFor="" className={styles.filter} onClick={showHandler}>
                <img src={arrow1} alt="error" />
                SHOW FILTER
              </p>
            )}
          </div>
          <div className={styles.res_div}>
            <label onClick={filterOptHandler} htmlFor="">
              FILTER
            </label>
          </div>
          <hr className={styles.line} />
          <div className={styles.right_head}>
            <p htmlFor="">RECOMMENDED</p>
            <img src={arrowDown} alt="error" onClick={divHandler} />
            {isDiv && (
              <div className={styles.toogle_div}>
                <p>
                  <FaCheck /> RECOMMENDED
                </p>
                <p>POPULARA</p>
                <p>NEWEST FIRST</p>
                <p>PRICE : HIGHT TO LOW</p>
                <p>PRICE : LOW TO HIGH</p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.product_section}>
          {isShow && (
            <div className={styles.left_sidebar}>
              <div className={styles.CUSTOMIZBLE}>
                <input type="checkbox" />
                <span>CUSTOMIZBLE</span>
              </div>
              {sideItems.map((ele, index) => (
                <div key={index} className={styles.list_data}>
                  <label htmlFor="">{ele}</label>

                  <img
                    src={activeIndex === index ? arrow : arrowDown}
                    alt="error"
                    onClick={() => toggleDropdown(index)}
                  />
                  <p>ALL</p>
                  {activeIndex === index && (
                    <div className={styles.cond_div}>
                      <div className={styles.unselect}>Unselected all</div>
                      <div>
                        <input type="checkbox" />
                        <span>Men</span>
                      </div>
                      <div>
                        <input type="checkbox" />
                        <span>Women</span>
                      </div>
                      <div>
                        <input type="checkbox" />
                        <span>Babies & Kids</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <div
            className={
              isShow !== true ? styles.show_product_item : styles.product_items
            }
          >
            {productList.map((x, index) => (
              <div key={index} className={styles.item_list}>
                <img src={x.image} alt="error" className={styles.list_img} />
                <div className={styles.val}>
                  <p className={styles.item_title}>{x.title}</p>
                  <img
                    src={heartState[index] ? heartRed : heart}
                    alt="error"
                    className={styles.heartSty}
                    onClick={() => heartHandler(index)}
                  />
                </div>
                <div className={styles.auth}>
                  <p>Sign in or Create an account to see pricing</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
