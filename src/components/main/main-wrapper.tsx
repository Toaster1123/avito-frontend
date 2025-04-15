'use client';

import type { FC } from 'react';
import { clsx } from 'clsx';
import { useInfiniteScrollListings } from '@/hooks';
import { AsideContent } from '../shared';
import { Categories, QuickLinks, Recommendations } from './components';

interface Props {
  className?: string;
}

export const MainWrapper: FC<Props> = ({ className }) => {
  const { listings, listingsSceleton, error } = useInfiniteScrollListings();
  console.log('Lenght', listings.length);
  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <div className={clsx('max-[1380px]:px-24 max-w-7xl mx-auto', className)}>
      <QuickLinks />
      <div className="flex gap-8">
        <div>
          <Categories />
          <Recommendations items={listings} listingsSceleton={listingsSceleton} />
        </div>
        <AsideContent />
      </div>
    </div>
  );
};
