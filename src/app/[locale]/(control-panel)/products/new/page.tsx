import { Unit } from 'src/types/units';
import { Category } from 'src/types/categories';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import NewEditProductView from 'src/sections/products/view/new-edit-view';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<'mainCategoryId', string | undefined>>;
}) {
  const { mainCategoryId } = await searchParams;

  const [categories, subCategories, units] = await Promise.all([
    getData<{ items: Category[] }>(`${endpoints.categories.list}?Limit=100`, {
      tags: [FetchTags.CategoriesList],
    }),
    mainCategoryId
      ? getData<{ totalCount: number; items: Category[] }>(
          `${endpoints.subCategories.list}?CategoryId=${mainCategoryId}`,
          { tags: [FetchTags.CategoriesList] }
        )
      : { data: { items: [] } },
    getData<{ items: Unit[] }>(`${endpoints.unitMeasure.list}?Limit=100`, {
      tags: [FetchTags.UnitsList],
    }),
  ]);

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
      categories={categories.data.items}
      subCategories={subCategories.data.items}
      units={units.data.items}
    />
  );
}
