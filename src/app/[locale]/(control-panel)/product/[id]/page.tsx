

import { BLOGS } from 'src/_mock/data';
import ProductDetails from 'src/sections/home/views/product-details';

export default async function page(props: any) {
  const params = await props.params;

  const blog = BLOGS.find((b) => b.id === params.id);

  if (!blog) return null;

  return <ProductDetails blog={blog} />;
}
