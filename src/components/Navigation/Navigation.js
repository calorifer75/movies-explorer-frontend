import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    <div className={`navigation ${props.isOpen ? 'navigation_open' : ''}`}>
      <main className='navigation__main'>
        <div className='navigation__wrapper'>
          <div className='navigation__close'>
            <button
              type='button'
              onClick={props.onNavigationCloseClick}
            ></button>
          </div>
          <Link
            className='navigation__link'
            to='/'
            onClick={props.onNavigationCloseClick}
          >
            Главная
          </Link>
          <Link
            className='navigation__link'
            to='/movies'
            onClick={props.onNavigationCloseClick}
          >
            Фильмы
          </Link>
          <Link
            className='navigation__link'
            to='/saved-movies'
            onClick={props.onNavigationCloseClick}
          >
            Сохраненные фильмы
          </Link>
        </div>
        <Link
          className='navigation__profile'
          to='/profile'
          onClick={props.onNavigationCloseClick}
        >
          Аккаунт
        </Link>
      </main>
    </div>
  );
}

export default Navigation;
