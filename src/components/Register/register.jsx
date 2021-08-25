import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

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
    <section>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
        <input name="email" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
        { errors.email && <p>This email field is required</p>}

        <label>Password</label>
        <input name="password" type="password" {...register("password", {required: true, minLength:6 })}/>
        { errors.password && errors.password.type === "required" && <p>This password field is required</p> }
        { errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 characters</p>}

        {
          errorFromSubmit &&
          <p>{errorFromSubmit}</p>
        }
        <input type="submit"/>
      </form>
    </section>
  );
}

export default Register;