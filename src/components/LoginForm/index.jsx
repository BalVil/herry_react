import { useState } from 'react';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = e => setLogin(e.target.value);
  const handleChangePasswoed = e => setPassword(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    console.log(login);
    console.log(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Login</span>
        <input type="text" value={login} onChange={handleChangeLogin}></input>
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={handleChangePasswoed}></input>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
