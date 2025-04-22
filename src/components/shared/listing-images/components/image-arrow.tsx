import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React from 'react';

interface Props {
  position: 'left' | 'right';
  showArrow: boolean;
  onClick: () => void;
  className?: string;
}

export const ImageArrow: React.FC<Props> = ({ showArrow = true, position, onClick, className }) => {
  if (showArrow) {
    return (
      <div
        onClick={() => onClick()}
        className={clsx(
          'px-4 absolute duration-200 flex items-center h-full hover:bg-black/35 cursor-pointer z-40',
          position === 'left' ? 'left-0' : 'right-0',
          className,
        )}>
        {position === 'left' ? (
          <LeftOutlined style={{ color: 'white' }} className="text-xl" />
        ) : (
          <RightOutlined style={{ color: 'white' }} className="text-xl" />
        )}
      </div>
    );
  }
};
