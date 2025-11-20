import { getTranslations } from 'next-intl/server';
import HomeView from 'src/sections/home/views/list-view';

// ----------------------------------------------------------------------
export default async function HomePage() {
  return (
    <HomeView
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
