import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService}) => {
  const history = useHistory();
  const [userId, setUserId] = useState(history.state && history.state.id);
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService
      .onAuthChange(user => {
        if(user) {
          setUserId(user.uid);
        } else {
          history.push('/login');
        }
      });
  },[userId, history, authService])

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>

      <div className={styles.container}>
        <Editor/>
        <Preview/>
      </div>

      <Footer/>
    </section>
  );
}

export default Maker;