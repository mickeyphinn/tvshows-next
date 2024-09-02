'use client'
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Theme: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider>
    );
};

export default Theme;