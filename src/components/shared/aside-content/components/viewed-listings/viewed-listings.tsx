import clsx from 'clsx';
import React from 'react';
import { ViewedItem } from './viewed-item';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';

interface Props {
  className?: string;
}
type Listing = FindAllListingsQuery['findAllListings']['listings'][0];

export const ViewedListings: React.FC<Props> = ({ className }) => {
  const array: Listing[] = Array(3)
    .fill(null)
    .map((_, id) => ({
      id: id.toString(),
      name: 'Крутые тапки Дмитрия рожковского III в Краснодаре носкова №3',
      images: Array(Math.floor(Math.random() * (10 - 1) + 1))
        .fill(null)
        .map(() => `https://cataas.com/cat?width=240&height=240&random=${(id * id) / 2 + id}`),
      price: id + 12 * 412,
      city: 'Москва',
      createdAt: new Date(),
    }));
  if (array.length > 0) {
    return (
      <div className={clsx('h-fit w-[300px]', className)}>
        <h2 className="mb-4 text-lg font-bold">Вы смотрели</h2>
        <div className="flex flex-col gap-y-3">
          {array.map((item, id) => (
            <ViewedItem key={id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};
