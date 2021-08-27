import React from "react";

const CardEditForm = ({ card }) => {
  const { name, title, company, email, phone, birth, theme} = card;
  return (
    <form>
      <input type="text" name="name" value={name}/>
      <input type="text" name="title" value={title}/> 
      <input type="text" name="company" value={company}/> 
      <input type="text" name="email" value={email}/> 
      <input type="tel" name="phoneNumber" value={phone}/>
      <input type="text" name="birth" value={birth}/>
      <select name="theme" value={theme}>
        <option value="pink">pink</option>
        <option value="black">black</option>
        <option value="yellow">yellow</option>
      </select>
    </form>
  );
}

export default CardEditForm;