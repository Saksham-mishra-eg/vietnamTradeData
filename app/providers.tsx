"use client";

import React from 'react';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type Props = { children: React.ReactNode };

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2f98ff'
    },
    secondary: {
      main: '#F8F9FA9'
    }
  },
  typography: {
    fontFamily: ['Inter', 'Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
});

theme = responsiveFontSizes(theme);

export default function Providers({children}: Props){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
