import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { EnvironmentOutlined } from '@ant-design/icons';
import { formatNumber } from '@/lib';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';

type Listing = FindAllListingsQuery['findAllListings']['listings'][0];

interface Props {
  item: Listing;
  className?: string;
}

export const ListingItem: FC<Props> = ({ item, className }) => {
  return (
    <Link
      href={`/listing/${item.id}`}
      key={item.id}
      className={clsx(
        'group flex flex-col max-w-60 overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg',
        className,
      )}>
      <div className="h-60 w-full relative overflow-hidden">
        {item.images.length > 0 ? (
          <Image
            src={item.images[0]}
            alt={item.name || 'image'}
            fill
            priority
            sizes="(max-width: 240px) 100vw, 50vw"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="h-60 w-full bg-neutral-200 text-neutral-500 text-sm flex justify-center items-center">
            Нету фото
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between flex-grow p-3">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-bold text-cyan-600">{item.name} </h3>
        </div>
        <div className="">
          <p className="text-lg font-bold">{formatNumber(item.price)} ₽</p>
          <div className="text-sm text-neutral-700 flex items-center gap-0.5">
            <EnvironmentOutlined />
            {item.city}
          </div>
        </div>
      </div>
    </Link>
  );
};
