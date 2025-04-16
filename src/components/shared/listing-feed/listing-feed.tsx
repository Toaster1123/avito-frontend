import React from 'react';
import { ListingDescription, ListingImages, LitingPagination, SameListings } from './components';
import { GetOneListingQuery } from '@/graphql/__generated__/output';
import { SallerActionPanel } from '../saller-action-panel';

type Listing = GetOneListingQuery['findOneListing'];

interface Props {
  listing: Listing;
  loading: boolean;
}

export const ListingFeed: React.FC<Props> = async ({ listing }) => {
  return (
    <div className="grid grid-cols-2 max-[1380px]:px-24 max-w-7xl mx-auto py-6 gap-14">
      <div className="">
        <LitingPagination />
        <h2 className="font-bold text-3xl mt-2 mb-6">{listing.name}</h2>
        <ListingImages images={listing.images} />
        <ListingDescription description={listing.description} />
        <SameListings />
      </div>
      <SallerActionPanel price={listing.price} />
    </div>
  );
};
