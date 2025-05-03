'use client';
import { Button } from '@/components';
import { FindAllCategoriesQuery } from '@/graphql/__generated__/output';
import { FieldTimeOutlined, LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React from 'react';
import { HighlightMatches } from './highlight-matches';
import Link from 'next/link';

interface Props {
  setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
  activeSearch: boolean;
  categories: FindAllCategoriesQuery['findAllCategories'] | undefined;
  loading: boolean;
  className?: string;
}

export const SearchInput: React.FC<Props> = ({
  setActiveSearch,
  loading,
  categories,
  activeSearch,
  className,
}) => {
  const [searchInput, setSearchInput] = React.useState('');

  const sortedCategories = React.useMemo(() => {
    if (loading || !categories) return null;
    return [...categories].sort((a, b) => a.name.localeCompare(b.name));
  }, [categories, loading]);

  const filteredCategories = React.useMemo(() => {
    if (!sortedCategories) return null;
    return sortedCategories
      .slice(0, 8)
      .filter((category) => category.name.toLowerCase().includes(searchInput.toLowerCase()));
  }, [sortedCategories, searchInput]);

  const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={clsx('flex flex-1', className)}>
      <div className="flex w-full relative">
        <input
          value={searchInput}
          onChange={(e) => changeInputText(e)}
          type="text"
          placeholder="Поиск по объявлениям"
          className="flex-1 border-2 border-r-0 border-sky-500 rounded-l-xl py-2 px-4 focus:outline-none"
          onFocus={() => setActiveSearch(true)}
          onBlur={() => {
            setTimeout(() => {
              setActiveSearch(false);
            }, 100);
          }}
        />
        <div
          className={clsx(
            'rounded-2xl absolute top-16 w-full bg-white z-20 py-3.5 duration-100',
            activeSearch ? 'opacity-100 block' : 'opacity-0 hidden',
          )}>
          {loading || !filteredCategories ? (
            <div className="w-full flex justify-center items-center py-16">
              <LoadingOutlined style={{ fontSize: 36 }} />
            </div>
          ) : (
            <div>
              {filteredCategories.length === 0 ? (
                <div className="hover:bg-neutral-200 cursor-pointer px-8 py-3 text-[15px] flex justify-between font-bold">
                  <span>{searchInput}</span>
                  <FieldTimeOutlined />
                </div>
              ) : (
                filteredCategories.map((item, id) => (
                  <Link key={id} href={'/category/' + item.id}>
                    <div className="hover:bg-neutral-200 cursor-pointer px-8 py-3 text-[15px] flex justify-between select-none">
                      <span>
                        <HighlightMatches query={searchInput} text={item.name} />
                      </span>
                      <FieldTimeOutlined />
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <Button className="rounded-l-none py-2.5 px-4" text="Найти" />
    </div>
  );
};
