import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({authService}) => {
  const { register, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const history = useHistory();

  const goToMaker = (userId, userEmail) => {
    history.push({
      pathname: '/maker',
      state: {id: userId, email: userEmail}
    })
  }

  const onSubmit = async (data) => {
    console.log(`loginPage, ${data.email}`)
    try {
      await authService
      .login(data.email, data.password)
      .then(data => goToMaker(data.user.uid, data.user.email));
    } catch(error) {
      setErrorFromSubmit(error.message);
    }
  };

  const onLoginWithProvider = event => {
    authService
      .loginProvider(event.currentTarget.textContent)
      .then(data => {
        console.log(data.user.email);
        goToMaker(data.user.uid, data.user.email)
      });
  };

  return(
    <section className={styles.login}>
      <h1 className={styles.title}> Card Maker <span className={styles.pageName}>Login</span></h1>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label className={styles.fieldName}>Email</label>
          <input  className={styles.email} name="email" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
        </div>
        <div className={styles.field}>
          <label className={styles.fieldName}>Password</label>
          <input className={styles.password} name="password" type="password" {...register("password", {required: true, minLength:6 })}/>
        </div>
        {
          errorFromSubmit &&
          <p className={styles.errorMsg}>{errorFromSubmit}</p>
        }
        <input className={styles.button} type="submit" value="로그인"/>
      </form>
      <ul className={styles.list}>
        <li><button className={styles.provider} onClick={onLoginWithProvider}>Google</button></li>
        <li><button className={styles.provider} onClick={onLoginWithProvider}>Github</button></li>
      </ul>
      <Link className={styles.link} to='register'>아직 아이디가 없다면? 가입하기!</Link>
    </section>
  );
}

export default Login;