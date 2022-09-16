import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

import s from './Header.module.css';

function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.UserMenu}>
      <p className={s.Name}>{userName}</p>
      <button
        type="button"
        className={s.btn}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Вихід
      </button>
    </div>
  );
}

export default UserMenu;
