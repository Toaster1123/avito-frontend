'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface Props {
  images: string[];
  className?: string;
}

export const ListingImages: React.FC<Props> = ({ images, className }) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const onChangeImage = (index: number) => {
    console.log(index);
    if (index >= images.length) {
      return setImageIndex(0);
    }
    if (index < 0) {
      return setImageIndex(images.length - 1);
    }
    return setImageIndex(index);
  };
  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <div className="flex relative h-[500px]">
        <div
          onClick={() => onChangeImage(imageIndex - 1)}
          className="px-4 absolute duration-200 flex items-center h-full hover:bg-black/35 cursor-pointer z-40">
          <LeftOutlined style={{ color: 'white' }} className="text-xl" />
        </div>
        <div className="bg-neutral-300 flex w-full relative justify-center select-none">
          <Image
            src={images[imageIndex] || ''}
            alt="listing image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg object-contain"
          />
        </div>
        <div
          onClick={() => onChangeImage(imageIndex + 1)}
          className="px-4 absolute duration-200 right-0 flex items-center h-full hover:bg-black/35 cursor-pointer">
          <RightOutlined style={{ color: 'white' }} className="text-xl" />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
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
              className={clsx(
                'rounded-md object-cover',
                id === imageIndex && 'border-2 border-blue-500',
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
