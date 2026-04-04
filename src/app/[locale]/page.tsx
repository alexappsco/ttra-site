// import HomeView from 'src/sections/home/views/list-view';

// export default function Page(props: any) {
//   const searchParams = props.searchParams;

//   return <HomeView scrollTo={searchParams?.scrollTo ?? null} />;
// }




import Header from 'src/layouts/dashboard/header';
import ComingSoonSection from 'src/sections/home/ComingSoonSection';

export default function Page() {
  return <>
    <ComingSoonSection />
  </>;
}