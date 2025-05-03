import React from 'react';
import { ListingDetails, ListingTextData, SameListings } from './components';
import { GetOneListingQuery } from '@/graphql/__generated__/output';
import { SallerActionPanel } from '../saller-action-panel';
import { ListingImages } from '../listing-images';
import { TopBreadcrumb } from '../top-breadcrumb';
import { Container } from '@/components';

type Listing = GetOneListingQuery['findOneListing'];

interface Props {
  listing: Listing;
  loading: boolean;
}

export const ListingFeed: React.FC<Props> = async ({ listing }) => {
  const activeListingCount =
    listing.user.listings?.filter((item) => item.active === true).length || null;
  const reviewsCount = listing.user.receivedReviews?.length || null;
  const details = [
    { name: 'Категория', value: listing.category.name },
    { name: 'Состояние', value: 'Б/у' },
    { name: 'Основной цвет', value: 'Черный' },
    { name: 'Угол', value: 'Слева' },
    { name: 'Спальное место', value: 'Есть' },
    { name: 'Материал', value: 'ткань' },
  ];

  return (
    <Container className="grid grid-cols-2 gap-14">
      <div>
        <TopBreadcrumb breadCrumbs={listing.categoryBreadcrumb} />
        <h2 className="font-bold text-3xl mt-2 mb-6">{listing.name}</h2>
        <div className="flex flex-col gap-y-10">
          <ListingImages images={listing.images} />
          <ListingTextData name="Описание" description={listing.description} />
          <ListingDetails details={details} />
          <ListingTextData name="Адрес" description={`г. ${listing.city}`} />
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
    </Container>
  );
};
