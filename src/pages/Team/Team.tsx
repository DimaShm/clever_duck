import './Team.scss';

export const Team = () => {
  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  })

  return (
    <div className="Team">
      <h1 className="title Team__title">Наша команда</h1>
      <div className="Team__list">
        <div className="Team__card">
          <div
            aria-label="workers photo"
            className="Team__photo Team__photo--1" 
          />
          <span className="subtitle Team__name">Іван Стрилецький</span>
          <span className="smalltext amalltext--grey Team__position">
            Ветеринар, підбирає раціон
          </span>
          <div className="Team__socials">
            <a 
              aria-label="instagram"
              href="https://www.instagram.com"
              target="_blank"
              className="icon icon--instagram_black"
              rel="noreferrer"
            />
            <a 
              aria-label="facebook"
              href="https://www.facebook.com"
              target="_blank"
              className="icon icon--facebook_black"
              rel="noreferrer"
            />
            <a 
              aria-label="telegram"
              href="https://telegram.com" 
              target="_blank"
              className="icon icon--telegram_black"
              rel="noreferrer"
            />
          </div>
        </div>

        <div className="Team__card">
          <div
            aria-label="workers photo"
            className="Team__photo Team__photo--2" 
          />
          <span className="subtitle Team__name">Степан Різдвяний</span>
          <span className="smalltext amalltext--grey Team__position">
            Фасувальник та доставщик товару
          </span>
          <div className="Team__socials">
            <a
              aria-label="instagram" 
              href="https://www.instagram.com"
              target="_blank"
              className="icon icon--instagram_black"
              rel="noreferrer"
            />
            <a 
              aria-label="facebook"
              href="https://www.facebook.com"
              target="_blank"
              className="icon icon--facebook_black"
              rel="noreferrer"
            />
            <a 
              aria-label="telegram"
              href="https://telegram.com" 
              target="_blank"
              className="icon icon--telegram_black"
              rel="noreferrer"
            />
          </div>
        </div>

        <div className="Team__card">
          <div
            aria-label="workers photo"
            className="Team__photo Team__photo--3" 
          />
          <span className="subtitle Team__name">Мішель Різонова</span>
          <span className="smalltext amalltext--grey Team__position">
            Менеджер
          </span>
          <div className="Team__socials">
            <a
              aria-label="instagram" 
              href="https://www.instagram.com"
              target="_blank"
              className="icon icon--instagram_black"
              rel="noreferrer"
            />
            <a
              aria-label="facebook" 
              href="https://www.facebook.com"
              target="_blank"
              className="icon icon--facebook_black"
              rel="noreferrer"
            />
            <a
              aria-label="telegram" 
              href="https://telegram.com" 
              target="_blank"
              className="icon icon--telegram_black"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
