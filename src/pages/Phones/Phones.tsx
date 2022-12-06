import React from 'react';
import './Phones.scss';

type Props = {
  setPhonesIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Phones: React.FC<Props> = ({ setPhonesIsVisible }) => {
  return (
    <div 
      className="Phones"
      onMouseLeave={() => {setPhonesIsVisible(false)}}
    >
      <span className="Phones__number">
        <a 
          href="tel:+380654220173"
          onClick={() => {setPhonesIsVisible(false)}}
          >
          +380654220173
        </a>
      </span>

      <span className="Phones__number">
        <a 
          href="tel:+380966550112"
          onClick={() => {setPhonesIsVisible(false)}}
        >
           +380966550112
        </a>
      </span>
    </div>
  );
};
