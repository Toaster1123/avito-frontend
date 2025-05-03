import type { FC } from 'react';
import Link from 'next/link';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { Button, Container } from '@/components';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={clsx('bg-neutral-800 text-white', className)}>
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-6 text-sm">
            <div className="relative group">
              <span>Интересное</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-blue-400">
              <HeartOutlined size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <ShoppingCartOutlined size={20} />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Вход и регистрация
            </Link>
            <Button className="py-1.5 px-3" text="Разместить обьявление" fontSize="sm" />
          </div>
        </div>
      </Container>
    </header>
  );
};
