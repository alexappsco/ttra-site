import { Offer } from 'src/types/offers';
import { paths } from 'src/routes/paths';
import { redirect } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { DEFAULT_LIMIT } from 'src/components/constant';
import OffersView from 'src/sections/offers/views/view';

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

  const offers = await getData<{ totalCount: number; items: Offer[] }>(
    `${endpoints.offer.list}?${urlSearchParams.toString()}`,
    { tags: [FetchTags.OffersList] }
  );

if ('error' in offers) {
   //  Check if the API returned unauthorized
      if (offers.status === 401 ) {
        redirect(paths.auth.login); // Redirect to login if token expired / unauthorized
      }

      // For other errors, throw so Next.js can show the error page
      throw new Error(offers.error);
}
  return <OffersView
  totalCount={offers?.data?.totalCount}
  offers={offers?.data?.items} />;
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Offers' });

  return {
    title: t('title'),
  };
}
