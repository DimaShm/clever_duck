import React from 'react'
import { useNavigate } from 'react-router-dom';
import './OrderButton.scss';

export const OrderButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button 
      className="OrderButton"
      onClick={() => {
        navigate('/order');
      }}
    >
       <span className="OrderButton__title">
         Зробити замовлення
       </span>
    </button>
  );
};
