import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <form onSubmit={onSubmit}>
      <label>Full Name</label>
      <input type="text" name="name" ref={register} />
      <label>Email</label>
      <input type="text" name="email" ref={register} />
      <label>Password</label>
      <input type="text" name="password" ref={register} />
      <label>Confirm Password</label>
      <input type="text" name="confirmPassword" ref={register} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Form;
