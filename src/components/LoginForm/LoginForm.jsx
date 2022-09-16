import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './LoginForm.module.css';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const data = { email, password };
    onSubmit(data);
    setEmail('');
    setPassword('');
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Адреса електронної пошти
        <input
          className={s.input}
          type="email"
          name="email"
          required
          value={email}
          placeholder="Введіть свію адресу електронної пошти"
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Пароль
        <input
          className={s.input}
          type="password"
          name="password"
          required
          value={password}
          placeholder="Введіть свій пароль"
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.btn}>
        Ввійти
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
