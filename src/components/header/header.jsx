import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout, setActiveTab, userEmail }) => {
  
  const handleClick = id => {
    setActiveTab(id);
  };

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.title}>Card Maker</h1>
        <div className={styles.userInfo}>
          <span className={styles.user}>{ userEmail }</span>님 로그인
          { onLogout && <button className={styles.button} onClick={onLogout}>로그아웃</button> }
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><button onClick={() => handleClick(0)} className={styles.navTabButton}>Card Maker</button></li>
          <li><button onClick={() => handleClick(1)} className={styles.navTabButton}>Diary</button></li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;