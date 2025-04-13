'use client';
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
      <ScrollToTop />
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </AntdRegistry>
  );
};
