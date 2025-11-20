import { getTranslations } from 'next-intl/server';
import { LoginView } from 'src/sections/auth';

// ----------------------------------------------------------------------



export default function LoginPage() {
  return <LoginView />;
}
export async function generateMetadata({ params }: { params: Promise<any> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Jwt' });

  return {
    title: t('login'),
  };
}