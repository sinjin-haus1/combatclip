'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { Box, Container, Typography, Grid, Chip, ToggleButton, ToggleButtonGroup } from '@mui/material';

type VideoStatus = 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED';

const MOCK_VIDEOS = [
  { id: '1', title: 'Before & After 12-Week Camp', combatStyle: 'BOXING', status: 'READY' as VideoStatus, createdAt: '2026-05-05T12:00:00Z' },
  { id: '2', title: 'Takedown Technique Breakdown', combatStyle: 'WRESTLING', status: 'PROCESSING' as VideoStatus, createdAt: '2026-05-04T12:00:00Z' },
  { id: '3', title: 'Guard Passing Masterclass', combatStyle: 'BJJ', status: 'READY' as VideoStatus, createdAt: '2026-05-03T12:00:00Z' },
];

export default function VideosPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const handlePlay = (id: string) => console.log('Play', id);
  const handleDownload = (id: string) => console.log('Download', id);
  const handleShare = (id: string) => console.log('Share', id);

  const filtered = filter
    ? MOCK_VIDEOS.filter((v) => v.combatStyle === filter)
    : MOCK_VIDEOS;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
          MY VIDEOS
        </Typography>

        <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">Filter:</Typography>
          <ToggleButtonGroup value={filter} exclusive onChange={(_, v) => v !== null && setFilter(v)} size="small">
            <ToggleButton value={null}>All</ToggleButton>
            <ToggleButton value="BOXING">Boxing</ToggleButton>
            <ToggleButton value="MMA">MMA</ToggleButton>
            <ToggleButton value="BJJ">BJJ</ToggleButton>
            <ToggleButton value="KICKBOXING">Kickboxing</ToggleButton>
            <ToggleButton value="WRESTLING">Wrestling</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {filtered.length > 0 ? (
          <Grid container spacing={3}>
            {filtered.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.id}>
                <VideoCard video={video} onPlay={handlePlay} onDownload={handleDownload} onShare={handleShare} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography color="text.secondary">No videos match your filter</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
