import { useEffect } from 'react';
import { usePathname } from 'src/routes/hooks';


// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {

  const pathname = usePathname();



  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  return (
    // <Box
    //   sx={{
    //     flexShrink: { lg: 0 },
    //     width: { lg: NAV.W_VERTICAL },
    //     backgroundColor: 'primary.main',
    //   }}
    // >
    //   {lgUp ? (
    //     <Stack
    //       sx={{
    //         height: 1,
    //         position: 'fixed',
    //         width: NAV.W_VERTICAL,
    //         borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
    //       }}
    //     >
    //       {renderContent}
    //     </Stack>
    //   ) : (
    //     <Drawer
    //       open={openNav}
    //       onClose={onCloseNav}
    //       PaperProps={{
    //         sx: {
    //           width: NAV.W_VERTICAL,
    //           backgroundColor: (theme) => `${theme.palette.primary.main} !important`,
    //         },
    //       }}
    //     >
    <>
          {/* {renderContent} */}
    </>
    //     </Drawer>
    //   )}
    // </Box>

  );
}
