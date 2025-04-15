import clsx from 'clsx';
import React from 'react';
import { ViewedListings } from './components';
import { AsideServices } from './aside-services';
import { AsideAds } from './aside-ads';

interface Props {
  className?: string;
}

export const AsideContent: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex flex-col gap-y-8', className)}>
      <ViewedListings />
      <AsideServices />
      <AsideAds />
    </div>
  );
};
