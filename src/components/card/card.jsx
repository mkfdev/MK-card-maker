import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const { name, title, company, email, phone, birth, theme } = card;

  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <div className={styles.cardBox}>
        <strong className={styles.name}>{name}</strong>
        <p className={styles.title}>{title}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.phone}>{phone}</p>
        <p className={styles.birth}>{birth}</p>
      </div>
    </li>
  );
}

function getTheme(theme) {
  switch(theme) {
    case 'black' :
      return styles.black;
    case 'pink' :
      return styles.pink;
    case 'yellow' :
      return styles.yellow;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;