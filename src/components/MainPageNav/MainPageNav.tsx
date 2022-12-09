import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  style: string;
  setHeaderIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainPageNav: React.FC<Props> = ({ setHeaderIsVisible, style }) => {
  const mainLinks = [
    { id: 1, name: 'Переваги', adress: '/benefits'},
    { id: 2, name: 'Тарифи', adress: '/tariffs'},
    { id: 3, name: 'Відгуки', adress: '/reviews'},
    { id: 4, name: 'Команда', adress: '/team'},
  ];
  return (
    <ul className={`menu menu${style}`}>
      {mainLinks.map(link => (
        <li
          key={link.id}
          className={`menu__item menu__item${style}`}
        >
          <NavLink
            to={link.adress}
            onClick={() => setHeaderIsVisible(true)} 
            className={({ isActive }) => classNames(
              'small_text',
              'menu__link', 
              `menu__link${style}`,
              {'menu__link--active': isActive}
            )}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
