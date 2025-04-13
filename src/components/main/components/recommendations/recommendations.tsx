import type { FC } from 'react';
import { clsx } from 'clsx';
import { Container, ListingList } from '@/components';

interface Props {
  items: any[];
  className?: string;
}

export const Recommendations: FC<Props> = ({ items, className }) => {
  return (
    <Container className={clsx('px-4 py-6', className)} tag="section">
      <h2 className="mb-4 text-2xl font-bold">Рекомендации для вас</h2>
      <ListingList items={items} />
    </Container>
  );
};
