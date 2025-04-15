import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const AsideAds: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('sticky top-8', className)}>
      <div className="bg-neutral-200 h-[500px] text-neutral-400 w-full flex items-center justify-center">
        <span className="w-1/2 flex flex-col items-center">
          Здесь могла быть
          <a
            className="hover:text-neutral-500 hover:underline transition-all duration-100 ease-in-out"
            href="http://static.plaync.co.kr/gaiaupload/gpevent/bbs/201204/1991220120404163314.html">
            ваша реклама
          </a>
        </span>
      </div>
    </div>
  );
};
