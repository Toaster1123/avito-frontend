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
  const activeListingCount =
    listing.user.listings?.map((item) => item.active === true).length || null;
  console.log(listing.user.listings, activeListingCount);

  return (
    <div className="grid grid-cols-2 max-[1380px]:px-24 max-w-7xl mx-auto gap-14">
      <div className="">
        <LitingPagination />
        <h2 className="font-bold text-3xl mt-2 mb-6">{listing.name}</h2>
        <ListingImages images={listing.images} />
        <ListingDescription description={listing.description} />
        <SameListings />
      </div>
      <SallerActionPanel
        userName={listing.user.name}
        price={listing.price}
        registerDate={listing.user.createdAt}
        rating={listing.user.rating}
        activeListingCount={activeListingCount}
      />
    </div>
  );
};
