import { Product } from 'src/types/product';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { getTranslations } from 'next-intl/server';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import CategoryDetails from 'src/sections/categories/category-details/views/view';

interface Props {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<
    Record<
      'page' | 'limit' | 'status' | 'search' | 'StartDate' | 'EndDate',
      string | undefined
    >
  >;
}

export default async function Page({ params, searchParams }: Props) {
  const { categoryId } = await params;
  const { page, limit, status, search, StartDate, EndDate } = await searchParams;

  // Always include CategoryId from params
  const urlSearchParams = new URLSearchParams({
    page: page || '1',
    limit: limit || `${DEFAULT_LIMIT}`,
    CategoryId: categoryId,
    ...(status && { CategoryId: status }),
    ...(search && { Name: search }),
    ...(StartDate && { StartDate }),
    ...(EndDate && { EndDate }),
  });


    // Fetch subcategories
  const category = await getData<{ totalCount: number; items: any }>(
    `${endpoints.categories.category}?CategoryId=${categoryId}&${urlSearchParams.toString()}`,
    { tags: [FetchTags.MostPurchased] }
  );
  if ('error' in category) {
    throw new Error(category.error);
  }
  // Fetch subcategories
  const subCategory = await getData<{ totalCount: number; items: any }>(
    `${endpoints.subCategories.list}?categoryId=${categoryId}&${urlSearchParams.toString()}`,
    { tags: [FetchTags.MostPurchased] }
  );
  if ('error' in subCategory) {
    throw new Error(subCategory.error);
  }

  // Fetch products
  const product_of_category = await getData<{
    totalCount: number;
    items: Product[];
  }>(
    `${endpoints.product.list}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.ProductsList] }
  );
  if ('error' in product_of_category) {
    throw new Error(product_of_category.error);
  }

  const { totalCount, items } = product_of_category.data;
  return (
    <CategoryDetails
      items={items}
      totalCount={totalCount}
      subCategory={subCategory.data.items}
    />)}
    export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Categories' });

  return {
    title: t('title'),
  };
}