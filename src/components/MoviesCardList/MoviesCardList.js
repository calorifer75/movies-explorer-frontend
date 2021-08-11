import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesMoreCards from '../MoviesMoreCards/MoviesMoreCards';
import Footer from '../Footer/Footer';

// это временно, только на период верстки
import filmOneSrc from '../../images/film-1.jpg';
import filmTwoSrc from '../../images/film-2.jpg';

function MoviesCardList() {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__wrapper'>
        <MoviesCard
          filmSrc={filmOneSrc}
          filmName='33 слова о дизайне'
          filmTime='1ч 42м'
          saved={true}
        />
        <MoviesCard
          filmSrc={filmTwoSrc}
          filmName='В погоне за Бенкси'
          filmTime='1ч 42м'
          saved={false}
        />        
      </div>
      <MoviesMoreCards />
      <Footer />
    </section>
  );
}

export default MoviesCardList;
