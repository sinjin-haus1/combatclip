'use client';
import Header from '@/components/Header';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';

const STATS = [
  { label: 'Total Videos', value: '0', icon: VideocamIcon, color: '#ff3333' },
  { label: 'Total Views', value: '0', icon: TrendingUpIcon, color: '#00cc66' },
  { label: 'Followers Gained', value: '0', icon: PeopleIcon, color: '#00ccff' },
];

const RECENT_VIDEOS = [];

export default function DashboardPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
          DASHBOARD
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {STATS.map((stat) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <stat.icon sx={{ fontSize: 40, color: stat.color }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                    <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Actions */}
        <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', mb: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>QUICK ACTIONS</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" href="/upload">Create New Video</Button>
              <Button variant="outlined" href="/videos">View All Videos</Button>
              <Button variant="outlined" href="/connect">Connect Social Accounts</Button>
            </Box>
          </CardContent>
        </Card>

        {/* Recent Videos */}
        <Typography variant="h6" sx={{ mb: 2 }}>RECENT VIDEOS</Typography>
        {RECENT_VIDEOS.length === 0 ? (
          <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', textAlign: 'center', py: 6 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              No videos yet. Create your first combat clip!
            </Typography>
            <Button variant="contained" href="/upload">Create Video</Button>
          </Card>
        ) : null}
      </Container>
    </Box>
  );
}
