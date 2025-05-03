import { gql } from '@apollo/client';

export const GET_ONE_LISTING = gql`
  query GetOneListing($id: ID!) {
    findOneListing(id: $id) {
      id
      name
      description
      price
      city
      images
      createdAt
      categoryBreadcrumb {
        name
      }
      category {
        id
        name
      }
      user {
        id
        name
        email
        rating
        profileImage
        createdAt
        receivedReviews {
          id
        }
        listings {
          active
        }
      }
    }
  }
`;

export const GET_TITLE_LISTING = gql`
  query GetTitleListing($id: ID!) {
    findOneListing(id: $id) {
      name
    }
  }
`;

export const GET_ALL_LISTINGS_BY_CATEGORY = gql`
  query FindAllListingsByCategory($categoryId: ID!, $limit: Int, $offset: Int, $active: Boolean) {
    findAllListingsByCategory(
      categoryId: $categoryId
      limit: $limit
      offset: $offset
      active: $active
    ) {
      listings {
        id
        name
        active
        category {
          id
          name
        }
      }
      hasMore
    }
  }
`;
