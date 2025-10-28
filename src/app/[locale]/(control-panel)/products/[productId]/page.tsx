import { Unit } from 'src/types/units';
import { Category } from 'src/types/categories';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { ProductDetails } from 'src/types/products';
import { FetchTags } from 'src/actions/config-actions';
import NewEditProductView from 'src/sections/products/view/new-edit-view';

interface Props {
  params: Promise<{ productId: string }>;
  searchParams: Promise<Record<'mainCategoryId', string | undefined>>;
}

export default async function Page({ params, searchParams }: Props) {
  const { productId } = await params;
  const { mainCategoryId } = await searchParams;

  const [product, categories, subCategories, units] = await Promise.all([
    getData<ProductDetails>(endpoints.product.single(productId)),
    getData<{ items: Category[] }>(endpoints.categories.list, {
      tags: [FetchTags.CategoriesList],
    }),
    mainCategoryId
      ? getData<{ totalCount: number; items: Category[] }>(
          `${endpoints.subCategories.list}${mainCategoryId ? '?CategoryId=' + mainCategoryId : ''}`,
          { tags: [FetchTags.CategoriesList] }
        )
      : { data: { items: [] } },
    getData<{ items: Unit[] }>(endpoints.unitMeasure.list, {
      tags: [FetchTags.UnitsList],
    }),
  ]);

  if ('error' in product) {
    throw new Error(product.error);
  }

  if ('error' in categories) {
    throw new Error(categories.error);
  }

  if ('error' in subCategories) {
    throw new Error(subCategories.error);
  }

  if ('error' in units) {
    throw new Error(units.error);
  }

  return (
    <NewEditProductView
      product={product.data}
      categories={categories.data.items}
      subCategories={subCategories.data.items}
      units={units.data.items}
    />
  );
}
