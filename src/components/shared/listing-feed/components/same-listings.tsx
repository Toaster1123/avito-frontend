'use client';

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const SameListings: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const onClickMore = () => {
    setOpen(!open);
  };
  return (
    <div className={className}>
      <div className="select-none cursor-pointer flex items-center" onClick={onClickMore}>
        <span className="text-xl font-bold">Похожие объявления</span>
        <DownOutlined className={clsx('ml-2 duration-300', { 'rotate-180': open })} size={20} />
      </div>
    </div>
  );
};
