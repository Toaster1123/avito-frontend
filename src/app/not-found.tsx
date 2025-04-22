import { Button } from '@/components';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <h1 className="text-2xl">Такой страницы не существует</h1>
      <Link href={'/'}>
        <Button text="Вернуться на главную" className="mt-3 py-3 px-6" />
      </Link>
    </div>
  );
}
