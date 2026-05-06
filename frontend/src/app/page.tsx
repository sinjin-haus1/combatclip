'use client';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/lib/apollo-client';
import { Box, Typography, Button, Container } from '@mui/material';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ color: 'primary.main', mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            COMBAT CLIP 🐊
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
            AI Faceless Video Generator for Combat Sports Coaches
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, fontSize: '1.2rem', color: 'text.secondary' }}>
            Transform your training footage into viral TikToks, Reels & Shorts.
            <br />No face required. Pure technique.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" href="/dashboard">
              Get Started
            </Button>
            <Button variant="outlined" size="large" href="/upload">
              Create Video
            </Button>
          </Box>
          <Box sx={{ mt: 8, display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🥊 Boxing', '🥊 MMA', '🥋 BJJ', '🥊 Kickboxing', '🤼 Wrestling', '🥊 Muay Thai', '🥋 Judo', '🥋 Taekwondo'].map((style) => (
              <Typography key={style} variant="body2" sx={{ color: 'primary.main', opacity: 0.8 }}>
                {style}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
    </ApolloProvider>
  );
}
