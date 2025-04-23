import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** Access token */
  accessToken: Scalars['String']['output'];
  /** RefreshToken token */
  refreshToken: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  /** ID категории */
  id: Scalars['ID']['output'];
  /** Объявления в категории */
  listings: Array<Listing>;
  /** Название категории */
  name: Scalars['String']['output'];
  /** Родительская категория */
  parentId?: Maybe<Scalars['String']['output']>;
};

export type CreateCategoryInput = {
  /** Название категории */
  name: Scalars['String']['input'];
  /** Родительская категория */
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateListingInput = {
  /** Описание объявления */
  description: Scalars['String']['input'];
  /** Изображения объявления */
  images: Array<Scalars['String']['input']>;
  /** Название объявления */
  name: Scalars['String']['input'];
  /** Цена объявления */
  price: Scalars['Int']['input'];
};

export type CreateMessageInput = {
  /** ID диалога */
  dialogId: Scalars['ID']['input'];
  /** ID отправителя */
  senderId: Scalars['ID']['input'];
  /** Текст сообщения */
  text: Scalars['String']['input'];
};

export type CreateReviewInput = {
  /** Текст отзыва */
  comment?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  /** Оценка от 1 до 5 */
  rating: Scalars['Int']['input'];
  /** ID пользователя, который получил отзыв */
  recipientId: Scalars['String']['input'];
  /** ID пользователя, который оставил отзыв */
  senderId: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** Email пользователя */
  email: Scalars['String']['input'];
  /** Имя пользователя */
  name: Scalars['String']['input'];
  /** Password пользователя */
  password: Scalars['String']['input'];
  /** Токен обновления */
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};

export type Dialog = {
  __typename?: 'Dialog';
  /** Дата создания диалога */
  createdAt: Scalars['Timestamp']['output'];
  /** Уникальный ID диалога */
  id: Scalars['ID']['output'];
  /** Сообщения в диалоге */
  messages?: Maybe<Array<Message>>;
  /** Пользователь, которому отправлен диалог */
  userReceivedDialog: User;
  /** Пользователь, который создал диалог */
  userSenderDialog: User;
};

export type Listing = {
  __typename?: 'Listing';
  /** Активно ли объявление */
  active: Scalars['Boolean']['output'];
  /** Категория объявления */
  category: Category;
  /** Город */
  city: Scalars['String']['output'];
  /** Дата создания объявления */
  createdAt: Scalars['Timestamp']['output'];
  /** Описание объявления */
  description: Scalars['String']['output'];
  getUserListings: ListingPaginationResult;
  /** Название объявления */
  id: Scalars['ID']['output'];
  /** Изображения объявления */
  images: Array<Scalars['String']['output']>;
  /** Название объявления */
  name: Scalars['String']['output'];
  /** Цена объявления */
  price: Scalars['Int']['output'];
  /** Отзывы к объявлению */
  reviews?: Maybe<Array<Review>>;
  /** Дата последнего обновления объявления */
  updatedAt: Scalars['Timestamp']['output'];
  user: User;
  /** ID автора */
  userId: Scalars['String']['output'];
};


export type ListingGetUserListingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ListingPaginationResult = {
  __typename?: 'ListingPaginationResult';
  hasMore: Scalars['Boolean']['output'];
  listings: Array<Listing>;
};

export type Logout = {
  __typename?: 'Logout';
  /** Сообщение о выходе */
  message: Scalars['String']['output'];
};

export type Message = {
  __typename?: 'Message';
  /** Дата создания сообщения */
  createdAt: Scalars['Timestamp']['output'];
  /** Диалог, к которому принадлежит сообщение */
  dialog: Dialog;
  /** Уникальный ID сообщения */
  id: Scalars['ID']['output'];
  /** Пользователь, который отправил сообщение */
  sender: User;
  /** Текст сообщения */
  text: Scalars['String']['output'];
  /** Дата обновления сообщения */
  updatedAt: Scalars['Timestamp']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addReview: Review;
  createCategory: Category;
  createListing: Listing;
  createMessage: Message;
  createReview: Review;
  createUser: User;
  logout: Logout;
  refreshTokens: Auth;
  removeListing: Scalars['Boolean']['output'];
  removeMessage: Message;
  removeReview: Review;
  signIn: Auth;
  signUp: Auth;
  updateListing: Listing;
  updateListingActiveStatus: Listing;
  updateMessage: Message;
  updateReview: Review;
};


export type MutationAddReviewArgs = {
  createReviewInput: CreateReviewInput;
  userId: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateListingArgs = {
  createListingInput: CreateListingInput;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveListingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: RegisterInput;
};


export type MutationSignUpArgs = {
  signUpInput: RegisterInput;
};


export type MutationUpdateListingArgs = {
  updateListingInput: UpdateListingInput;
};


export type MutationUpdateListingActiveStatusArgs = {
  updateListingActiveInput: UpdateListingInput;
};


export type MutationUpdateMessageArgs = {
  updateMessageInput: UpdateMessageInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  findAllListings: ListingPaginationResult;
  findAllUsers: Array<User>;
  findOneListing: Listing;
  findOneUser: User;
  message?: Maybe<Message>;
  messagesByDialog: Array<Message>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindAllListingsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFindOneListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindOneUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryMessagesByDialogArgs = {
  dialogId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewArgs = {
  id: Scalars['String']['input'];
};

export type RegisterInput = {
  /** Email пользователя */
  email: Scalars['String']['input'];
  /** Имя пользователя */
  name: Scalars['String']['input'];
  /** Password пользователя */
  password: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  /** Текст отзыва */
  comment?: Maybe<Scalars['String']['output']>;
  /** Дата создания отзыва */
  createdAt: Scalars['Timestamp']['output'];
  /** ID отзыва */
  id: Scalars['ID']['output'];
  /** Объявление, к которому относится отзыв */
  listing: Listing;
  /** ID объявления */
  listingId?: Maybe<Scalars['String']['output']>;
  /** Оценка от 1 до 5 */
  rating: Scalars['Float']['output'];
  /** Пользователь, который получил отзыв */
  recipient: User;
  /** Пользователь, который оставил отзыв */
  sender: User;
};

export type UpdateListingInput = {
  /** Активно ли объявление */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Описание объявления */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Изображения объявления */
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Название объявления */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Цена объявления */
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMessageInput = {
  /** ID диалога */
  dialogId?: InputMaybe<Scalars['ID']['input']>;
  /** ID сообщения */
  id: Scalars['ID']['input'];
  /** ID отправителя */
  senderId?: InputMaybe<Scalars['ID']['input']>;
  /** Текст сообщения */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  /** Текст отзыва */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** ID отзыва */
  id: Scalars['String']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  /** Оценка от 1 до 5 */
  rating?: InputMaybe<Scalars['Int']['input']>;
  /** ID пользователя, который получил отзыв */
  recipientId?: InputMaybe<Scalars['String']['input']>;
  /** ID пользователя, который оставил отзыв */
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** Дата создания пользователя */
  createdAt: Scalars['Timestamp']['output'];
  /** Email пользователя */
  email: Scalars['String']['output'];
  /** ID пользователя */
  id: Scalars['ID']['output'];
  /** Объявления пользователя */
  listings?: Maybe<Array<Listing>>;
  /** Сообщения, отправленные пользователем */
  messages?: Maybe<Array<Message>>;
  /** Имя пользователя */
  name: Scalars['String']['output'];
  /** Password пользователя */
  password: Scalars['String']['output'];
  /** Фото пользователя */
  profileImage?: Maybe<Scalars['String']['output']>;
  /** Оценка от 1 до 5 */
  rating?: Maybe<Scalars['Float']['output']>;
  /** Диалоги, полученные пользователем */
  receivedDialogs?: Maybe<Array<Dialog>>;
  /** Отзывы, полученные пользователем */
  receivedReviews?: Maybe<Array<Review>>;
  /** Refresh token */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** Диалоги, начатые пользователем */
  sentDialogs?: Maybe<Array<Dialog>>;
  /** Отзывы, оставленные пользователем */
  sentReviews?: Maybe<Array<Review>>;
  /** Дата последнего обновления пользователя */
  updatedAt: Scalars['Timestamp']['output'];
};

export type FindAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, parentId?: string | null }> };

export type FindAllListingsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FindAllListingsQuery = { __typename?: 'Query', findAllListings: { __typename?: 'ListingPaginationResult', hasMore: boolean, listings: Array<{ __typename?: 'Listing', id: string, name: string, price: number, images: Array<string>, createdAt: any, city: string }> } };

export type GetOneListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetOneListingQuery = { __typename?: 'Query', findOneListing: { __typename?: 'Listing', id: string, name: string, description: string, price: number, city: string, images: Array<string>, createdAt: any, user: { __typename?: 'User', id: string, name: string, email: string, rating?: number | null, profileImage?: string | null, createdAt: any, receivedReviews?: Array<{ __typename?: 'Review', id: string }> | null, listings?: Array<{ __typename?: 'Listing', active: boolean }> | null } } };


export const FindAllCategoriesDocument = gql`
    query FindAllCategories {
  categories {
    id
    name
    parentId
  }
}
    `;

/**
 * __useFindAllCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
      }
export function useFindAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export function useFindAllCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export type FindAllCategoriesQueryHookResult = ReturnType<typeof useFindAllCategoriesQuery>;
export type FindAllCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesLazyQuery>;
export type FindAllCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindAllCategoriesSuspenseQuery>;
export type FindAllCategoriesQueryResult = Apollo.QueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindAllListingsDocument = gql`
    query FindAllListings($limit: Int, $offset: Int, $active: Boolean) {
  findAllListings(limit: $limit, offset: $offset, active: $active) {
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

/**
 * __useFindAllListingsQuery__
 *
 * To run a query within a React component, call `useFindAllListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllListingsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useFindAllListingsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllListingsQuery, FindAllListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllListingsQuery, FindAllListingsQueryVariables>(FindAllListingsDocument, options);
      }
export function useFindAllListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllListingsQuery, FindAllListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllListingsQuery, FindAllListingsQueryVariables>(FindAllListingsDocument, options);
        }
export function useFindAllListingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllListingsQuery, FindAllListingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllListingsQuery, FindAllListingsQueryVariables>(FindAllListingsDocument, options);
        }
export type FindAllListingsQueryHookResult = ReturnType<typeof useFindAllListingsQuery>;
export type FindAllListingsLazyQueryHookResult = ReturnType<typeof useFindAllListingsLazyQuery>;
export type FindAllListingsSuspenseQueryHookResult = ReturnType<typeof useFindAllListingsSuspenseQuery>;
export type FindAllListingsQueryResult = Apollo.QueryResult<FindAllListingsQuery, FindAllListingsQueryVariables>;
export const GetOneListingDocument = gql`
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

/**
 * __useGetOneListingQuery__
 *
 * To run a query within a React component, call `useGetOneListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneListingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneListingQuery(baseOptions: Apollo.QueryHookOptions<GetOneListingQuery, GetOneListingQueryVariables> & ({ variables: GetOneListingQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneListingQuery, GetOneListingQueryVariables>(GetOneListingDocument, options);
      }
export function useGetOneListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneListingQuery, GetOneListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneListingQuery, GetOneListingQueryVariables>(GetOneListingDocument, options);
        }
export function useGetOneListingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOneListingQuery, GetOneListingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOneListingQuery, GetOneListingQueryVariables>(GetOneListingDocument, options);
        }
export type GetOneListingQueryHookResult = ReturnType<typeof useGetOneListingQuery>;
export type GetOneListingLazyQueryHookResult = ReturnType<typeof useGetOneListingLazyQuery>;
export type GetOneListingSuspenseQueryHookResult = ReturnType<typeof useGetOneListingSuspenseQuery>;
export type GetOneListingQueryResult = Apollo.QueryResult<GetOneListingQuery, GetOneListingQueryVariables>;