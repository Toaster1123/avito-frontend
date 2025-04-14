'use client';

import type { FC } from 'react';
import { clsx } from 'clsx';
import { useInfiniteScrollListings } from '@/hooks';
import { SearchSection } from '../shared';
import { Categories, QuickLinks, Recommendations } from './components';

interface Props {
  className?: string;
}

export const MainWrapper: FC<Props> = ({ className }) => {
  const { listings, listingsSceleton, error } = useInfiniteScrollListings();

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      <Categories />
      <Recommendations items={listings} listingsSceleton={listingsSceleton} />
      {/* {listingsSceleton} */}
    </div>
  );
};
