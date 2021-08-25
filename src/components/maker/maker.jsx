import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

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
          history.push('/');
        }
      });
  },[userId, history, authService])

  return(
    <section>
      <Header onLogout={onLogout}/>
      Maker영역
      <Footer/>
    </section>
  );
}

export default Maker;