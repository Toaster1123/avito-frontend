'use client';
import clsx from 'clsx';
import React from 'react';
import { FullscreenImages, ImageSelector, ImagesList } from './components';
import { useChangeScroll } from '@/hooks';

interface Props {
  images: string[];
  className?: string;
}

export const ListingImages: React.FC<Props> = ({ images, className }) => {
  const showArrows = images.length > 1;
  const [showFullscreen, setShowFullscreen] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);
  const onChangeImage = (index: number) => {
    if (index >= images.length) {
      return setImageIndex(0);
    }
    if (index < 0) {
      return setImageIndex(images.length - 1);
    }
    return setImageIndex(index);
  };
  useChangeScroll(showFullscreen);
  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <ImageSelector
        onOpenFullscreen={() => setShowFullscreen(true)}
        showArrows={showArrows}
        image={images[imageIndex]}
        onClickNextImage={() => onChangeImage(imageIndex + 1)}
        onClickPrevImage={() => onChangeImage(imageIndex - 1)}
      />
      {showFullscreen && (
        <FullscreenImages
          onCloseFullscreen={() => setShowFullscreen(false)}
          imageIndex={imageIndex}
          images={images}
          onClickNextImage={() => onChangeImage(imageIndex + 1)}
          onClickPrevImage={() => onChangeImage(imageIndex - 1)}
          showArrows={showArrows}
          onChangeImage={onChangeImage}
        />
      )}

      <ImagesList images={images} index={imageIndex} onChangeImage={onChangeImage} />
    </div>
  );
};
