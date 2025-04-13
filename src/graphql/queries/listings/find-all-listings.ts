import { gql } from '@apollo/client';

export const FIND_ALL_LISTINGS = gql`
  query FindAllListings($limit: Int, $offset: Int) {
    findAllListings(limit: $limit, offset: $offset) {
      listings {
        id
        name
        price
        images
        createdAt
        city
      }
      hasMore
    }
  }
`;
