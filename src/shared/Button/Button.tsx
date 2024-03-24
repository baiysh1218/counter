import React, { FC } from "react";
import { ButtonProp } from "./model";
import styles from "./Button.module.css";
import { useCart } from "../../app/Context/CartContext";
import { cartContextValues } from "../../app/Context/model";

const Button: FC<ButtonProp> = ({
  children,
  style,
  size,
  disabled,
  onClick,
  cart,
  counter,
  decrement,
  increment,
}) => {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={`${styles.button} ${styles[`button_${size}`]} ${
        cart && styles.cart
      }`}
      disabled={disabled}
      style={{ ...style, padding: "12px 24px" }}>
      {!cart ? (
        children
      ) : (
        <div className={styles.counter}>
          <p onClick={decrement}>-</p>
          <span>{counter} штуки</span>
          <p onClick={increment}>+</p>
        </div>
      )}
    </button>
  );
};

export default Button;
