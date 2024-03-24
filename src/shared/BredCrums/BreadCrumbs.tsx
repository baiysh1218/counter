import React, { FC } from "react";
import { BreadCrumbsProp } from "./model";
import styles from "./BreadCrumbs.module.css";

const BreadCrumbs: FC<BreadCrumbsProp> = ({ children }) => {
  return <div className={`${styles.bread} container`}>{children}</div>;
};

export default BreadCrumbs;
