import React from 'react';
import { Header } from '../header/header';
import { SearchSection } from '@/components/shared';
import clsx from 'clsx';

interface Props {
  isSticked?: boolean;
  className?: string;
}

export const HeaderWrapper: React.FC<Props> = ({ isSticked = false, className }) => {
  return (
    <div className={clsx('z-40', isSticked && 'sticky top-0 z-50', className)}>
      <Header />
      <SearchSection />
    </div>
  );
};
