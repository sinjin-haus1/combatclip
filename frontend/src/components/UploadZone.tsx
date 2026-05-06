'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, CircularProgress } from '@mui/material';

interface UploadZoneProps {
  onFilesAccepted: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
}

export default function UploadZone({ onFilesAccepted, accept = 'image/*,video/*', maxFiles = 5 }: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesAccepted(acceptedFiles);
  }, [onFilesAccepted]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: accept.split(',').reduce((acc, type) => {
      const clean = type.trim();
      if (clean === 'image/*') return { ...acc, 'image/png': [], 'image/jpeg': [], 'image/webp': [] };
      if (clean === 'video/*') return { ...acc, 'video/mp4': [], 'video/webm': [] };
      return acc;
    }, {} as Record<string, unknown>),
    maxFiles,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed',
        borderColor: isDragActive ? 'primary.main' : isDragReject ? 'error.main' : 'divider',
        borderRadius: 2,
        p: 6,
        textAlign: 'center',
        cursor: 'pointer',
        bgcolor: 'background.paper',
        transition: 'all 0.2s',
        '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(255,51,51,0.05)' },
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="h6" color="primary.main">Drop it! 🔥</Typography>
      ) : (
        <>
          <Typography variant="h6" sx={{ mb: 1 }}>Drag & drop your footage</Typography>
          <Typography variant="body2" color="text.secondary">or click to browse</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            Supports: PNG, JPG, WEBP, MP4, WEBM
          </Typography>
        </>
      )}
    </Box>
  );
}
