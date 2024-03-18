import styles from "./Footer.module.css";
import usa from "../../assets/images/United States of America (US).png";
import vector from "../../assets/images/Vector.png";
import svg from "../../assets/images/svg.png";
import Group from "../../assets/images/Group 136188.png";
import pay from "../../assets/images/Group 136195.png";
import circle from "../../assets/images/Group 136190.png";
import paypal from "../../assets/images/Group 136192.png";
import amrex from "../../assets/images/Group 136193.png";
import gps from "../../assets/images/Group 136194.png";
import { BsDot } from "react-icons/bs";
import arrowDown from "../../assets/images/arrow-down.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className={styles.above_foot}>
        <div className={styles.left_footer}>
          <p>BE THE FIRST TI KNOW</p>
          <p>Sign Up for updates from metta muse</p>
          <input type="text" />
          <button>Subscribe</button>
        </div>
        <div className={styles.right_footer}>
          <h4>CONTACT US</h4>
          <p className={styles.ght}>
            <hr />
          </p>
          <br />
          <h4 className={styles.call}>CALL US</h4>
          <span>+44 221 133 5360</span>
          <BsDot />
          <span className={styles.jh}>customercare@mettamuse.com</span>
          <p className={styles.ght}>
            <hr />
          </p>
          <h3>CURRENCY</h3>
          <img src={usa} alt="error" />
          <span>.USA</span>
          <p className={styles.ght}>
            <hr />
          </p>
          <p className={styles.fdh}>
            Transition will be completed in Euros and a currency reference is
            available on hover
          </p>
        </div>
      </div>
      <div className={styles.horizontal_line}>
        <hr />
      </div>
      <div className={styles.below_foot}>
        <div className={styles.foot1}>
          <h3>Metta muse</h3>
          <p>About us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Bautiques</p>
          <p>Contact Us</p>
          <p>Eu Compilence Docs</p>
          <label htmlFor="" className={styles.srr}>
            <MdOutlineKeyboardArrowDown />
          </label>
        </div>
        <label className={styles.uyt}>
          <hr />
        </label>
        <div className={styles.foot2}>
          <h3>QUICK LINKS</h3>
          <p>Orders & Shipping</p>
          <p>Join /Login as a Deller</p>
          <p>Payment and Pricing</p>
          <p>FAQS</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <label htmlFor="" className={styles.srr}>
            <MdOutlineKeyboardArrowDown />
          </label>
        </div>
        <label className={styles.uyt}>
          <hr />
        </label>
        <div className={styles.foot3}>
          <h3>FOLLOW US</h3>
          <label htmlFor="" className={styles.srr}>
            <MdOutlineKeyboardArrowDown />
          </label>

          <label className={styles.uyt}>
            <hr />
          </label>
          <div className={styles.icons}>
            <img src={vector} alt="error" />
            <img src={svg} alt="error" />
          </div>
          <p>metta muse ACCEPTS</p>
          <div className={styles.pay_logo}>
            <img src={Group} alt="error" className={styles.foot_images} />
            <img src={circle} alt="error" className={styles.foot_images} />
            <img src={paypal} alt="error" className={styles.foot_images} />
            <img src={amrex} alt="error" className={styles.foot_images} />
            <img src={gps} alt="error" className={styles.foot_images} />
            <img src={pay} alt="error" className={styles.foot_images} />
          </div>
        </div>
      </div>
      <p className={styles.foot_end}>
        Copyright @ 2023 mettamuse. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
