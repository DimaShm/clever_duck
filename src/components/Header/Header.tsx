import { Link } from 'react-router-dom';
import { MainPageNav } from '../MainPageNav/MainPageNav';
import './Header.scss';

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">
          <div className="logo__img logo__img--header" />
          <span className="logo__title logo__title--header">CLEVER DUCK</span>
        </div>
     </Link>
      
      <div className="Header__menu">
        <MainPageNav />
      </div>
      
      <div className="Header__contacts">
        <div className="icon icon--telegram_big" />
        <div className="icon icon--phone" />
        <div className="icon icon--menu" />
      </div>
    </div>
  );
};
