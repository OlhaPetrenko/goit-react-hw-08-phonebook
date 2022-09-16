import Navigation from './Navigation';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';

import useAuth from '../../shared/hooks/useAuth';

import s from './Header.module.css';
function Header() {
  const isLogin = useAuth();
  return (
    <header className={s.Header}>
      <div className={s.HeaderContainer}>
        {isLogin ? <Navigation /> : <div></div>}

        {isLogin ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
}

export default Header;
