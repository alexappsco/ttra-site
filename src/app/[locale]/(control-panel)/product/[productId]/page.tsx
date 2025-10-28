import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { getTranslations } from 'next-intl/server';
import { FetchTags } from 'src/actions/config-actions';
import ProductDetailsView from 'src/sections/product-details/view';

interface Props {
  params: Promise<{ productId: string }>;

}

export default async function Page({ params }: Props) {
  const { productId } = await params;
  const product = await getData<any>(
      `${endpoints.product.single(productId)}`,
      { tags: [FetchTags.MostPurchased] }
    );
  if ('error' in product) {
    throw new Error(product.error);
  }
  return (
    <ProductDetailsView
      product={product?.data}
    />
  );
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.ProductDetails' });

  return {
    title: t('title'),
  };
}