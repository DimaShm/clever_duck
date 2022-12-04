import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainPageNav: React.FC = () => {
  const mainLinks = [
    { id: 1, name: 'Переваги', adress: '/benefits'},
    { id: 2, name: 'Тарифи', adress: '/tariffs'},
    { id: 3, name: 'Відгуки', adress: '/reviews'},
    { id: 4, name: 'Команда', adress: '/team'},
  ];
  return (
    <ul className="menu">
      {mainLinks.map(link => (
        <li
          key={link.id}
          className="menu__item"
        >
          <NavLink
            to={link.adress}
            className={({ isActive }) => classNames(
              'small_text', 'small_text--grey', 'menu__link',
              { 'menu__link--active': isActive }
            )}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
