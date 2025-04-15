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
      user {
        id
        name
        email
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
