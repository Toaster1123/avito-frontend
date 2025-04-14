import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components';

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  return (
    <Container className={(clsx('px-4 py-6'), className)}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Link href="/auto" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_1.png"
              alt="Авто"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Авто</span>
        </Link>
        <Link href="/nedvizhimost" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_4_v2.png"
              alt="Недвижимость"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Недвижимость</span>
        </Link>

        <Link href="/odezhda" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_27.png"
              alt="Одежда"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Одежда, обувь, аксессуары</span>
        </Link>
        <Link href="/hobbi" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_7.png"
              alt="Хобби"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Хобби и отдых</span>
        </Link>
        <Link href="/zhivotnye" className="flex flex-col items-center">
          <div className="mb-2 h-24 w-full overflow-hidden rounded-lg bg-white p-2 shadow-sm">
            <Image
              src="https://www.avito.st/s/avito/components/visual_rubricator/156x90/cat_35.png"
              alt="Животные"
              width={150}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-sm">Животные</span>
        </Link>
      </div>
    </Container>
  );
};
