

import { BLOGS } from 'src/_mock/data';
import BlogDetails from 'src/sections/home/views/blog-details';

// export default function BlogDetailPage({ params }: any) {
//   const blog = BLOGS.find((b) => b.id === params.id);

//   if (!blog) return null;

//   return <BlogDetails blog={blog} />;
// }

export default async function BlogDetailPage(props: any) {
  const params = await props.params;

  const blog = BLOGS.find((b) => b.id === params.id);

  if (!blog) return null;

  return <BlogDetails blog={blog} />;
}
