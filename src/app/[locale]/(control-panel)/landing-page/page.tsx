import { getTranslations } from 'next-intl/server';
import LandingView from 'src/sections/landing-page/view';




export default async function Page() {


  return (
    <LandingView

    />
  );
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Favorite' });

  return {
    title: t('title'),
  };
}
