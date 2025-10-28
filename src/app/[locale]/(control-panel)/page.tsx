import { Banner } from 'src/types/banner';
import { Product } from 'src/types/product';
import { PastOrders } from 'src/types/order';
import { endpoints } from 'src/utils/endpoints';
import { Category } from 'src/types/categories';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import HomeView from 'src/sections/home/views/list-view';

// ----------------------------------------------------------------------

interface Props {
  searchParams: Promise<
    Record<'page' | 'limit' | 'status' | 'search' | 'StartDate' | 'EndDate', string | undefined>
  >;
}

export default async function HomePage({ searchParams }: Props) {
  let { page, limit, status, search, StartDate, EndDate } = await searchParams;

  // const urlSearchParams = new URLSearchParams({
  //   page: page || '1',
  //   limit: limit || `${DEFAULT_LIMIT}`,
  //   ...(status && { IsActive: status }),
  //   ...(search && { Name: search }),
  //   StartDate: StartDate || '',
  //   EndDate: EndDate || '',
  // });

  // // Banners
  // const banners = await getData<{ totalCount: number; items: Banner[] }>(
  //   `${endpoints.banners.list}?${urlSearchParams.toString()}`,
  //   { tags: [FetchTags.BannersList] }
  // );
  // if ('error' in banners) throw new Error(banners.error);

  // // Categories
  // const category = await getData<{ totalCount: number; items: Category[] }>(
  //   `${endpoints.categories.category}`,
  //   { tags: [FetchTags.MostPurchased] }
  // );
  // if ('error' in category) throw new Error(category.error);

  // // Offers
  // const offers = await getData<{ totalCount: number; items: any }>(
  //   `${endpoints.offer.list}?${urlSearchParams.toString()}`,
  //   { tags: [FetchTags.OffersList] }
  // );
  // if ('error' in offers) throw new Error(offers.error);

  // // Best Sellers
  // const bestSellers = await getData<{ totalCount: number; items: Product[] }>(
  //   `${endpoints.sellers.bestSellers}?IsPopular=true&IsTopOrder=false`,
  //   { tags: [FetchTags.OffersList] }
  // );
  // if ('error' in bestSellers) throw new Error(bestSellers.error);

  // // Last Orders
  // let lastOrders: any = null;
  // try {
  //   const res = await getData<{
  //     items: any;
  //     code: number;
  //     message: string;
  //     data: {
  //       totalCount: number;
  //       items: PastOrders[];
  //     };
  //   }>(endpoints.orderAgain.get, { tags: [FetchTags.OffersList] });

  //   if (!('error' in res)) {
  //     lastOrders = res.data.data;
  //   }
  // } catch {
  //   // تجاهل أي خطأ في API الطلبات السابقة
  //   lastOrders = { totalCount: 0, items: [] };
  // }

  return (
    <HomeView
      // category={category.data.items}
      // banners={banners.data.items}
      // bestSellers={bestSellers.data.items}
      // offers={offers.data.items}
      // pastOrders={lastOrders?.items || []}
      // lastOrderTotal={lastOrders?.totalCount || 0}
    />
  );
}

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: Promise<any> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}
