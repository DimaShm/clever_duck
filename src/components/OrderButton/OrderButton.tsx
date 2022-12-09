import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import './OrderButton.scss';

type Props = {
  buttonColor: string;
  loaderColor: string;
};

export const OrderButton: React.FC<Props> = ({ buttonColor, loaderColor }) => {
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
      className={`OrderButton OrderButton${buttonColor}`}
      onClick={haydlerOrderButtonClick}
    >
      {isLoading 
        ? <Loader color={loaderColor}/>
        :  <span>Замовити</span> 
      }

    </button>
  );
};
