import React from 'react'
import './Loader.scss';

type Props = {
  color: string;
};

export const Loader: React.FC<Props> = ({ color }) => (
  <div className="Loader">
    <div 
      className={`Loader__content Loader__content${color}`} 
    />
  </div>
);
