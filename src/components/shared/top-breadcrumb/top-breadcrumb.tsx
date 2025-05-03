import { GetOneListingQuery } from '@/graphql/__generated__/output';
import clsx from 'clsx';
import React from 'react';

type TBreadCrumbs = GetOneListingQuery['findOneListing']['categoryBreadcrumb'];

interface Props {
  breadCrumbs: TBreadCrumbs;
  className?: string;
}

export const TopBreadcrumb: React.FC<Props> = ({ breadCrumbs, className }) => {
  const firstItem = breadCrumbs?.[0];
  const lastItem = breadCrumbs?.[breadCrumbs.length - 1];
  const restItems = breadCrumbs?.slice(1, breadCrumbs.length - 1);
  return (
    <div className={clsx('flex gap-1.5 w-fit text-sm text-neutral-500 duration-150', className)}>
      <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">{firstItem?.name}</span>
      {breadCrumbs && breadCrumbs.length > 2 && <span>{'>'}</span>}
      {restItems && restItems?.length > 2 ? (
        <>
          <span>...</span>
          <span>{'>'}</span>
          {restItems.splice(restItems.length - 2, restItems.length - 1).map((item, id) => (
            <div key={id} className="cursor-text flex gap-1.5">
              <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">
                {item.name}
              </span>
              {id < restItems.length - 1 && <span>{'>'}</span>}
            </div>
          ))}
        </>
      ) : (
        restItems?.map((item, id) => (
          <div key={id} className="cursor-text flex gap-1.5">
            <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">{item.name}</span>
            {id < restItems.length - 1 && <span>{'>'}</span>}
          </div>
        ))
      )}
      <span>{'>'}</span>
      <span className="cursor-pointer hover:text-sky-500 whitespace-nowrap">{lastItem?.name}</span>
    </div>
  );
};
