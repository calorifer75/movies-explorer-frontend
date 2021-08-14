import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='navigation navigation_opened'>
      <main className='navigation__main'>
        <div className='navigation__wrapper'>
          <div className='navigation__close'>
            <button type='button'></button>
          </div>          
          <h1 className='navigation__title'>Главная</h1>
          <Link className='navigation__link' to='/movies'>Фильмы</Link>
          <Link className='navigation__link' to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
        <Link className='navigation__profile' to='/profile'>Аккаунт</Link>
      </main>
    </div>
  )
}

export default Navigation;
