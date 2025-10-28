import { endpoints } from 'src/utils/endpoints';
import SearchView from 'src/sections/search/view';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';

interface Props {
  searchParams: Promise<Record<'page' | 'limit' | 'status'|'search', string | undefined>>;
}

export default async function Page({ searchParams }: Props) {
  let { page, limit, status,search } = await searchParams;

  const urlSearchParams = new URLSearchParams({
    page: page || '1',
    limit: limit || `${DEFAULT_LIMIT}`,
    ...(status && { Status: status }),
    ...(search && { Name: search }),

  });

  const returnsList = await getData<{ totalCount: number; data: any}>(
    `${endpoints.product.list}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.cartsList] }
  );

if ('error' in returnsList) {
  throw new Error(returnsList.error);
}
  return <SearchView
/>
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.ReturnedOrder' });

  return {
    title: t('title'),
  };
}
