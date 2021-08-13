import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../../images/logo.svg';

function Header(props) {
  const registerLinkHidden = props.registerLinkHidden ? 'hidden' : '';
  const loginLinkHidden = props.loginLinkHidden ? 'hidden' : '';
  const menuBtnHidden = props.menuBtnHidden ? 'hidden' : '';

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <img className='header__logo' src={logoImg} alt='Логотип'></img>
        </Link>
        <div className='header__right-side'>
          <Link
            to='/signup'
            className={`header__register-link ${registerLinkHidden}`}            
          >
            Регистрация
          </Link>
          <Link className={`header__login-link ${loginLinkHidden}`} to='/signin'>
            Войти
          </Link>
          <button
            className={`header__menu-btn ${menuBtnHidden}`}
            type='button'
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
