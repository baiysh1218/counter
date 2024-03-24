import React, { FC, useState } from "react";
import { InputProp } from "./model";
import styles from "./Input.module.css";

import close from "../../assets/clear.svg";
import searchIcon from "../../assets/search.svg";

const Input: FC<InputProp> = ({
  error,
  onChange,
  placeholder,
  type,
  value,
  disabled,
  search,
  handleClearInput,
}) => {
  return (
    <div className={`${search && styles.searchWrapper}`}>
      <input
        className={`${
          error ? styles[`input_error`] : `${styles.input} ${styles.search}`
        }  `}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {search && (
        <div className={styles.searchIconWrapper}>
          <img
            onClick={handleClearInput}
            className={styles.close}
            src={close}
          />
          <img src={searchIcon} />
        </div>
      )}
    </div>
  );
};

export default Input;
