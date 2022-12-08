import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.scss';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  window.scrollTo({
    top: 0, left: 0, behavior: 'smooth',
  })

  return (
    <div 
      aria-label="dog photo"
      className="Home"
    >
      <div className="Home__content">
        <span className="Home__title">
           Доставка їжі для тварин
        </span>

        <button
          aria-label="main button"
          type="button"
          className="Home__button"
          onClick={() => navigate('/tariffs')}
        >
          <span className="Home__button_title">
            Зробити замовлення
         </span>
       </button>
      </div>
    </div>
  );
};
