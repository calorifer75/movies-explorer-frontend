import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__wrapper'>
        <h2 className='main-subtitle main-subtitle_underlined'>Студент</h2>
        <img className='about-me__photo' src={photo} alt='Фото'></img>
        <p className='about-me__name'>Вячеслав</p>
        <p className='about-me__paragraph-1'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__paragraph-2'>
          Я представляю из себя обыкновенного гения, кумира поколения, очень
          многое умею, пишу, читаю, рисую, программирую, способен на всё.
          Супермен, а кто ж еще? Собственно, я временно сдам себя в аренду для
          любого великолепного занятия. Главное чтобы мне было где разгулять
          свои мозги. Которые на всё способны. За сим я откланиваюсь и ожидаю
          писем ваших. Посмотреть на текст и рисунки меня можно в журнале моем.
          Я вас люблю. Hо требую! Работу...
        </p>
        <a
          className='about-me__link'
          href='https://facebook.com'
          target='_blank'
          rel='noreferrer'
        >
          Facebook
        </a>
        <a
          className='about-me__link'
          href='https://github.com/calorifer75/'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
