import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phones } from '../../pages/Phones/Phones';
import { MainPageNav } from '../MainPageNav/MainPageNav';
import './Header.scss';

type Props = {
  setHeaderIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = ({ setHeaderIsVisible }) => {
  const [phonesIsVisible, setPhonesIsVisible] = useState(false);

  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">
          <div className="logo__img logo__img--header" />
          <span className="logo__title logo__title--header">CLEVER DUCK</span>
        </div>
     </Link>
      
      <div className="Header__menu">
        <MainPageNav 
          mobileStyle={''}
          setHeaderIsVisible={setHeaderIsVisible}
        />
      </div>
      
      <div className="Header__contacts">
        <a 
          href="https://telegram.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <div className="icon icon--telegram_big" />
        </a>

        <button 
          className="icon icon--phone Header__phone_button"
          onClick={() => {
            setPhonesIsVisible(state => !state)
          }}
        />

        <Link 
          to="/mobileMenu" 
          onClick={() => {setHeaderIsVisible(false)}}
        >
          <div className="icon icon--menu" />
        </Link>
      </div>

      {phonesIsVisible &&
        <Phones setPhonesIsVisible={setPhonesIsVisible}/>
      }
    </div>
  );
};
