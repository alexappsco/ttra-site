import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { getTranslations } from 'next-intl/server';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import OrderDetailsView from 'src/sections/my-order/order-details/view';
import ReturnOrderDetailsView from 'src/sections/return-order/return-order-details/view';

interface Props {
  params: Promise<{ orderId: string }>;
  searchParams: Promise<
    Record<
      'page' | 'limit' | 'status' | 'search' | 'StartDate' | 'EndDate',
      string | undefined
    >
  >;
}

export default async function Page({ params, searchParams }: Props) {
  const { orderId } = await params;
  const { page, limit, status, search, StartDate, EndDate } = await searchParams;

  // Always include CategoryId from params
  const urlSearchParams = new URLSearchParams({
    page: page || '1',
    limit: limit || `${DEFAULT_LIMIT}`,
    CategoryId: orderId,
    ...(status && { CategoryId: status }),
    ...(search && { Name: search }),
    ...(StartDate && { StartDate }),
    ...(EndDate && { EndDate }),
  });


    // Fetch subcategories
  // Fetch order details
   // Fetch order details
  const returnOrderDetails = await getData<{ totalCount: number; data: any }>(
    `${endpoints.returnOders.single(orderId)}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.MostPurchased] }
  );

  if ('error' in returnOrderDetails) {
    throw new Error(returnOrderDetails.error);
  }
  console.log("return Order Details",returnOrderDetails)
  return (
    <ReturnOrderDetailsView
      returnorderDetails={returnOrderDetails?.data?.data}
    />
  );
}

    export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Categories' });

  return {
    title: t('title'),
  };
}