import React from "react";
import CardEditForm from "../card-edit-form/card-edit-form";
import Card from "../card/card";
import styles from "./card-maker.module.css";

const CardMaker = ({ cards }) => (
  <section className={styles.cardMaker}>
    <h2 className={styles.title}>Card Maker</h2>
    <div className={styles.container}>
      <div className={styles.editor}>
        <h3 className={styles.subTitle}>Editor</h3>
        {
          Object.keys(cards).map(key =>
            <CardEditForm key={key} card={cards[key]}/>
          )
        }
      </div>
      <div className={styles.preview}>
        <h3 className={styles.subTitle}>Preview</h3>
        <ul className={styles.previewList}>
          {
            Object.keys(cards).map(key =>
              <Card key={key} card={cards[key]}/>
            )
          }
        </ul>
      </div>
    </div>
  </section>
);

export default CardMaker;