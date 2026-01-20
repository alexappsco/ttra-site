

import { BLOGS } from 'src/_mock/data';
import BlogSection from 'src/sections/home/views/blog-section';

export default function BlogPage() {
  return <BlogSection blogs={BLOGS} showAll={true} />;
}
