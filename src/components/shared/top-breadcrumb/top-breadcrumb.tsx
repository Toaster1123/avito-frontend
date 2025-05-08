import { GetCategoryBreadcrumbQuery } from '@/graphql/__generated__/output';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { BreadcrumbText } from './breadcrumb-text';

interface Props {
  breadCrumbs: GetCategoryBreadcrumbQuery['getCategoryBreadcrumb'];
  loading: boolean;
  categoryId: string;
  className?: string;
}

export const TopBreadcrumb: React.FC<Props> = ({ loading, breadCrumbs, categoryId, className }) => {
  console.log(categoryId);
  if (loading || !breadCrumbs) {
    return <div className="flex bg-neutral-300 animate-pulse w-1/3 h-5 rounded-2xl" />;
  }
  const firstItem = breadCrumbs?.[0];
  const lastItem = breadCrumbs?.[breadCrumbs.length - 1];
  const restItems = breadCrumbs?.slice(1, breadCrumbs.length - 1);

  return (
    <div className={clsx('flex gap-1.5 w-fit text-sm text-neutral-500 duration-150', className)}>
      <BreadcrumbText categoryId={firstItem.id} text={firstItem.name} />
      {/* <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">{firstItem.name}</span> */}
      {breadCrumbs && breadCrumbs.length > 2 && <span>{'>'}</span>}
      {restItems && restItems?.length > 2 ? (
        <>
          <span>...</span>
          <span>{'>'}</span>
          {restItems.splice(restItems.length - 2, restItems.length - 1).map((item, id) => (
            <div key={id} className="cursor-text flex gap-1.5">
              <BreadcrumbText categoryId={item.id} text={item.name} />

              {/* <Link href={'/category/' + item.id}>
                <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">
                  {item.name}
                </span>
              </Link> */}
              {id < restItems.length - 1 && <span>{'>'}</span>}
            </div>
          ))}
        </>
      ) : (
        restItems?.map((item, id) => (
          <div key={id} className="cursor-text flex gap-1.5">
            <Link href={'/category/' + item.id}>
              <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">
                {item.name}
              </span>
            </Link>
            {id < restItems.length - 1 && <span>{'>'}</span>}
          </div>
        ))
      )}
      <span>{'>'}</span>
      {/* <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">{lastItem.name}</span>
       */}
      <BreadcrumbText categoryId={lastItem.id} text={lastItem.name} />
    </div>
  );
};
