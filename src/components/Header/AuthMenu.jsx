import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

function AuthMenu() {
  return (
    <div>
      <NavLink
        to="/register"
        className={props => {
          return props.isActive ? `${s.Active} ${s.Link}` : s.Link;
        }}
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        className={props => {
          return props.isActive ? `${s.Active} ${s.Link}` : s.Link;
        }}
      >
        Вхід
      </NavLink>
    </div>
  );
}

export default AuthMenu;
