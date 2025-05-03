'use client';
import { Container } from '@/components';
import { useInfiniteScrollListings } from '@/hooks';
import React from 'react';
import { TopBreadcrumb } from '../top-breadcrumb';

interface Props {
  id: string;
}

export const CategoriesWrapper: React.FC<Props> = ({ id }) => {
  const { listings, error } = useInfiniteScrollListings(id);
  console.log(listings, error);

  return <Container>{/* <TopBreadcrumb breadCrumbs={}/>    */}</Container>;
};
