import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import Section from '../../components/Section/Section';

import { register } from '../../redux/auth/auth-operations';
import { getIisLogin, getError } from '../../redux/auth/auth-selectors';

function RegisterPage() {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIisLogin);
  const error = useSelector(getError);

  function AddNewUser(data) {
    dispatch(register(data));
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <Section title="Реєстрація нового користувача">
      <RegisterForm onSubmit={AddNewUser} />
      {error && <h2>{error}</h2>}
    </Section>
  );
}

export default RegisterPage;
