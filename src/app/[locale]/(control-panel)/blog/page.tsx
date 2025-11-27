'use server';

import axiosInstance from 'src/utils/axios';
import BlogView from 'src/sections/blog/view';
import { endpoints } from 'src/utils/endpoints';
import { getTranslations } from 'next-intl/server';

interface BlogItem {
  id: string;
  attachmentUrl: string;
  title: string;
  body: string;
  blogCategoryId: string;
  blogCategoryName: string;
  creationTime: string;
}

interface BlogCategory {
  id: string;
  nameAr: string;
  nameEn: string;
}

interface BlogResponse {
  items: BlogItem[];
  totalCount: number;
}

interface BlogCategoryResponse {
  items: BlogCategory[];
  totalCount: number;
}

interface PageProps {
  searchParams: Promise<{
    BlogCategoryId?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  // Build query parameters for the API
  const queryParams = new URLSearchParams();

  if (params.BlogCategoryId && params.BlogCategoryId !== 'all') {
    queryParams.append('BlogCategoryId', params.BlogCategoryId);
  }

  // Default MaxResultCount to 200
  queryParams.append('MaxResultCount', '200');

  // Fetch blogs with filters
  const blogResponse = await axiosInstance.get<BlogResponse>(
    `${endpoints.Blog.list}?${queryParams.toString()}`
  );

  const blogCategoryResponse = await axiosInstance.get<BlogCategoryResponse>(
    endpoints.blog_category.list
  );


  return (
    <BlogView
      blog={blogResponse }
      blog_category={blogCategoryResponse}
      initialCategory={params.BlogCategoryId || 'all'}
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