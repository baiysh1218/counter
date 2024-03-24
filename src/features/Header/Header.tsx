import React, { useState } from "react";
import styles from "./Header.module.css";

import logo from "../../assets/Brand.svg";
import White from "../../assets/White.svg";
import notification from "../../assets/notification.svg";
import favorite from "../../assets/favorite.svg";
import cart from "../../assets/Cart.svg";
import avatar from "../../assets/Avatar.png";
import Arrow from "../../assets/arrowBottom.svg";

import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import Like from "../../shared/Like/Like";
import { useCart } from "../../app/Context/CartContext";
import { cartContextValues } from "../../app/Context/model";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const handleClearInput = () => {
    setSearch("");
  };

  const { totalCount } = useCart() as cartContextValues;
  return (
    <div className={`container ${styles.header}`}>
      <img src={logo} alt="" />
      <Button>
        <img src={White} alt="" />
        Меню
      </Button>
      <Input
        handleClearInput={handleClearInput}
        value={search}
        placeholder="Название запроса"
        onChange={e => setSearch(e.target.value)}
        type="text"
        search={true}
      />
      <img src={notification} alt="" />
      <hr />
      <img src={favorite} alt="" />
      <Like
        style={{
          width: "20%",
          display: "flex",
          fontSize: "14px",
          fontWeight: "700",
        }}
        size="medium">
        <img src={cart} alt="" />
        {totalCount ? totalCount : 0}
      </Like>
      <div className={styles.avatar}>
        <img src={avatar} alt="" />
        Ермаков Е.
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Header;
