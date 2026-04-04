import HomeView from 'src/sections/home/views/list-view';

export default function Page(props: any) {
  const searchParams = props.searchParams;

  return <HomeView scrollTo={searchParams?.scrollTo ?? null} />;
}
