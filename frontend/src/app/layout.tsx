'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff3333' },
    secondary: { main: '#1a1a1a' },
    background: { default: '#0a0a0a', paper: '#1a1a1a' },
    text: { primary: '#ffffff', secondary: '#b0b0b0' },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    h1: { fontFamily: 'Bebas Neue, Impact, sans-serif', letterSpacing: '0.05em' },
    h2: { fontFamily: 'Bebas Neue, Impact, sans-serif', letterSpacing: '0.05em' },
    h3: { fontFamily: 'Bebas Neue, Impact, sans-serif' },
    h4: { fontFamily: 'Bebas Neue, Impact, sans-serif' },
    h5: { fontFamily: 'Bebas Neue, Impact, sans-serif' },
    h6: { fontFamily: 'Bebas Neue, Impact, sans-serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 4, textTransform: 'uppercase', fontWeight: 700 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: '#1a1a1a', border: '1px solid #333' },
      },
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
