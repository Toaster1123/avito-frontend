import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx('max-[1380px]:px-24 max-w-7xl mx-auto', className)}>{children}</div>;
};
