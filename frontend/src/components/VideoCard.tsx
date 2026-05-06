'use client';
import { Card, CardContent, CardMedia, Box, Typography, Chip, IconButton, Tooltip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
export type VideoStatus = 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnailUrl?: string;
    combatStyle: string;
    status: VideoStatus;
    createdAt: string;
    socialPosts?: { platform: string; status: string }[];
  };
  onPlay: (id: string) => void;
  onDownload: (id: string) => void;
  onShare: (id: string) => void;
}

const PLATFORM_COLORS: Record<string, string> = {
  tiktok: '#ff0050',
  instagram: '#E4405F',
  youtube: '#FF0000',
};

export default function VideoCard({ video, onPlay, onDownload, onShare }: VideoCardProps) {
  return (
    <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="div"
          sx={{
            height: 180,
            bgcolor: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {video.thumbnailUrl ? (
            <img src={video.thumbnailUrl} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <PlayArrowIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
          )}
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: video.status === 'READY' ? 'success.main' : video.status === 'PROCESSING' ? 'warning.main' : 'error.main',
              borderRadius: 1,
              px: 1,
              py: 0.5,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.7rem' }}>
              {video.status}
            </Typography>
          </Box>
        </CardMedia>
        <IconButton
          onClick={() => onPlay(video.id)}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'rgba(0,0,0,0.7)',
            '&:hover': { bgcolor: 'primary.main' },
            width: 56,
            height: 56,
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }} noWrap>
          {video.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5, mb: 1, flexWrap: 'wrap' }}>
          <Chip label={video.combatStyle} size="small" sx={{ bgcolor: 'primary.main', color: '#000', fontSize: '0.7rem' }} />
          {video.socialPosts?.map((post) => (
            <Chip
              key={post.platform}
              label={post.platform.toUpperCase()}
              size="small"
              sx={{
                bgcolor: PLATFORM_COLORS[post.platform] || 'grey.700',
                color: '#fff',
                fontSize: '0.65rem',
              }}
            />
          ))}
        </Box>
        <Typography variant="caption" color="text.secondary">
          {new Date(video.createdAt).toLocaleDateString()}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Tooltip title="Download">
            <IconButton size="small" onClick={() => onDownload(video.id)}><DownloadIcon /></IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton size="small" onClick={() => onShare(video.id)}><ShareIcon /></IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}
