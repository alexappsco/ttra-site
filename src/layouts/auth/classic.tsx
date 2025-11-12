import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useResponsive } from 'src/hooks/use-responsive';
import { useCurrentLocale } from 'src/utils/locale-utils';
import Navbar from '../dashboard/navbar';
// ----------------------------------------------------------------------

const BG_CLIP_START = '10vw';

type Props = {
  title?: string;
  image?: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
  const mdUp = useResponsive('up', 'md');
  const { dir } = useCurrentLocale();

  const renderContent = (
    <Stack
      sx={{
        width:'100%',
        height:'100%',

      }}
      justifyContent="center"
      alignItems="center"
          >
      <Navbar isAuth={true} />
      {children}
    </Stack>
  );



  return (
    // <Stack
    //   component="main"
    //   direction="row-reverse"
    //   sx={{
    //     minHeight: '100vh',
    //     bgcolor: 'background.neutral',
    //   }}
    // >
    //   {mdUp && renderSection}
<>
{renderContent}
</>
    // </Stack>
  );
}
