import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: 'ukraine',
    },
  });
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Login</span>
        <input type="text" {...register('login')}></input>
      </label>
      <label>
        <span>Password</span>
        <input
          value={null}
          type="password"
          {...register('password', { required: true })}></input>
        {errors.password && <p>This field is required</p>}
      </label>
      <input
        type="checkbox"
        {...register('guarentee', { required: 'Check guarentee' })}
      />
      <span>{errors.guarentee?.message}</span>

      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
