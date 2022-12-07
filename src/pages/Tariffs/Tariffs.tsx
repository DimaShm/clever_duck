import { OrderButton } from '../../components/OrderButton/OrderButton';
import './Tariffs.scss';

export const Tariffs = () => {
  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  })

  return (
    <div className="Tariffs">
      <h1 className="title Tariffs__title">Таріфи</h1>

      <div className="Tariffs__card">
        <div className="Tariffs__item">
          <span className="Tariffs__name">Ранковий</span>
          <div className="Tariffs__price">700 ₴</div>
          <span className="small_text small_text--grey Tariffs__text">Тиждень</span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--grey Tariffs__text">
            Привозимо з 06 до 11:30
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Кладемо їстівний подарунок
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Ви самі обираєте бренди
          </span>
        </div>

        <div className="Tariffs__item">
        <span className="small_text small_text--grey Tariffs__text">
            Корм на 1250кк/день
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Привозимо навіть у вихідні
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Кладемо іграшку
          </span>
        </div>

        <div className="Tariffs__item Tariffs__item--button">
          <OrderButton color="--pink"/>
        </div>
      </div>

      <div className="Tariffs__card">
        <div className="Tariffs__item">
          <span className="Tariffs__name">Стандартний</span>
          <div className="Tariffs__price">1250 ₴</div>
          <span className="small_text small_text--grey Tariffs__text">
            Тиждень
          </span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--grey Tariffs__text">
            Привозимо з 10 до 18
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Кладемо їстівний подарунок
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Ви самі обираєте бренди
          </span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--grey Tariffs__text">
             Корм на 1450кк/день
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Привозимо навіть у вихідні
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Кладемо іграшку
          </span>
        </div>

        <div className="Tariffs__item Tariffs__item--button">
          <OrderButton color="--pink"/>
        </div>
      </div>

      <div className="Tariffs__card Tariffs__card--pink">
        <div className="Tariffs__item">
          <span className="Tariffs__name Tariffs__name--white">
            Найпопулярніший
          </span>
          <div className="Tariffs__price Tariffs__price--white">2000 ₴</div>
          <span className="small_text small_text--white Tariffs__text">
            Тиждень
          </span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--white Tariffs__text">
            Привозимо у будь-який час
          </span>
          <span className="small_text small_text--white Tariffs__text">
            Кладемо їстівний подарунок
          </span>
          <span className="small_text small_text--white Tariffs__text">
            Ви самі обираєте бренди
          </span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--white Tariffs__text">
            Корм на 1500кк/день
          </span>
          <span className="small_text small_text--white Tariffs__text">
            Привозимо навіть у вихідні
          </span>
          <span className="small_text small_text--white Tariffs__text">
            Кладемо три іграшки
          </span>
        </div>

        <div className="Tariffs__item Tariffs__item--button">
          <OrderButton color="--grey"/>
        </div>
      </div>

      <div className="Tariffs__card">
        <div className="Tariffs__item">
          <span className="Tariffs__name">Все включено</span>
          <div className="Tariffs__price">2500 ₴</div>
          <span className="small_text small_text--grey Tariffs__text">
            Тиждень
          </span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--grey Tariffs__text">
            Привозимо у будь-який час
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Кладемо їстівний подарунок
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Ви самі обираєте бренди
          </span>
        </div>

        <div className="Tariffs__item">
          <span className="small_text small_text--grey Tariffs__text">
            Корм на 1700кк/день
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Привозимо навіть у вихідні
          </span>
          <span className="small_text small_text--grey Tariffs__text">
            Кладемо три іграшки
          </span>
        </div>

        <div className="Tariffs__item Tariffs__item--button">
          <OrderButton color="--pink"/>
        </div>
      </div>
    </div>
  );
};
