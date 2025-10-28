import { cartItem } from 'src/types/carts';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import PaidView from 'src/sections/paid/main-view/PaidView';

interface Props {
  searchParams: Promise<Record<'page' | 'limit' | 'status'|'search', string | undefined>>;
}

export default async function Page({ searchParams }: Props) {
  let { page, limit, status,search } = await searchParams;

  const urlSearchParams = new URLSearchParams({
    page: page || '1',
    limit: limit || `${DEFAULT_LIMIT}`,
    ...(status && { IsActive: status }),
    ...(search && { Name: search }),

  });

  const cartsList = await getData<
    { totalCount: number,
        items: cartItem[],
        shippingCost: number,
        total: number,
        finalTotal: number,
        vat: number,
        vatPercentage?: number
    }>(
    `${endpoints.Carts.list}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.cartsList] }
  );

if ('error' in cartsList) {
  throw new Error(cartsList.error);
}
  const paymentList = await getData<{ totalCount: number; data: any }>(
    `${endpoints.PaymentMethod.list}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.FavoritesList] }
  );

if ('error' in paymentList) {

  throw new Error(paymentList.error);
}
  const locationList = await getData<{ totalCount: number; items: any }>(
    `${endpoints.Location.list}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.FavoritesList] }
  );

if ('error' in locationList) {
  throw new Error(locationList.error);
}
  const defaultLocation = locationList?.data?.items?.find((loc: any) => loc.isDefault);
  const location_id_Default = defaultLocation?.id || null;

  return <PaidView
    carts={cartsList?.data?.items}
    vatPercentage={cartsList?.data?.vatPercentage}
    shippingCost={cartsList?.data?.shippingCost}
    TotalVat={cartsList?.data?.vat}
    total={cartsList?.data?.total}
    finalTotal={cartsList?.data?.finalTotal}
    payment={paymentList?.data?.data?.items} deliveryFee={25}
    location_id_Default={location_id_Default}/>;
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Pay' });

  return {
    title: t('title'),
  };
}
