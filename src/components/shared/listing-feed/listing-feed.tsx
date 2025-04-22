import React from 'react';
import { ListingAdres, ListingDescription, LitingPagination, SameListings } from './components';
import { GetOneListingQuery } from '@/graphql/__generated__/output';
import { SallerActionPanel } from '../saller-action-panel';
import { ListingImages } from '../listing-images';

type Listing = GetOneListingQuery['findOneListing'];

interface Props {
  listing: Listing;
  loading: boolean;
}

export const ListingFeed: React.FC<Props> = async ({ listing }) => {
  const activeListingCount =
    listing.user.listings?.map((item) => item.active === true).length || null;
  const reviewsCount = listing.user.receivedReviews?.length || null;
  return (
    <div className="grid grid-cols-2 max-[1380px]:px-24 max-w-7xl mx-auto gap-14">
      <div className="">
        <LitingPagination />
        <h2 className="font-bold text-3xl mt-2 mb-6">{listing.name}</h2>
        <div className="flex flex-col gap-y-10">
          <ListingImages images={listing.images} />
          <ListingDescription description={listing.description} />
          <ListingAdres adres={listing.city} />
          <SameListings />
        </div>
      </div>
      <SallerActionPanel
        userName={listing.user.name}
        price={listing.price}
        registerDate={listing.user.createdAt}
        rating={listing.user.rating}
        activeListingCount={activeListingCount}
        reviewsCount={reviewsCount}
      />
    </div>
  );
};
