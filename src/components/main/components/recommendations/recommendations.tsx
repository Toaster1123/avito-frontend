import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container, ListingList } from '@/components';
import { FindAllListingsQuery } from '@/graphql/__generated__/output';

type Listing = FindAllListingsQuery['findAllListings']['listings'][0];

interface Props {
  items: Listing[];
  className?: string;
}

export const Recommendations: FC<Props> = ({ items, className, listingsSceleton }) => {
  return (
    <Container className={clsx('px-4 py-6 2xl:px-56', className)} tag="section">
      <h2 className="mb-4 text-2xl font-bold">Рекомендации для вас</h2>
      <ListingList items={items} />
      {listingsSceleton}
    </Container>
  );
};
