
import HomeView from 'src/sections/home/views/list-view';
export default async function HomePage(props: any) {
  const searchParams = await props.searchParams;

  return <HomeView scrollTo={searchParams?.scrollTo ?? null} />;
}

