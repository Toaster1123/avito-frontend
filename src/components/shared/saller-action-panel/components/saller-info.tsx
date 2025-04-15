import { declineWord } from '@/lib';
import React from 'react';

interface Props {
  name: string;
}

export const SallerInfo: React.FC<Props> = ({ name }) => {
  const profileImage = '';
  const listingCount = 23;
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="">
          <h3 className="font-bold text-xl">{name}</h3>
          <div className="flex">
            <span>4.9</span>
            <div className="">⭐⭐⭐⭐⭐</div>
            <span>{432} отзывов</span>
          </div>
        </div>
        <div className="bg-green-800 rounded-4xl text-xl w-14 h-14 text-white flex items-center justify-center">
          {profileImage.length === 0 || !profileImage ? (
            <span className="">{name.substring(0, 1)}</span>
          ) : (
            <img src="" alt="" />
          )}
        </div>
      </div>
      <span>На авито с {2022} года</span>
      <span>
        {listingCount} {declineWord('объявление', listingCount)}
      </span>
    </div>
  );
};
