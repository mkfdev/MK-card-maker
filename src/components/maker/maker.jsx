import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import CardMaker from "../card-maker/card-maker";
import Diary from "../diary/diary";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [userEmail, setUserEmail] = useState(historyState && historyState.email);
  const [nav, setNav] = useState(0);
  const [cards, setCards] = useState({});
  
  const createOrupdateCard = card => {
    console.log(card.fileName);
    setCards((cards) => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const removeCard = card => {
    setCards((cards) => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  const componentObj = {
    0 : 
    <CardMaker 
      FileInput={FileInput}
      cards={cards}
      createOrupdateCard={createOrupdateCard} 
      removeCard={removeCard}/>,
    1 : <Diary/>
  };

  const onLogout = () => {
    authService.logout();
  };

  const setActiveTab = id => {
    console.log(id);
    setNav(id);
  };

  //mount되었을때, userId가 변경되었을때 데이터 로드
  useEffect(() => {
    if(!userId) {
      return;
    }
    //로그인 했을때
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })

    //unmout되었을때, stopSync return은 off
    return () => stopSync();
  }, [userId, cardRepository]);

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