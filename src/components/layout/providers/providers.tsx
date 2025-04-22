'use client';
import NextTopLoader from 'nextjs-toploader';
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { FC, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/services';
import { ScrollToTop } from '../scroll-to-top';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <AntdRegistry>
      <NextTopLoader color="oklch(58.8% 0.158 241.966)" />
      <ScrollToTop />
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </AntdRegistry>
  );
};
