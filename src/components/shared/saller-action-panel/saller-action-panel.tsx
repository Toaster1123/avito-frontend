import { formatNumber } from '@/lib';
import React from 'react';
import { SallerChat, SallerInfo } from './components';

interface Props {
  price: number;
}

export const SallerActionPanel: React.FC<Props> = ({ price }) => {
  return (
    <div className="pt-8 w-96">
      <h2 className="text-3xl font-bold">{formatNumber(price)} ₽</h2>
      <button className="bg-cyan-500 my-5 rounded-xl py-4 w-full text-white">Написать</button>
      <SallerInfo name="Александр" />
      <SallerChat />
    </div>
  );
};
