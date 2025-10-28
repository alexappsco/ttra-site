import { paths } from 'src/routes/paths';
import { redirect } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import LocationView from 'src/sections/location/view';
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
    ...(status && { IsActive: status }),
    ...(search && { Name: search }),

  });

  const locationList = await getData<{ totalCount: number; items: any }>(
    `${endpoints.Location.list}?Limit=10&${urlSearchParams.toString()}`,
    { tags: [FetchTags.LocationsList] }
  );

if ('error' in locationList) {
 //  Check if the API returned unauthorized
    if (locationList.status === 401 ) {
      redirect(paths.auth.login); // Redirect to login if token expired / unauthorized
    }

    // For other errors, throw so Next.js can show the error page
    throw new Error(locationList.error);
}

  return <LocationView
  items={locationList?.data?.items}/>
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Location' });

  return {
    title: t('title'),
  };
}
