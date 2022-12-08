import './Reviews.scss';

export const Reviews = () => {
  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  })

  return (
    <div className="Reviews">
      <h1 className="title Reviews__title">Відгуки</h1>
      <br /><br /><br />
      <div className="Rewiews__list">
        <div className="card">
          <div className="photo photo--1" aria-label="user photo"/>
          <div className="card_content">
            <div className="quotes"/>
            <span className="text text--center">
              Дуже сподобався індивідуальний підхід до кожного улюбленця. Планую замовляти ще
            </span>
            <span className="subtitle">
              Попова Жанна
            </span> 
          </div>
        </div>

        <div className="card">
          <div className="photo photo--2" aria-label="user photo"/>
          <div className="card_content">
            <div className="quotes"/>
            <span className="text text--center">
              Не дорого, якісно та швидко. Найкраща доставкка з тих, якими я користувався
            </span>
            <span className="subtitle">
              Горобчик Максим
            </span> 
          </div>
        </div>

        <div className="card">
          <div className="photo photo--3" aria-label="user photo"/>
          <div className="card_content">
            <div className="quotes"/>
            <span className="text text--center">
              Я купую тут корм більше ніж 8 місяців поспіль і мене ще жодного разу не підвели. Раджу!
            </span>
            <span className="subtitle">
              Філіпова Марія
            </span> 
          </div>
        </div>
      </div>
    </div>
  );
};
