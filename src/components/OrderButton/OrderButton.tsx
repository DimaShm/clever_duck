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

  return (
    <button 
      className={`OrderButton OrderButton${color}`}
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate('/');
        }, 1000);
      }}
    >
      {isLoading 
        ? <Loader/>
        :  <span>Замовити</span> 
      }

    </button>
  );
};
