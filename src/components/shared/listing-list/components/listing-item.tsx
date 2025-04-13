import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { EnvironmentOutlined } from '@ant-design/icons';
import { formatNumber } from '@/lib';

interface Props {
  item: any;
  className?: string;
}

export const ListingItem: FC<Props> = ({ item, className }) => {
  return (
    <Link
      href={`/listing/${item.id}`}
      key={item.id}
      className={clsx(
        'group max-w-60 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg',
        className,
      )}>
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.images[0]}
          alt="Chevrolet"
          width={236}
          height={236}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-bold text-cyan-600">{item.name} </h3>
        </div>
        <p className="text-lg font-bold">{formatNumber(item.price)} ₽</p>
        <div className="text-sm text-neutral-700 flex items-center gap-0.5">
          <EnvironmentOutlined />
          {item.city}
        </div>
      </div>
    </Link>
  );
};
