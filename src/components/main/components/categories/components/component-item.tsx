import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  link: string;
  image: string;
  title: string;
  className?: string;
}

export const ComponentItem: React.FC<Props> = ({ image, link, title, className }) => {
  return (
    <Link href={link} className={clsx('flex relative  flex-col items-center', className)}>
      <span className="text-center absolute top-2 text-sm">{title}</span>
      <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-neutral-100 shadow-sm">
        <Image
          src={image}
          alt={title}
          width={150}
          height={100}
          className="h-full w-fullobject-contain"
        />
      </div>
    </Link>
  );
};
