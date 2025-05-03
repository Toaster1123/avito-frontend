'use client';
import { Button, CategoryItem } from '@/components';
import { FindAllCategoriesQuery } from '@/graphql/__generated__/output';
import { selectCategoryImage } from '@/lib';
import { LoadingOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useClickAway } from 'react-use';

interface Props {
  setActiveCategories: React.Dispatch<React.SetStateAction<boolean>>;
  activeCategories: boolean;
  categories: FindAllCategoriesQuery['findAllCategories'] | undefined;
  loading: boolean;
  className?: string;
}

export const CategoriesSection: React.FC<Props> = ({
  setActiveCategories,
  activeCategories,
  loading,
  categories,
  className,
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const clickRef = React.useRef<HTMLDivElement>(null);
  useClickAway(clickRef, () => setActiveCategories(false));
  return (
    <div ref={clickRef} className={clsx('', className)}>
      <Button
        className="py-2.5 px-4"
        text="Все категории"
        image={activeCategories ? 'close' : 'search'}
        onCloseFunction={() => setActiveCategories(false)}
        onClick={() => setActiveCategories(true)}
      />
      <div
        className={clsx(
          'pl-6 rounded-b-2xl mt-4 pt-8 pb-16 absolute flex flex-col bg-white w-full',
          activeCategories ? 'block opacity-100' : 'hidden opacity-0',
        )}>
        {loading || !categories ? (
          <div className="w-full flex justify-center items-center py-16">
            <LoadingOutlined style={{ fontSize: 36 }} />
          </div>
        ) : (
          <div className="flex gap-x-8">
            <div className="">
              {categories?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCategory(index);
                  }}
                  className={clsx(
                    'flex gap-x-12 items-center justify-between py-2.5 px-2 hover:bg-neutral-200 rounded-xl',
                    index === selectedCategory && 'bg-neutral-200',
                  )}>
                  <div className="flex gap-2 select-none">
                    <div className="w-7 h-6">
                      <Image
                        alt=""
                        src={selectCategoryImage(item.name)}
                        width={28}
                        height={24}
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      />
                    </div>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>
                  <RightOutlined style={{ fontSize: 12 }} />
                </div>
              ))}
            </div>
            <div className="w-full overflow-auto h-[620px]">
              <CategoryItem category={categories[selectedCategory]} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
