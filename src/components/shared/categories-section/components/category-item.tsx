import { FindAllCategoriesQuery } from '@/graphql/__generated__/output';
import React from 'react';
import { CategoryItemTitle } from './category-item-title';
import { ChildItemSection } from './child-item-section';

interface Props {
  category: FindAllCategoriesQuery['findAllCategories'][0];
}

export const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <div className="w-full">
      <CategoryItemTitle title={category.name} id={category.id} />
      {category.children && category.children.length > 0 && (
        <div className="columns-2 gap-4 mt-4">
          {category.children.map((section, id) => (
            <ChildItemSection key={id + section.name} categories={section} />
          ))}
        </div>
      )}
    </div>
  );
};
