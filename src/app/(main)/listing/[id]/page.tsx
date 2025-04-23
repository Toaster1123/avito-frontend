import { ListingFeed, SearchSection } from '@/components';
import { getClient } from '@/graphql/appolo-client';
import { GET_ONE_LISTING, GET_TITLE_LISTING } from '@/graphql/appolo-consts/listings-query';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const client = getClient();
  const { data } = await client.query({
    query: GET_TITLE_LISTING,
    variables: { id },
  });

  return {
    title: data?.findOneListing?.name || 'Объявление',
  };
}

export default async function ListingPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const client = getClient();
  const { data, loading } = await client.query({
    query: GET_ONE_LISTING,
    variables: { id },
  });
  return (
    <div>
      <SearchSection />
      <ListingFeed listing={data.findOneListing} loading={loading} />
    </div>
  );
}
