import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const Login = ({authService}) => {
  const { register, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {id: userId}
    })
  }

  const onSubmit = async (data) => {
    console.log(`loginPage, ${data.email}`)
    try {
      await authService
      .login(data.email, data.password)
      .then(data => goToMaker(data.user.uid));
    } catch(error) {
      setErrorFromSubmit(error.message);
    }
  };

  const onLoginWithProvider = event => {
    authService
      .loginProvider(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  };

  return(
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input name="email" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
        <label>Password</label>
        <input name="password" type="password" {...register("password", {required: true, minLength:6 })}/>
        {
          errorFromSubmit &&
          <p>{errorFromSubmit}</p>
        }
        <input type="submit"/>
        <Link style={{color:'gray', textDecoration:'none'}} to='register'>아직 아이디가 없다면...</Link>
      </form>
      <ul>
        <li><button onClick={onLoginWithProvider}>Google</button></li>
        <li><button onClick={onLoginWithProvider}>Github</button></li>
      </ul>
    </section>
  );
}

export default Login;