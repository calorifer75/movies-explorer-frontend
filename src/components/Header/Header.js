import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../../images/logo.svg';

function Header(props) {
  const registerLinkHidden = props.registerLinkHidden ? 'hidden' : '';
  const loginBtnHidden = props.loginBtnHidden ? 'hidden' : '';
  const menuBtnHidden = props.menuBtnHidden ? 'hidden' : '';

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <img className='header__logo' src={logoImg} alt='Логотип'></img>
        </Link>
        <div className='header__right-side'>
          <a
            className={`header__register-link ${registerLinkHidden}`}
            href='#register'
          >
            Регистрация
          </a>
          <button
            className={`header__login-btn ${loginBtnHidden}`}
            type='button'
          >
            Войти
          </button>
          <button className={`header__menu-btn ${menuBtnHidden}`} type='button'></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
