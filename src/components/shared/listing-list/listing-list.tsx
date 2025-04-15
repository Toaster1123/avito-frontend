import type { FC } from 'react';
import { clsx } from 'clsx';
import { ListingItem } from './components';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';

type Listing = FindAllListingsQuery['findAllListings']['listings'][0];
interface Props {
  items: Listing[];
  className?: string;
}

export const ListingList: FC<Props> = ({ items, className }) => {
  return (
    <div
      className={clsx(
        'max-[1380px]:grid-cols-3 max-xl:grid-cols-2 grid gap-4 gap-y-8 grid-cols-4',
        className,
      )}>
      {items.map((item, id) => (
        <ListingItem key={id} item={item} />
      ))}
    </div>
  );
};
