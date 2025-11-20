import { LoginView } from 'src/sections/auth';
import { getTranslations } from 'next-intl/server';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return <LoginView isNewphonenumber={true}/>
}
export async function generateMetadata({ params }: { params: Promise<any> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Jwt' });

  return {
    title: t('register'),
  };
}