import type { FC } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx('mt-10 bg-gray-100 py-8', className)}>
      <div className="mb-6 text-center text-sm text-gray-500">
        © ООО «Авито» 2007-2025.
        <br />
        Авито использует{' '}
        <Link href="#" className="text-cyan-600 hover:underline">
          рекомендательные технологии
        </Link>
        .
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <Link href="#" className="text-gray-600 hover:text-cyan-600 hover:underline">
          Правила Авито
        </Link>
        <Link href="#" className="text-gray-600 hover:text-cyan-600 hover:underline">
          Реклама на сайте
        </Link>
        <Link href="#" className="text-gray-600 hover:text-cyan-600 hover:underline">
          О компании
        </Link>
        <Link href="#" className="text-gray-600 hover:text-cyan-600 hover:underline">
          Карьера в Авито
        </Link>
      </div>
    </footer>
  );
};
