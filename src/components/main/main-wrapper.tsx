'use client';
import type { FC } from 'react';
import { clsx } from 'clsx';
import { useInfiniteScrollListings } from '@/hooks';
import { Skeleton } from 'antd';
import { SearchSection } from '../shared';
import { Categories, QuickLinks, Recommendations } from './components';

interface Props {
  className?: string;
}

export const MainWrapper: FC<Props> = ({ className }) => {
  const { listings, loading } = useInfiniteScrollListings();
  console.log(listings);

  return (
    <div className={clsx('', className)}>
      <SearchSection />
      <QuickLinks />
      <Categories />
      {loading ? <Skeleton active /> : <Recommendations items={listings || []} />}
    </div>
  );
};
