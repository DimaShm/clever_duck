import React from 'react'
import { useNavigate } from 'react-router-dom';
import './OrderButton.scss';

type Props = {
  color: string;
};

export const OrderButton: React.FC<Props> = ({ color }) => {
  const navigate = useNavigate();

  return (
    <button 
      className={`OrderButton OrderButton${color}`}
      onClick={() => {
        navigate('/');
      }}
    >
       Замовити
    </button>
  );
};
