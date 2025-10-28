import { paths } from 'src/routes/paths';
import { redirect } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { ProfileData } from 'src/types/profile';
import { getTranslations } from 'next-intl/server';
import { getData } from 'src/utils/crud-fetch-api';
import SettingsEditView from 'src/sections/setting/view';



export default async function Page(){


  const profileData = await getData<{data: ProfileData}>(
    endpoints.auth.viewProf,
  );

if ('error' in profileData) {
    if (profileData.status === 401 ) {
      redirect(paths.auth.login); // Redirect to login if token expired / unauthorized
    }

    // For other errors, throw so Next.js can show the error page
    throw new Error(profileData.error);}
  return <SettingsEditView
    profileData={profileData.data as any} />

}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Settings' });

  return {
    title: t('title'),
  };
}
