import React from 'react';
import { ImageArrow } from './image-arrow';
import Image from 'next/image';
import { useClickAway } from 'react-use';
import { CloseOutlined } from '@ant-design/icons';
import { ImagesList } from './images-list';
import { Button } from '@/components/ui';

interface Props {
  images: string[];
  onCloseFullscreen: () => void;
  onClickNextImage: () => void;
  onClickPrevImage: () => void;
  onChangeImage: (index: number) => void;
  imageIndex: number;
  showArrows: boolean;
}

export const FullscreenImages: React.FC<Props> = ({
  showArrows,
  images,
  onClickNextImage,
  onClickPrevImage,
  imageIndex,
  onCloseFullscreen,
  onChangeImage,
}) => {
  const clickRef = React.useRef<HTMLDivElement>(null);
  useClickAway(clickRef, () => onCloseFullscreen());

  return (
    <div className="bg-black/60 fixed top-0 left-0 w-full h-full z-40">
      <div ref={clickRef} className="w-[65%] mx-auto h-full ">
        <div className="w-full h-full relative">
          <div className="mx-auto h-full ">
            <div className="flex h-full">
              <ImageArrow
                showArrow={showArrows}
                position="left"
                onClick={() => onClickPrevImage()}
              />
              <div className="bg-neutral-300 flex w-full relative justify-center select-none">
                <Image
                  src={images[imageIndex] || ''}
                  alt="listing image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-contain"
                />
              </div>
              <ImageArrow
                showArrow={showArrows}
                position="right"
                onClick={() => onClickNextImage()}
              />
            </div>
            <CloseOutlined
              onClick={onCloseFullscreen}
              style={{
                color: 'white',
                fontSize: '28px',
                position: 'absolute',
                top: '2px',
                right: '-30px',
              }}
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4">
            <Button text="Написать" className="py-2 px-16" fontSize="lg" />
          </div>
        </div>
        <div className="absolute right-6 top-16 h-full">
          <ImagesList
            className="flex-col"
            images={images}
            index={imageIndex}
            onChangeImage={onChangeImage}
          />
        </div>
      </div>
    </div>
  );
};
