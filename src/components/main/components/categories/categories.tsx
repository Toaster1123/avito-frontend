import type { FC } from 'react';
import { clsx } from 'clsx';
import { ComponentItem } from './components';
import { categoriesLinks } from '@/constants';

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('py-6 p-0', className)}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categoriesLinks.map(({ image, link, title }, id) => (
          <ComponentItem key={id} image={image} link={link} title={title} />
        ))}
      </div>
    </div>
  );
};
