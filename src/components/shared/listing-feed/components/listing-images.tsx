import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface Props {
  images: string[];
  className?: string;
}

export const ListingImages: React.FC<Props> = ({ images, className }) => {
  return (
    <div className={clsx('', className)}>
      <Image src={images[0]} width={500} height={500} alt="listing image" />
      <div className="flex">
        {images.map((image, id) => (
          <Image key={id} width={100} height={100} src={image} alt="listing image" />
        ))}
      </div>
    </div>
  );
};
