'use client';
import { useEffect, useRef, useState, type FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { EnvironmentOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { useClickAway } from 'react-use';

import { SearchInput } from './components';
import { useFindAllCategoriesQuery } from '@/graphql/__generated__/output';
import { useDisableScroll, useScrollListener } from '@/hooks';
import { usePathname } from 'next/navigation';
import { CategoriesSection } from '../categories-section';
import { Container } from '@/components';

interface Props {
  className?: string;
}

export const SearchSection: FC<Props> = ({ className }) => {
  const pathname = usePathname();

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeCategories, setActiveCategories] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { data, loading } = useFindAllCategoriesQuery();

  const categories = data?.findAllCategories || undefined;
  const clickRef = useRef<HTMLDivElement>(null);
  useScrollListener(setIsScrolled);
  useDisableScroll(activeCategories);
  useClickAway(clickRef, () => setActiveCategories(false));
  useEffect(() => {
    setActiveSearch(false);
    setActiveCategories(false);
  }, [pathname]);
  return (
    <>
      {(activeCategories || activeSearch) &&
        ReactDOM.createPortal(
          <div className="bg-black/30 w-full h-full top-0 fixed z-30" />,
          document.body,
        )}

      <div
        ref={clickRef}
        className={clsx(
          'duration-100 bg-foreground relative',
          (activeCategories || activeSearch) && 'bg-white',
          isScrolled && 'shadow',
          className,
        )}>
        <Container className="flex items-center w-full py-5 mb-2">
          <Link href="/" className="mr-4 flex items-center">
            <div className="flex">
              <span className="h-8 w-8 rounded-full bg-green-500" />
              <span className="h-8 w-8 rounded-full bg-cyan-500 -ml-2" />
              <span className="h-8 w-8 rounded-full bg-orange-500 -ml-2" />
            </div>
            <span className="ml-2 text-3xl font-bold">Avito</span>
          </Link>

          <div className="w-full flex">
            <div className="flex items-center gap-2 w-full relative">
              <CategoriesSection
                loading={loading}
                categories={categories}
                activeCategories={activeCategories}
                setActiveCategories={setActiveCategories}
              />
              <SearchInput
                loading={loading}
                categories={categories}
                setActiveSearch={setActiveSearch}
                activeSearch={activeSearch}
              />
            </div>
            <div className="ml-4 w-44 flex gap-1 items-center text-sm hover:text-red-500 cursor-pointer">
              <EnvironmentOutlined style={{ fontSize: '14px', color: 'black' }} />
              <span>Во всех регионах</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
