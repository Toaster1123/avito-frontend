import clsx from 'clsx';
import type { FC, Ref } from 'react';

interface Props {
  ref: Ref<HTMLDivElement> | undefined;
  showList: boolean;
  hasMore: boolean;
  className?: string;
}

export const ListingsSceleton: FC<Props> = ({ ref, showList, hasMore, className }) => {
  const sceletonArray = Array(8).fill(null);
  if (!showList && hasMore) {
    return <span ref={ref} />;
  }
  if (showList) {
    return (
      <>
        <div
          className={clsx(
            'max-[1380px]:grid-cols-3 max-xl:grid-cols-2 grid gap-4 gap-y-8 grid-cols-4',
            className,
          )}>
          <div className="rounded-xl h-[364px] w-full bg-neutral-300 animate-pulse" />
          {sceletonArray.map((_, id) => (
            <div key={id} className="rounded-xl h-[364px] w-full bg-neutral-300 animate-pulse" />
          ))}
        </div>
      </>
    );
  }
};
