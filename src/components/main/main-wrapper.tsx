'use client';

import type { FC } from 'react';
import { useInfiniteScrollListings } from '@/hooks';
import { AsideContent } from '../shared';
import { Categories, QuickLinks, Recommendations } from './components';
import { Container } from '../ui';

interface Props {
  className?: string;
}

export const MainWrapper: FC<Props> = ({ className }) => {
  const { listings, listingsSceleton, error } = useInfiniteScrollListings();
  if (error) {
    return <p className="text-center w-full">Error loading data</p>;
  }

  return (
    <Container className={className}>
      <QuickLinks />
      <div className="flex gap-8">
        <div>
          <Categories />
          <Recommendations items={listings} listingsSceleton={listingsSceleton} />
        </div>
        <AsideContent />
      </div>
    </Container>
  );
};
