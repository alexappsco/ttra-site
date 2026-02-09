

// import { BLOGS } from 'src/_mock/data';
// import ShopDetails from 'src/sections/home/views/shop-details';

// export default async function page(props: any) {
//   const params = await props.params;

//   const blog = BLOGS.find((b) => b.id === params.id);

//   if (!blog) return null;

//   return <ShopDetails blog={blog} />;
// }
'use client';
import { useParams } from 'next/navigation';
import ShopDetails from 'src/sections/home/views/shop-details';
import { Shop } from 'src/_mock/shop';

export default function ShopPage() {
  const params = useParams();
  const shopId = params?.id;

  const shop = Shop.find((s) => s.id === shopId);

  if (!shop) return <p>السوق غير موجود</p>;

  return <ShopDetails shop={shop} />;
}
