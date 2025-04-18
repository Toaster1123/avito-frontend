import type { FC } from 'react';
import Link from 'next/link';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { Button } from '@/components';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={clsx('bg-neutral-800 text-white', className)}>
      <div className="container max-w-7xl max-[1380px]:px-24 mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-6 text-sm">
            <div className="relative group">
              <Link href="#" className="flex items-center hover:text-blue-400">
                Категории
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
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
      </div>
    </header>
  );
};
