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
        id
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

// export const GET_ALL_LISTINGS = (withBreadcrumb: boolean) => gql`
//   query FindAllListings($limit: Int, $offset: Int, $active: Boolean, $categoryId: ID) {
//     findAllListings(limit: $limit, offset: $offset, active: $active, categoryId: $categoryId) {
//       listings {
//         id
//         name
//         price
//         city
//         images
//         createdAt
//         category {
//           id
//           name
//         }
//         ${withBreadcrumb ? `categoryBreadcrumb { id name }` : ''}
//       }
//       hasMore
//     }
//   }
// `;
