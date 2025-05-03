import { gql } from '@apollo/client';

export const GET_TITLE_CATEGORY = gql`
  query GET_CATEGORY_TITLE($id: ID!) {
    findOneCategory(id: $id) {
      name
    }
  }
`;
