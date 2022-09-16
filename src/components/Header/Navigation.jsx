import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/contacts"
        className={props => {
          return props.isActive ? `${s.Active} ${s.Link}` : s.Link;
        }}
      >
        Контакти
      </NavLink>
    </nav>
  );
}

export default Navigation;
