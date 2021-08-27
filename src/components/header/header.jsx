import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const location = useLocation();

  const getUserEmail = () => {
    return location.state.email;
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.info}>
        <span className={styles.user}>{ getUserEmail() }</span>님 로그인
        { onLogout && <button className={styles.button} onClick={onLogout}>로그아웃</button> }
      </div>
    </header>
  );
}


export default Header;