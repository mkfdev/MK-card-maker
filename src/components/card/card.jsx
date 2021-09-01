import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const DEFAULT_URL = "/images/default_image.png";
  const { name, title, company, email, phone, theme, fileURL } = card;
  const url = fileURL || DEFAULT_URL;

  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={url} alt=""/>
        </div>
        <div className={styles.info}>
          <strong className={styles.name}>{name}</strong>
          <p className={styles.title}>{title}</p>
          <p className={styles.company}>{company}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.phone}>{phone}</p>
      </div>
    </li>
  );
}

function getTheme(theme) {
  switch(theme) {
    case 'beige' :
      return styles.beige;
    case 'lemon' :
      return styles.lemon;
    case 'coral' :
      return styles.coral;
    case 'pink' :
      return styles.pink;
    case 'black' :
      return styles.black;
    case 'white' :
      return styles.white;
    case 'lightBlue' :
      return styles.lightBlue;
    case 'colorful' :
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;