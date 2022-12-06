import './Benefits.scss';
import { LinkFda } from '../../components/LinkFda/LinkFda';

export const Benefits = () => {
  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  })

  return (
    <div className="Benefits">
      <section className="Benefits__about">
        <h1 className="title Benefits__title Benefits__title--about">
          Ми дотримуємося вказівок FDA
        </h1> 
        <br />
        <div className="Benefits__photo Benefits__photo--1" />
        <p className="text Benefits__text Benefits__text--about">
          На жаль, дослідження показують, що більшість власників собак не дотримуються <LinkFda /> щодо кормів для домашніх тварин через брак часу, зусиль чи обізнаності. Їх впровадження можуть значно зменшити випадки бактеріальних захворювань та зараження собак.
          <br /> <br />
          Наша компанія дотримується всіх норм грамування та калорійності їжі для тваринок, фасуючи тільки потрібну кількість корму та наповнювача для вашого вихованця. Для отримання консультації дзвоніть на гарячу лінію чи пишіть в наш телеграм.
        </p>
      </section>

      <section className="Benefits__care">
        <h1 className="title Benefits__title Benefits__title--care">
          Індивідуальний підхід
        </h1> 
        <br />
        <div 
          className="Benefits__photo Benefits__photo--2" 
        />
        <p className="text Benefits__text Benefits__text--care">
          Так як наша команда піклується про те, щоб наші клієнти були задоволеними, 
          до кожного з них ми маємо індивідуальний підхід.
          <br /><br />
          Ми завжди уточнюємо зручний час доставки з кожним покупцем i можемо змінити його, якщо у вас не буде можливості забрати замовлення.
        </p>
      </section>

      <section className="Benefits__bonus">
        <h1 className="title Benefits__title Benefits__title--bonus">
           Додаткові приємності
        </h1> 
        <br />
        <div 
          className="Benefits__photo Benefits__photo--3" 
        />
        <p className="text Benefits__text Benefits__text--bonus">
          Крім цього, в кожне замовлення ми додаємо приємні подарунки та іграшки для ваших улюбленців.
          <br /><br />
          З нами в будь-який момент ви зможете повідомити нас про потрібність поповнення запасів для вашої тваринки 
          i ми привеземо вам їжу.
        </p>
      </section>
    </div>
  );
};
