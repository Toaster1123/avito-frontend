'use client';
import { useState, type FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Button } from '@/components';

interface Props {
  className?: string;
}

export const SearchSection: FC<Props> = ({ className }) => {
  const [activeInput, setActiveInput] = useState(false);
  return (
    <div className={clsx('w-full mx-auto py-5 mb-2', activeInput && 'bg-white', className)}>
      <div className="flex items-center">
        <Link href="/" className="mr-4 flex items-center">
          <div className="flex">
            <span className="h-8 w-8 rounded-full bg-green-500"></span>
            <span className="h-8 w-8 rounded-full bg-cyan-500 -ml-2"></span>
            <span className="h-8 w-8 rounded-full bg-orange-500 -ml-2"></span>
          </div>
          <span className="ml-2 text-3xl font-bold">Avito</span>
        </Link>

        <div className="flex items-center gap-2 w-full">
          <Button className="py-2.5 px-4" text="Все категории" image="search" />
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Поиск по объявлениям"
              className="flex-1 border-2 border-r-0 border-sky-500 rounded-l-xl py-2 px-4 focus:border-2 focus:border-sky-500 focus:outline-none"
              onFocus={() => setActiveInput(true)}
              onBlur={() => setActiveInput(false)}
            />
            <Button className="rounded-l-none py-2.5 px-4" text="Найти" />
          </div>

          <div className="ml-4 flex gap-1 items-center text-sm truncate hover:text-red-500 cursor-pointer">
            <EnvironmentOutlined style={{ fontSize: '14px', color: 'black' }} />
            <span>Во всех регионах</span>
          </div>
        </div>
      </div>
    </div>
  );
};
