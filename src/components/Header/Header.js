import './Header.css';
import logoImg from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <img src={logoImg} alt='Логотип'></img>
        <div className='header__right-side'>
          <a className='header__register-link' href='#register'>
            Регистрация
          </a>
          <button className='header__login-btn' type='button'>
            Войти
          </button>
          <button className='header__menu-btn' type='button'></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
