import { RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type TSize = 'base' | 'sm' | 'xs';

interface Props {
  title: string;
  id: string;
  size?: TSize;
  className?: string;
}

export const CategoryItemTitle: React.FC<Props> = ({ title, size = 'base', id, className }) => {
  const arrowSize: Record<TSize, number> = {
    base: 14,
    sm: 9,
    xs: 0,
  };
  const textSize: Record<TSize, string> = {
    base: 'font-bold text-2xl',
    sm: 'font-semibold text-sm',
    xs: 'text-sm text-gray-700',
  };
  return (
    <Link href={'/category/' + id}>
      <div className={clsx('flex items-center gap-1.5', className)}>
        <span
          className={clsx('whitespace-nowrap cursor-pointer hover:text-red-400', textSize[size])}>
          {title}
        </span>
        {size != 'xs' && <RightOutlined style={{ fontSize: arrowSize[size] }} />}
      </div>
    </Link>
  );
};
