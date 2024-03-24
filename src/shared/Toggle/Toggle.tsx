import React, { FC, useEffect, useState } from "react";
import { useCart } from "../../app/Context/CartContext";
import { cartContextValues } from "../../app/Context/model";
import { ToggleProp } from "./model";
import styles from "./Toggle.module.css";

const Toggle: FC<ToggleProp> = ({ active, onChange }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChange} />
      <span className={`${styles.slider} ${active && styles.round}`}></span>
    </label>
  );
};

export default Toggle;
