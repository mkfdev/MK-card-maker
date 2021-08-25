import React from "react";

const Header = ({onLogout}) => {
  return (
    <header>
      { onLogout && <button onClick={onLogout}>로그아웃</button> }
    </header>
  );
}


export default Header;