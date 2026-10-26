import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {          // ← plural
    light: {
      palette: {
        primary: {
          main: '#8fc1f4',
          contrastText: '#fff',
        },
        secondary: {
          main: '#f48fb1',
          contrastText: '#fff',
        },
        background: {
          default: '#f5f5f5',
          paper: '#fff',
        },
        text: {
          primary: '#303841',
          secondary: '#3a4750',
        },
        divider: '#DDD8CF',   // ← divider es un string, no un objeto
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#011529',
          contrastText: '#17232D',   // ← corregido el typo
        },
        secondary: {
          main: '#810404',
          contrastText: '#30231D',
        },
        background: {
          default: '#171c22',
          paper: '#222A33',
        },
        text: {
          primary: '#F0F2F4',
          secondary: '#B5BEC7',
        },
        divider: '#DDD8CF',
      },
    },
  },
});

export default theme;