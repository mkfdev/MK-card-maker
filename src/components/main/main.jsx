import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";

const Main = () => {
  const history = useHistory();

  const goLogin = () => {
    history.push('/login');
  };

  return(
    <div className={styles.container}>
      <section className={styles.main}>
        <h1 className={styles.title}>MK Card Maker</h1>
        <div className={styles.card}>
          <strong className={styles.name}>최민경</strong>
          <p className={styles.jobPosition}>Front-end Developer</p>
          <p className={styles.email}><span className={styles.label}>Email</span>chlald3.k@gmail.com</p>
          <p className={styles.skill}><span className={styles.label}>Skill</span>React, PostCSS, HTML, Firebase, Javascript</p>
          <button className={styles.button} onClick={goLogin}>로그인</button>
          <img className={styles.img} src="/images/card_img.png" alt="profile" />
        </div>
        <p className={styles.link}>
          <span className={styles.linkTitle}>Show Another Mini Project</span>
        </p>
      </section>
    </div>
  );
}

export default Main;