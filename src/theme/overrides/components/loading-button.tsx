import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function loadingButton(_theme: Theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: () => {
              "load"
        },
      },
    },
  };
}
