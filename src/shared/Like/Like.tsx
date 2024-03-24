import React, { FC } from "react";
import Liked from "../../assets/liked.svg";
import NotLiked from "../../assets/notLiked.png";
import { LikeProp } from "./model";

import styles from "./Like.module.css";

const Like: FC<LikeProp> = ({ onClick, children, style, size }) => {
  return (
    <button
      className={`${styles.like} ${styles[size]}`}
      onClick={onClick}
      style={style}>
      {children}
    </button>
  );
};

export default Like;
