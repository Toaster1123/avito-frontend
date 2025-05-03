'use client';
import { Footer, HeaderWrapper } from '@/components';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <Suspense>
      <div className="min-h-screen flex flex-col">
        <HeaderWrapper isSticked={pathname == '/'} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </Suspense>
  );
}
