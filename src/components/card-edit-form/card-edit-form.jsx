import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card-edit-form.module.css";

const CardEditForm = ({ FileInput, card, updateCard, removeCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  
  const { name, title, company, email, phone, theme, fileName } = card;

  const onChange = event => {
    if(event.currentTarget == null) {
      return;
    }

    event.preventDefault();

    console.log(event.currentTarget.value);
    updateCard({
      ...card,
      [event.currentTarget.name] : event.currentTarget.value,
    })
  };

  const onRemove = event => {
    event.preventDefault();
    removeCard(card);
  };

  const onFilechange = file => {
    //이미지 파일 upload -> card 정보 upload
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  };

  return (
    <form ref={formRef} className={styles.editForm}>
      <div className={styles.field}>
        <label className={styles.fieldName}>Name</label>
        <input ref={nameRef} onChange={onChange} className={styles.name} type="text" name="name" value={name}/>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Title</label>
        <input ref={titleRef} className={styles.title} onChange={onChange} type="text" name="title" value={title}/> 
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Company</label>
        <input ref={companyRef} className={styles.company} onChange={onChange} type="text" name="company" value={company}/> 
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Email</label>
        <input ref={emailRef} className={styles.email} onChange={onChange} type="text" name="email" value={email}/> 
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Tel</label>
        <input ref={phoneRef} className={styles.phone} onChange={onChange} type="text" name="phone" value={phone}/>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Theme</label>
        <select className={styles.theme} onChange={onChange} name="theme" value={theme}>
          <option value="beige">beige</option>
          <option value="lemon">lemon yellow</option>
          <option value="coral">coral</option>
          <option value="pink">pink</option>
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="lightBlue">light blue</option>
          <option value="colorful">colorful</option>
        </select>
      </div>
      <FileInput name={fileName} onFilechange={onFilechange}/>
      <Button name="Remove" onClick={onRemove}/>
    </form>
  );
}

export default CardEditForm;