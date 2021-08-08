import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='about-project__wrapper'>
        <h2 className='about-project__title about-project__title_underlined'>
          О проекте
        </h2>
        <h2 className='about-project__title'>
          Дипломный проект включал 5 этапов
        </h2>
        <p className='about-project__paragraph'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className='about-project__title'>
          На выполнение диплома ушло 5 недель
        </h2>
        <p className='about-project__paragraph'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
        <div className='about-project__timeline'>
          <div className='about-project__backend-wrapper'>
            <div className='about-project__backend-box'>1 неделя</div>
            <p className='about-project__timeline-text'>Back-end</p>
          </div>
          <div className='about-project__frontend-wrapper'>
            <div className='about-project__frontend-box'>4 недели</div>
            <p className='about-project__timeline-text'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
