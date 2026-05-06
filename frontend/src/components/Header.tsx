'use client';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Upload', href: '/upload' },
  { label: 'Videos', href: '/videos' },
  { label: 'Connect', href: '/connect' },
];

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'background.default', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="primary">
            <FitnessCenterIcon />
          </IconButton>
          <Typography variant="h6" color="primary.main" sx={{ fontFamily: 'Bebas Neue, Impact, sans-serif', letterSpacing: '0.1em' }}>
            COMBAT CLIP
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.label} href={item.href} sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
