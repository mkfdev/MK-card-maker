import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>Copyright 2021 by CMK</p>
    </div>
  );
}

export default Footer;