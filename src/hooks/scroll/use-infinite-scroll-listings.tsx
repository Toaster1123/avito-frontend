'use client';
import { ListingsSceleton } from '@/components';
import { useFindAllListingsQuery, FindAllListingsQuery } from '@/graphql/__generated__/output';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const limit = 24;
type Listing = FindAllListingsQuery['findAllListings']['listings'][0];

export const useInfiniteScrollListings = (categoryId?: string) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [items, setItems] = useState<Listing[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const {
    data,
    loading: initialLoading,
    error,
    fetchMore,
  } = useFindAllListingsQuery({
    variables: {
      limit,
      offset: 0,
      active: true,
      categoryId,
    },
    fetchPolicy: 'cache-first',
  });

  useEffect(() => {
    if (!data) return;
    setItems(data.findAllListings.listings);
    setHasMore(data.findAllListings.hasMore);
  }, [data]);

  useEffect(() => {
    if (inView && data?.findAllListings.hasMore && !isLoadingMore) {
      setIsLoadingMore(true);
      fetchMore({
        variables: {
          offset: items.length,
          limit,
        },
      })
        .then(({ data }) => {
          if (data?.findAllListings?.listings.length) {
            setItems((prev) => [...prev, ...data.findAllListings.listings]);
            setHasMore(data.findAllListings.hasMore);
          } else {
            setHasMore(false);
          }
        })
        .finally(() => setIsLoadingMore(false));
    }
  }, [inView, hasMore, data, isLoadingMore, items.length, fetchMore]);
  const listingsSceleton = (
    <ListingsSceleton ref={ref} showList={initialLoading || isLoadingMore} hasMore={hasMore} />
  );
  return {
    listings: items,
    loading: initialLoading || isLoadingMore,
    error,
    listingsSceleton,
  };
};
