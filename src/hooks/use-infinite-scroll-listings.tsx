import { FIND_ALL_LISTINGS } from '@/graphql';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const limit = 24;

export const useInfiniteScrollListings = () => {
  const { ref, inView } = useInView();
  const [items, setItems] = useState<[] | any[]>([]);
  const { data, loading, error, fetchMore } = useQuery(FIND_ALL_LISTINGS, {
    variables: {
      limit,
      offset: 0,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data?.findAllListings.listings) {
      setItems(data.findAllListings.listings);
    }
  }, [data]);

  useEffect(() => {
    if (inView && !loading) {
      fetchMore({
        variables: {
          offset: items.length,
          limit,
        },
      }).then(({ data }) => {
        if (data?.findAllListings?.listings.length) {
          setItems((prev) => [...prev, ...data.findAllListings.listings]);
        }
      });
    }
  }, [inView]);

  return {
    listings: items,
    loading,
    error,
    ref,
  };
};
