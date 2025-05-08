import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  text: string;
  categoryId: string;
  className?: string;
}

export const BreadcrumbText: React.FC<Props> = ({ text, categoryId, className }) => {
  return (
    <Link href={'/category/' + categoryId}>
      <span className={clsx('cursor-pointer hover:text-sky-500 whitespace-nowrap', className)}>
        {text}
      </span>
    </Link>
  );
};
