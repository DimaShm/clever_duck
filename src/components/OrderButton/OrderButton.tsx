import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import './OrderButton.scss';

type Props = {
  color: string;
};

export const OrderButton: React.FC<Props> = ({ color }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const haydlerOrderButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);  
  }

  return (
    <button
      aria-label="order"
      type="button"
      className={`OrderButton OrderButton${color}`}
      onClick={haydlerOrderButtonClick}
    >
      {isLoading 
        ? <Loader/>
        :  <span>Замовити</span> 
      }

    </button>
  );
};
