import React from 'react';
import './PopupMenu.scss';

type Props = {
  setPhonesIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupMenu: React.FC<Props> = ({ setPhonesIsVisible }) => {
  return (
    <div
      aria-label="popup menu"
      className="PopupMenu"
      onMouseLeave={() => {setPhonesIsVisible(false)}}
    >
      <div className="PopupMenu__pointer" />
      
      <div className="PopupMenu__content">
        <span className="PopupMenu__number">
          <a 
            aria-label="telephone number"
            href="tel:+380654220173"
            onClick={() => {setPhonesIsVisible(false)}}
            >
            +380654220173
          </a>
        </span>

        <span className="PopupMenu__number">
          <a 
            aria-label="telephone number"
            href="tel:+380966550112"
            onClick={() => {setPhonesIsVisible(false)}}
          >
            +380966550112
          </a>
        </span>
      </div>
    </div>
  );
};
