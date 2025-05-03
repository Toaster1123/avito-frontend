import { CategoriesWrapper } from '@/components';
import { getClient } from '@/graphql/appolo-client';
import { GET_TITLE_CATEGORY } from '@/graphql/appolo-consts/category-query';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const client = getClient();
  const { data } = await client.query({
    query: GET_TITLE_CATEGORY,
    variables: { id },
  });

  return {
    title: 'Купить ' + data?.findOneCategory?.name.toLowerCase() || 'Авито',
  };
}

export default async function ListingPage({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);

  return (
    <div>
      <CategoriesWrapper id={id} />
    </div>
  );
}
