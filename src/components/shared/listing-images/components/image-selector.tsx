'use client';
import React from 'react';
import { ImageArrow } from './image-arrow';
import Image from 'next/image';

interface Props {
  onOpenFullscreen: () => void;
  image: string;
  onClickNextImage: () => void;
  onClickPrevImage: () => void;
  showArrows: boolean;
}

export const ImageSelector: React.FC<Props> = ({
  showArrows,
  onOpenFullscreen,
  onClickNextImage,
  onClickPrevImage,
  image,
}) => {
  return (
    <div className="flex relative h-[500px]">
      <ImageArrow showArrow={showArrows} position="left" onClick={() => onClickPrevImage()} />
      <div className="bg-neutral-300 flex w-full relative justify-center select-none cursor-pointer">
        <Image
          onClick={() => onOpenFullscreen()}
          src={image || ''}
          alt="listing image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="eager"
          className="rounded-lg object-contain"
        />
      </div>
      <ImageArrow showArrow={showArrows} position="right" onClick={() => onClickNextImage()} />
    </div>
  );
};
