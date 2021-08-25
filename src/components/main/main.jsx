import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  const goLogin = () => {
    history.push('/login');
  };

  return(
    <section>
      <h1>메인페이지타이틀미정</h1>
      <button onClick={goLogin}>로그인</button>
    </section>
  );
}

export default Main;