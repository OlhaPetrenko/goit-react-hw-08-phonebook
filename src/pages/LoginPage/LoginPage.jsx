import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import Section from '../../components/Section/Section';

import { login } from '../../redux/auth/auth-operations';
import { getError } from '../../redux/auth/auth-selectors';

function LoginPage() {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  function loginUser(data) {
    dispatch(login(data));
  }

  return (
    <Section title="Вхід зареєстрованого користувача">
      <LoginForm onSubmit={loginUser} />
      {error && <h2>{error}</h2>}
    </Section>
  );
}

export default LoginPage;
