import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card-add-form.module.css";

const CardAddForm = ({ FileInput, createCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const themeRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFilechange = file => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      title: titleRef.current.value || '',
      company: companyRef.current.value || '',
      email: emailRef.current.value || '',
      phone: phoneRef.current.value || '',
      theme: themeRef.current.value,
      fileName: file.fileName || '', 
      fileURL: file.fileURL || '',
    }
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    createCard(card);
  };

  return (
    <form ref={formRef} className={styles.addForm}>
      <div className={styles.field}>
        <label className={styles.fieldName}>Name</label>
        <input ref={nameRef} className={styles.name} type="text" name="name"/>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Title</label>
        <input ref={titleRef} className={styles.title} type="text" name="title"/> 
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Company</label>
        <input ref={companyRef} className={styles.company} type="text" name="company"/> 
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Email</label>
        <input ref={emailRef} className={styles.email} type="text" name="email"/> 
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Tel</label>
        <input ref={phoneRef} className={styles.phone} type="text" name="phone"/>
      </div>
      <div className={styles.field}>
        <label className={styles.fieldName}>Theme</label>
        <select ref={themeRef} className={styles.theme} name="theme">
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
      <FileInput name={file.fileName} onFilechange={onFilechange}/>
      <Button name="Add" onClick={onSubmit}/>
    </form>
  );
}

export default CardAddForm;