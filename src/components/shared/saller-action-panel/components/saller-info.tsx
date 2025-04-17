'use client';
import { declineWord, registerDateText } from '@/lib';
import React from 'react';
import { Rate } from 'antd';

interface Props {
  userName: string;
  registerDate: number;
  rating: number | null | undefined;
}

export const SallerInfo: React.FC<Props> = ({ userName, registerDate, rating }) => {
  const profileImage = '';
  const listingCount = 23;
  const online = true;

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex gap-x-2">
            <h3 className="font-bold text-[22px]">{userName}</h3>
            {online && <h3 className="font-bold text-[22px] text-green-600/90">в сети</h3>}
          </div>
          <div className="flex items-center gap-x-1">
            <span className="">{rating}</span>
            <Rate
              style={{ fontSize: '16px', color: '#ff9900' }}
              value={rating}
              allowHalf
              disabled
            />
            <span>{432} отзывов</span>
          </div>
        </div>
        <div className="bg-green-800 rounded-4xl text-xl w-14 h-14 text-white flex items-center justify-center">
          {profileImage.length === 0 || !profileImage ? (
            <span className="">{userName.substring(0, 1)}</span>
          ) : (
            <img src="" alt="" />
          )}
        </div>
      </div>
      <span>На Авито с {registerDateText(registerDate)}</span>
      <span>
        {listingCount} {declineWord('объявление', listingCount)}
      </span>
    </div>
  );
};
