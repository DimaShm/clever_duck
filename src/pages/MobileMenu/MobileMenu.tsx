import React from 'react';
import { Link } from 'react-router-dom';
import { MainPageNav } from '../../components/MainPageNav/MainPageNav';
import './MobileMenu.scss';

type Props = {
  setHeaderIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenu: React.FC<Props> = ({ setHeaderIsVisible }) => {
  return (
    <div className="MobileMenu">
      <div className="MobileMenu__header">
        <span className="MobileMenu__title">Меню</span>
        <div>
          <Link
            className="icon icon--cross"
            to="/" 
            onClick={() => {
              setHeaderIsVisible(true);
            }}
          />
        </div>
      </div>
      <div className="MobileMenu__content">
        <MainPageNav 
          mobileStyle={'--mobile'}
          setHeaderIsVisible={setHeaderIsVisible} 
        />
      </div>
    </div>
  );
};
