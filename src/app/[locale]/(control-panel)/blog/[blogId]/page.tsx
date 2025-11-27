import axiosInstance from 'src/utils/axios';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';
import BlogDetailsView from 'src/sections/blog/blog-details/view';

interface Props {
  params: Promise<{ blogId: string }>;

}
interface BlogDetails {
  id: string;
  attachmentUrl: string;
  title: string;
  body: string;
  blogCategoryId: string;
  blogCategoryName: string;
  creationTime: string;
}

export default async function Page({ params }: Props) {
  const { blogId } = await params;

const blogResponse = await axiosInstance.get<BlogDetails[]>(
    endpoints.Blog.details(blogId)
  );
  return (
    <BlogDetailsView
      blog_details={blogResponse}
    />
  );
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.Blog' });

  return {
    title: t('title'),
  };
}