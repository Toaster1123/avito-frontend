'use client';
import { useEffect, useState, type FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Button } from '@/components';
import { SearchInput } from './components';
import ReactDOM from 'react-dom';

interface Props {
  isSticked?: boolean;
  className?: string;
}

export const SearchSection: FC<Props> = ({ isSticked = false, className }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setIsScrolled(!isAtTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {activeSearch &&
        ReactDOM.createPortal(
          <div className="bg-black/30 w-full h-full top-0 fixed z-30" />,
          document.body,
        )}

      <div
        className={clsx(
          'duration-100 bg-foreground relative z-50',
          isSticked && 'sticky top-0',
          activeSearch && 'bg-white',
          isSticked && isScrolled && 'shadow',
          className,
        )}>
        <div className="flex items-center max-w-7xl max-[1380px]:px-24 mx-auto w-full py-5 mb-2">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex">
              <span className="h-8 w-8 rounded-full bg-green-500" />
              <span className="h-8 w-8 rounded-full bg-cyan-500 -ml-2" />
              <span className="h-8 w-8 rounded-full bg-orange-500 -ml-2" />
            </div>
            <span className="ml-2 text-3xl font-bold">Avito</span>
          </Link>

          <div className="flex items-center gap-2 w-full">
            <Button className="py-2.5 px-4" text="Все категории" image="search" />
            <SearchInput setActiveSearch={setActiveSearch} activeSearch={activeSearch} />
            <div className="ml-4 flex gap-1 items-center text-sm truncate hover:text-red-500 cursor-pointer">
              <EnvironmentOutlined style={{ fontSize: '14px', color: 'black' }} />
              <span>Во всех регионах</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
