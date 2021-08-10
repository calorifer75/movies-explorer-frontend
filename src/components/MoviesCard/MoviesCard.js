import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className='movies-card'>
      <img
        className='movies-card__img'
        src={props.filmSrc}
        alt={props.alt}
      ></img>
      <div className='movies-card__info-panel'>
        <p className='movies-card__film-name'>{props.filmName}</p>
        <button
          className={`movies-card__save ${
            props.saved ? 'movies-card__save_color' : 'movies-card__save_white'
          }`}
        ></button>
      </div>
      <p className='movies-card__film-time'>{props.filmTime}</p>
    </div>
  );
}

export default MoviesCard;