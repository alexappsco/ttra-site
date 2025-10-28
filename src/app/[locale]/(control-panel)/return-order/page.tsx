import { paths } from 'src/routes/paths';
import { redirect } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import ReturnedOrderView from 'src/sections/return-order/view';

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
    `${endpoints.returnOders.view}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.cartsList] }
  );

if ('error' in returnsList) {
 //  Check if the API returned unauthorized
    if (returnsList.status === 401 ) {
      redirect(paths.auth.login); // Redirect to login if token expired / unauthorized
    }

    // For other errors, throw so Next.js can show the error page
    throw new Error(returnsList.error);
  }
  return <ReturnedOrderView
  returnsList={returnsList?.data?.data?.items}
  totalCount={returnsList?.data?.totalCount}
/>
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.ReturnedOrder' });

  return {
    title: t('title'),
  };
}
