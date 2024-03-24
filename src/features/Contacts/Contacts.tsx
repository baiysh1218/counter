import React from "react";

import logo from "../../assets/Brand.svg";
import Like from "../../shared/Like/Like";

import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={`${styles.contact} container`}>
      <div className={styles.contacts_left}>
        <img src={logo} alt="" />
        <div>
          <p>8 800 841-95-95</p>
          <span>Служба поддержки</span>
        </div>
        <div>
          <p>support@sport.ru</p>
          <span>Служба поддержки</span>
        </div>
      </div>
      <div className={styles.contacts_right}>
        <li>Вакансии</li>
        <li>Блог</li>
        <li>Акции</li>
        <Like
          style={{
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "20px",
            textAlign: "center",
          }}
          size="medium">
          Предложить идею
        </Like>
      </div>
    </div>
  );
};

export default Contacts;
