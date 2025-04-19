import React from 'react';
import { SallerChat, SallerInfo } from './components';
import { formatNumber } from '@/lib';
import { Button } from '@/components';

interface Props {
  userName: string;
  price: number;
  registerDate: number;
  rating: number | null | undefined;
  activeListingCount: number | null;
}

export const SallerActionPanel: React.FC<Props> = ({
  userName,
  price,
  registerDate,
  rating,
  activeListingCount,
}) => {
  return (
    <div className="sticky top-5 h-fit max-[1380px]:max-w-[362px] mt-8 w-full max-w-[460px]">
      <h2 className="text-3xl mb-5 font-bold">{formatNumber(price)} ₽</h2>
      <Button className="py-4 w-full mb-8" text="Написать" />
      <div className="px-2">
        <SallerInfo
          registerDate={registerDate}
          userName={userName}
          rating={rating}
          activeListingCount={activeListingCount}
        />
        <div className="mt-5">Отвечает около 30 минут</div>
        <SallerChat />
      </div>
    </div>
  );
};
