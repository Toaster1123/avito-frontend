'use client';
import { FindAllCategoriesQuery } from '@/graphql/__generated__/output';
import React from 'react';
import { CategoryItemTitle } from './category-item-title';

interface Props {
  categories: FindAllCategoriesQuery['findAllCategories'][0];
}

export const ChildItemSection: React.FC<Props> = ({ categories }) => {
  const [showAll, setShowAll] = React.useState(false);
  const hasMore = categories.children && categories.children.length > 5;
  const visibleItems = showAll ? categories.children : categories.children?.slice(0, 5);
  React.useEffect(() => {
    return () => {
      setShowAll(false);
    };
  }, []);

  return (
    <div className="break-inside-avoid mb-6 space-y-2">
      <CategoryItemTitle title={categories.name} id={categories.id} size="sm" />
      {visibleItems?.map((childItem) => (
        <CategoryItemTitle key={childItem.id} title={childItem.name} id={childItem.id} size="xs" />
      ))}
      {hasMore && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="hover:underline text-blue-500 hover:text-red-400 cursor-pointer text-sm">
          Ещё {categories.children?.slice(4, categories.children.length - 1).length}
        </button>
      )}
    </div>
  );
};
