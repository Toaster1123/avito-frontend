import type { FC, JSX } from 'react';
import { clsx } from 'clsx';
import { Container, ListingList } from '@/components';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';

type Listing = FindAllListingsQuery['findAllListings']['listings'][0];

interface Props {
  items: Listing[];
  listingsSceleton: JSX.Element;
  className?: string;
}

export const Recommendations: FC<Props> = ({ items, className, listingsSceleton }) => {
  return (
    <Container className={clsx('py-6', className)} tag="section">
      <h2 className="mb-4 text-2xl font-bold">Рекомендации для вас</h2>
      <ListingList className={items.length > 0 ? 'mb-8' : ''} items={items} />
      {listingsSceleton}
    </Container>
  );
};
