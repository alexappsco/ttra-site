import { paths } from 'src/routes/paths';
import { redirect } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import MyOrderView from 'src/sections/my-order/views/view';

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

  const ordersList = await getData<
  {data: {
        items: any;
        code: number;
        message: string;
        data: {
          totalCount: number;
          items: any;
        };
      };
    }>(
    `${endpoints.order.getOrder}?Limit=200&${urlSearchParams.toString()}`,
    { tags: [FetchTags.cartsList] }
  );

if ('error' in ordersList) {
 //  Check if the API returned unauthorized
    if (ordersList.status === 401 ) {
      redirect(paths.auth.login); // Redirect to login if token expired / unauthorized
    }

    // For other errors, throw so Next.js can show the error page
    throw new Error(ordersList.error);}
  return <MyOrderView
    orders={ordersList?.data?.data?.items}/>

}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.MyOrder' });

  return {
    title: t('title'),
  };
}
