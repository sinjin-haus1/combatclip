'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import { Box, Container, Typography, Card, CardContent, Button, Chip, LinearProgress, Alert } from '@mui/material';
import { SvgIcon } from '@mui/material';

const SOCIAL_PLATFORMS = [
  {
    id: 'tiktok',
    name: 'TikTok',
    color: '#ff0050',
    icon: '🎵',
    description: 'Post short videos to your TikTok feed',
    connected: false,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    color: '#E4405F',
    icon: '📸',
    description: 'Share Reels to your Instagram',
    connected: false,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    color: '#FF0000',
    icon: '▶️',
    description: 'Upload Shorts to your YouTube channel',
    connected: false,
  },
];

export default function ConnectPage() {
  const [platforms, setPlatforms] = useState(SOCIAL_PLATFORMS);

  const handleConnect = (id: string) => {
    // OAuth flow would go here
    alert(`Connect flow for ${id} would open OAuth popup`);
  };

  const handleDisconnect = (id: string) => {
    setPlatforms((prev) =>
      prev.map((p) => (p.id === id ? { ...p, connected: false } : p)),
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
          CONNECT ACCOUNTS
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Connect your social accounts to automatically post generated videos.
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          OAuth connections are stored securely. CombatClip never accesses your accounts for anything other than posting videos you create.
        </Alert>

        {platforms.map((platform) => (
          <Card key={platform.id} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', mb: 3 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ fontSize: '2.5rem' }}>{platform.icon}</Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{platform.name}</Typography>
                <Typography variant="body2" color="text.secondary">{platform.description}</Typography>
              </Box>
              {platform.connected ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Chip label="Connected" sx={{ bgcolor: 'success.main', color: '#000' }} />
                  <Button variant="outlined" color="error" size="small" onClick={() => handleDisconnect(platform.id)}>
                    Disconnect
                  </Button>
                </Box>
              ) : (
                <Button variant="contained" onClick={() => handleConnect(platform.id)} sx={{ bgcolor: platform.color, '&:hover': { bgcolor: platform.color } }}>
                  Connect
                </Button>
              )}
            </CardContent>
          </Card>
        ))}

        <Typography variant="caption" color="text.secondary" sx={{ mt: 4, display: 'block', textAlign: 'center' }}>
          More platforms coming soon: Snapchat, Facebook, Twitter/X
        </Typography>
      </Container>
    </Box>
  );
}
