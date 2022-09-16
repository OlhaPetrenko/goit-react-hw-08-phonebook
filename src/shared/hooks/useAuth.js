import { useSelector } from 'react-redux';

import { getIisLogin } from '../../redux/auth/auth-selectors';

function useAuth() {
  const result = useSelector(getIisLogin);
  return result;
}

export default useAuth;
