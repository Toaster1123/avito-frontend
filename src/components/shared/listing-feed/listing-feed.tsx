import { getClient } from '@/graphql/appolo-client';
import { GET_ONE_LISTING } from '@/graphql/appolo-consts/listings-query';
import React from 'react';
import { ListingDescription, ListingImages, LitingPagination, SameListings } from './components';
import { GetOneListingQuery } from '@/graphql/__generated__/output';
import { SallerActionPanel } from '../saller-action-panel';

type Listing = GetOneListingQuery['findOneListing'];

interface Props {
  id: string;
}

export const ListingFeed: React.FC<Props> = async ({ id }) => {
  console.log('id', id);
  const client = getClient();
  const { data, loading } = await client.query({
    query: GET_ONE_LISTING,
    variables: { id },
  });
  console.log(loading);
  const listing: Listing = data.findOneListing;

  return (
    <div className="flex max-[1380px]:px-24 py-6 justify-center">
      <div className="">
        <LitingPagination />
        <h2 className="font-bold text-3xl mt-2">{listing.name}</h2>
        <ListingImages images={listing.images} />
        <ListingDescription description={listing.description} />
        <SameListings />
      </div>
      <SallerActionPanel price={listing.price} />
    </div>
  );
};
