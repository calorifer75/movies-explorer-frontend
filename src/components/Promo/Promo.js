import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__wrapper'>
        <p className='promo__text-banner'>
          Учебный проект студента факультета Веб-разработки.
        </p>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
