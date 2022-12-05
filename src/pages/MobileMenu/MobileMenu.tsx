import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.scss';

type Props = {
  setHeaderIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileMenu: React.FC<Props> = ({ setHeaderIsVisible }) => {
  return (
    <div className="MobileMenu">
      <div className="MobileMenu__header">
        <span className="MobileMenu__title">Меню</span>
        <Link 
          to="/" 
          onClick={() => {
            setHeaderIsVisible(true);
          }}
        >
          fdfdfdfddfd
        </Link>
      </div>
      <div className="MobileMenu__content"></div>
    </div>
  );
};
