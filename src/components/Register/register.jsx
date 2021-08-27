import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styles from "./register.module.css";

const Register = ({authService}) => {
  const { register, formState: {errors}, handleSubmit } = useForm({ mode: "onChange" });

  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const history = useHistory();

  const goToLogin = () => {
    history.push({
      pathname: '/login'
    })
  };

  const onSubmit = async (data) => {
    try {
      await authService
            .signUp(data.email, data.password)
            .then(() => goToLogin());
    } catch(error) {
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit('');
      }, 3000);
    }
  };

  return(
    <section className={styles.register}>
      <h1 className={styles.title}>Card Maker <span className={styles.pageName}>SignUp</span></h1>
      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label className={styles.fieldName}>Email</label>
          <input className={styles.email} name="email" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
          { errors.email && <p className={styles.errorMsg}>This email field is required</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.fieldName}>Password</label>
          <input className={styles.password} name="password" type="password" {...register("password", {required: true, minLength:6 })}/>
          { errors.password && errors.password.type === "required" && <p className={styles.errorMsg}>This password field is required</p> }
          { errors.password && errors.password.type === "minLength" && <p className={styles.errorMsg}>Password must have at least 6 characters</p>}
        </div>
        {
          errorFromSubmit &&
          <p className={styles.errorMsg}>{errorFromSubmit}</p>
        }
        <input className={styles.button} type="submit" value="등록하기"/>
      </form>
    </section>
  );
}

export default Register;