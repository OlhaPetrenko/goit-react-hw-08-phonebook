import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './RegisterForm.module.css';

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const data = { name, email, password };
    onSubmit(data);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
        Ім'я
        <input
          className={s.input}
          type="text"
          name="name"
          required
          value={name}
          placeholder="Введіть свіє ім'я"
          onChange={handleChange}
        />
      </label>
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
          placeholder="Введіть пароль"
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.btn}>
        Зареєструватися
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
