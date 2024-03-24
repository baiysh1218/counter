import React, { FC } from "react";
import Like from "../../shared/Like/Like";
import { NavbarProps } from "./model";
import message from "../../assets/message.svg";
import per_send from "../../assets/per_send.svg";

import styles from "./Navbar.module.css";

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={`${styles.navbar} container`}>
        <ul>
          <li>Мои заказы</li>
          <li>Сотрудники</li>
          <li>Шаблоны заказов</li>
          <li>Обращения</li>
        </ul>
        <ul>
          <Like size="small">
            <img src={message} alt="" /> Ваш менеджер
          </Like>
          <li>
            <img src={per_send} alt="" />
            Акции
          </li>
          <li>Блог</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
