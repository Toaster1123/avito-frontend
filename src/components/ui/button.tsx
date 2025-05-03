import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  image?: 'search' | 'close';
  className?: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  onCloseFunction?: () => void;
}

export const Button: React.FC<Props> = ({
  text,
  image,
  fontSize,
  onCloseFunction,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        className,
        'cursor-pointer select-none rounded-xl duration-150 bg-sky-500 text-white hover:bg-sky-600 flex items-center',
        `text-${fontSize}`,
      )}
      {...rest}>
      {image === 'search' && <SearchOutlined className="mr-2 h-4 w-4" size={16} />}

      {image === 'close' && (
        <CloseOutlined
          onClick={(e) => {
            e.stopPropagation();
            if (onCloseFunction) {
              onCloseFunction();
            }
          }}
          className="mr-2 h-4 w-4 cursor-pointer"
          size={16}
        />
      )}

      <span className="text-center w-full">{text}</span>
    </button>
  );
};
