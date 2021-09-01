import React, { useState } from "react";
import styles from "./diary.module.css";

const Diary = () => {
  const [diarys, setDiarys] = useState(
    {
      0 : {id: 0, title: 'Today Title1', date: 'Today Date Time1', content: 'Content1'},
      1 : {id: 1, title: 'Today Title2', date: 'Today Date Time2', content: 'Content2'},
      2 : {id: 2, title: 'Today Title3', date: 'Today Date Time3', content: 'Content3'},
    }
  );

  const [showEditor, setShowEditor] = useState(false);
  const [editKey, setEditKey] = useState(null);

  const getDiary = key => {
   console.log(key)
   setEditKey(key);
  };

  const onEditClick = key => {
    getDiary(key);
    setShowEditor(true);
    console.log(key);
  };

  const onSaveDiary = diary => {
    setShowEditor(false);
    setDiarys((diarys) => {
      const updated = {...diarys};
      updated[editKey] = diary;
      return updated;
    })
  };

  const onChange = event => {
    const diary = {
      ...diarys[editKey],
      [event.currentTarget.name] : event.currentTarget.value,
    }
    onSaveDiary(diary);
  };

  return (
    <section className={styles.diary}>
      <h1 className={styles.title}>Diary</h1>
      <div className={styles.container}>
        <div className="diaryMaker">
          <label className={styles.label}>Title</label>
          <input className={styles.title} type="text"/>
          <label className={styles.label}>Date</label>
          <input className={styles.date} type="text"/>
          <label className={styles.label}>Contents</label>
          <textarea className={styles.content}/>
        </div>

        <div className="diaryPreview">
          <ul>
            {
              Object.keys(diarys).map(key => 
              <li key={key}>
                <h2>{diarys[key].title}</h2>
                <p>{diarys[key].date}</p>
                <p>{diarys[key].content}</p>
                <div className={styles.btnArea}>
                  <button onClick={() => onEditClick(key)} className={styles.editBtn}>수정하기</button>
                  <button className={styles.deleteBtn}>삭제하기</button>
                </div>
              </li>
              )
            }
          </ul>
          
          {
            showEditor &&
            <div className="diaryEditor">
              <span>{}</span>
              <label className={styles.label}>Title</label>
              <input className={styles.title} name="title" onChange={onChange} value={diarys[editKey].title} type="text"/>
              <label className={styles.label}>Date</label>
              <input className={styles.date} name="date" onChange={onChange} value={diarys[editKey].date} type="text"/>
              <label className={styles.label}>Contents</label>
              <textarea className={styles.content} name="content" onChange={onChange} value={diarys[editKey].content}/>
              <button className={styles.saveBtn} onClick={() => onSaveDiary}>저장하기</button>
            </div>
          }
          
        </div>
      </div>

    </section>
  );
};

export default Diary;