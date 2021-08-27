import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import CardMaker from "../card-maker/card-maker";
import Diary from "../diary/diary";

const Maker = ({authService}) => {
  const history = useHistory();
  const [userId, setUserId] = useState(history.state && history.state.id);
  const [userEmail, setUserEmail] = useState(history.state && history.state.email);
  const [nav, setNav] = useState(0);
  const [cards, setCards] = useState({
    0 : {name: 'cmk', title: 'Engineer', company:'samsung', email:'chlald3.k@gmail.com', phone: '010-333-3333', birth: '1990-04-28', theme: 'pink'},
    1 : {name: 'kim', title: 'Engineer', company:'samsung', email:'chlald3.k@gmail.com', phone: '010-333-3333', birth: '1990-04-28', theme: 'pink'},
    2 : {name: 'park', title: 'Engineer', company:'samsung', email:'chlald3.k@gmail.com', phone: '010-333-3333', birth: '1990-04-28', theme: 'pink'}
  })

  const componentObj = {
    0 : <CardMaker cards={cards}/>,
    1 : <Diary/>
  };

  const onLogout = () => {
    authService.logout();
  };

  const setActiveTab = id => {
    console.log(id);
    setNav(id);
  };

  useEffect(() => {
    authService
      .onAuthChange(user => {
        if(user) {
          setUserId(user.uid);
          setUserEmail(user.email);
        } else {
          history.push('/login');
        }
      });
  },[userId, history, authService])

  return(
    <div className={styles.maker}>
      <Header onLogout={onLogout} userEmail={userEmail} setActiveTab={setActiveTab}/>

      <div className={styles.container}>
        {
          componentObj[nav]
        }
      </div>

      <Footer/>
    </div>
  );
}

export default Maker;