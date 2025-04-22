import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface Props {
  images: string[];
  index: number;
  onChangeImage: (index: number) => void;
  className?: string;
}

export const ImagesList: React.FC<Props> = ({ images, index, onChangeImage, className }) => {
  return (
    <div className={clsx('flex gap-2 flex-wrap', className)}>
      {images.map((image, id) => (
        <div
          key={id}
          className="relative w-20 h-20 cursor-pointer select-none"
          onClick={() => onChangeImage(id)}>
          <Image
            src={image}
            alt="listing thumbnail"
            fill
            sizes="(max-width: 768px) 50px, 80px"
            className={clsx('rounded-md object-cover', id === index && 'border-2 border-blue-500')}
          />
        </div>
      ))}
    </div>
  );
};
