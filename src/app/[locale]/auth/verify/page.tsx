import { getTranslations } from "next-intl/server";
import VerfiyView from "src/sections/auth/verfiy-view";




export default function VerfiyPage() {
  return <VerfiyView />;
}
export async function generateMetadata({ params }: { params: Promise<any> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Jwt' });

  return {
    title: t('verify'),
  };
}