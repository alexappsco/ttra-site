
import axios from 'axios';
import { getTranslations } from 'next-intl/server';
import JwtRegiterView from 'src/sections/auth/regiter-view';

export default async function LoginPage() {
  let bussiness: any[] = [];

  try {
    const response = await axios.get('https://api.isthwath.com/api/v1/business-types?MaxResultCount=20', {
      headers: { accept: 'text/plain' },
    });

    // Parse if the response is a string
    const data =
      typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
    // Assign the items to bussiness
    bussiness = data.items || [];
  } catch (err) {
    console.error('Network or Axios error:', err);
  }

  // Pass the array safely to the component
  return <JwtRegiterView bussiness={bussiness} />;
}
export async function generateMetadata({ params }: { params: Promise<any> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Jwt' });

  return {
    title: t('register'),
  };
}