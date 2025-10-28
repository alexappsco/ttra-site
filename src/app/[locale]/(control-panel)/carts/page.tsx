import { cartItem } from 'src/types/carts';
import { endpoints } from 'src/utils/endpoints';
import { LocationItem } from 'src/types/location';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import CartsView from 'src/sections/carts/main-view/view';

interface Props {
  searchParams: Promise<Record<'page' | 'limit' | 'status' | 'search', string | undefined>>;
}

export default async function Page({ searchParams }: Props) {
  let { page, limit, status, search } = await searchParams;

  const urlSearchParams = new URLSearchParams({
    page: page || '1',
    limit: limit || `${DEFAULT_LIMIT}`,
    ...(status && { IsActive: status }),
    ...(search && { Name: search }),

  });

  const cartsList = await getData<{
      totalCount: number;
      items: cartItem[],
      shippingCost: number,
      total: number,
      finalTotal: number,
      vat: number
    }>(
    `${endpoints.Carts.list}?Limit=50&${urlSearchParams.toString()}`,
    { tags: [FetchTags.cartsList] }
  );

  if ('error' in cartsList) {
    throw new Error(cartsList.error);
  }
  const locationList = await getData<{items: LocationItem[] }>(
      `${endpoints.Location.list}?${urlSearchParams.toString()}`,
      { tags: [FetchTags.FavoritesList] }
    );

  if ('error' in locationList) {
    throw new Error(locationList.error);
  }

  return <CartsView
    carts={cartsList?.data?.items}
    shippingCost={cartsList?.data?.shippingCost}
    TotalVat={cartsList?.data?.vat}
    total={cartsList?.data?.total}
    finalTotal={cartsList?.data?.finalTotal}
    locationItems={locationList?.data?.items} />;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Carts' });

  return {
    title: t('title'),
  };
}
