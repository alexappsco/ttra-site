import { getTranslations } from 'next-intl/server';
import PrivacyPolicyView from 'src/sections/privacy-policy/view';




export default async function Page() {


  return (
    <PrivacyPolicyView

    />
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.landing' });

  return {
    title: t('title'),
  };
}
