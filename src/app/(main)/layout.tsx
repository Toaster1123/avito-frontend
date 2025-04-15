import { Footer, Header, SearchSection } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchSection className="max-w-7xl max-[1380px]:px-24 mx-auto" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
