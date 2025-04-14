import clsx from 'clsx';
import type { FC, Ref } from 'react';

interface Props {
  ref: Ref<HTMLDivElement> | undefined;
  hideList: boolean;
  className?: string;
}

export const ListingsSceleton: FC<Props> = ({ ref, hideList, className }) => {
  const sceletonArray = Array(7).fill(null);
  if (!hideList) {
    return (
      <div
        className={clsx(
          'mt-4 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          className,
        )}>
        <div ref={ref} className="rounded-xl h-[364px] w-60 bg-neutral-300 animate-pulse" />
        {sceletonArray.map((_, id) => (
          <div key={id} className="rounded-xl h-[364px] w-60 bg-neutral-300 animate-pulse" />
        ))}
      </div>
    );
  }
};
