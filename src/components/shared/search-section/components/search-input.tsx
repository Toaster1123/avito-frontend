'use client';
import { Button } from '@/components';
import { useFindAllCategoriesQuery } from '@/graphql/__generated__/output';
import { FieldTimeOutlined, LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React from 'react';

interface Props {
  setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
  activeSearch: boolean;
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ setActiveSearch, activeSearch, className }) => {
  const { data, loading } = useFindAllCategoriesQuery();
  const [searchInput, setSearchInput] = React.useState('');

  const sortedCategories = React.useMemo(() => {
    if (loading || !data?.categories) return null;
    return [...data.categories].sort((a, b) => a.name.localeCompare(b.name));
  }, [data, loading]);

  const filteredCategories = React.useMemo(() => {
    if (!sortedCategories) return null;
    return sortedCategories
      .slice(0, 8)
      .filter((category) => category.name.toLowerCase().includes(searchInput.toLowerCase()));
  }, [sortedCategories, searchInput]);

  const changeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const highlightMatches = (text: string, query: string): React.ReactNode => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="font-bold">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };
  return (
    <div className={clsx('flex flex-1 ', className)}>
      <div className="flex w-full relative">
        <input
          value={searchInput}
          onChange={(e) => changeInputText(e)}
          type="text"
          placeholder="Поиск по объявлениям"
          className="flex-1 border-2 border-r-0 border-sky-500 rounded-l-xl py-2 px-4 focus:border-2 focus:border-sky-500 focus:outline-none"
          onFocus={() => setActiveSearch(true)}
          onBlur={() => setActiveSearch(false)}
        />
        <div
          className={clsx(
            'rounded-2xl absolute top-16 w-full bg-white z-20 py-3.5 duration-100',
            activeSearch ? 'opacity-100' : 'opacity-0',
          )}>
          {loading || !filteredCategories ? (
            <div className="w-full flex justify-center items-center py-16">
              <LoadingOutlined style={{ fontSize: 36 }} />
            </div>
          ) : (
            <div>
              {filteredCategories.length === 0 ? (
                <div
                  onClick={() => {
                    console.log('clisk');
                  }}
                  className="hover:bg-neutral-200 cursor-pointer px-8 py-3 text-[15px] flex justify-between font-bold">
                  <span>{searchInput}</span>
                  <FieldTimeOutlined />
                </div>
              ) : (
                filteredCategories.map((item, id) => (
                  <div
                    onClick={() => {
                      console.log('clisk', item.name);
                    }}
                    key={id}
                    className="hover:bg-neutral-200 cursor-pointer px-8 py-3 text-[15px] flex justify-between">
                    <span>
                      {highlightMatches(item.name, searchInput)}
                      {/* {item.name} */}
                    </span>
                    <FieldTimeOutlined />
                  </div>
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
