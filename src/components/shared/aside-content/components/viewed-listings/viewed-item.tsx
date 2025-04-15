import { FindAllListingsQuery } from '@/graphql/__generated__/output';
import { formatNumber } from '@/lib';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type Listing = FindAllListingsQuery['findAllListings']['listings'][0];

interface Props {
  item: Listing;
  className?: string;
}

export const ViewedItem: React.FC<Props> = ({ item, className }) => {
  return (
    <div className={clsx('group cursor-pointer w-full flex gap-3', className)}>
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden">
        {item.images.length > 0 ? (
          <Image src={item.images[0]} alt={item.name || 'image'} width={80} height={80} priority />
        ) : (
          <div className="h-full w-full bg-neutral-200 text-neutral-500 text-xs flex justify-center items-center">
            Нету фото
          </div>
        )}
      </div>
      <div className="flex flex-col overflow-hidden">
        <h3 className="font-bold text-sm text-sky-500 truncate group-hover:text-red-500">
          {item.name}
        </h3>
        <h6 className="text-sm">{formatNumber(item.price)} ₽</h6>
        <h6 className="text-sm">{item.city}</h6>
      </div>
    </div>
  );
};
