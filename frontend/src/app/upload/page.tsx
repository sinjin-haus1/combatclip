'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import UploadZone from '@/components/UploadZone';
import StyleSelector from '@/components/StyleSelector';
import { Box, Container, Typography, Card, CardContent, TextField, Button, Grid, Alert, LinearProgress } from '@mui/material';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [combatStyle, setCombatStyle] = useState('BOXING');
  const [title, setTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleFilesAccepted = (acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  };

  const handleGenerate = async () => {
    if (!title.trim()) {
      setMessage({ type: 'error', text: 'Please enter a title' });
      return;
    }
    if (files.length === 0) {
      setMessage({ type: 'error', text: 'Please upload at least one image or video' });
      return;
    }
    setIsGenerating(true);
    setMessage(null);

    // Simulate video generation
    setTimeout(() => {
      setIsGenerating(false);
      setMessage({ type: 'success', text: 'Video generated! Check the Videos page.' });
      setFiles([]);
      setTitle('');
    }, 3000);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
          CREATE VIDEO
        </Typography>

        {message && (
          <Alert severity={message.type} sx={{ mb: 3 }} onClose={() => setMessage(null)}>
            {message.text}
          </Alert>
        )}

        {isGenerating && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>Generating your combat clip...</Typography>
            <LinearProgress color="primary" />
          </Box>
        )}

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>VIDEO TITLE</Typography>
                <TextField
                  fullWidth
                  placeholder="e.g. Before & After 12-Week Training Camp"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ mb: 3 }}
                />

                <Typography variant="h6" sx={{ mb: 2 }}>COMBAT STYLE</Typography>
                <StyleSelector selected={combatStyle} onChange={setCombatStyle} />

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>UPLOAD FOOTAGE</Typography>
                <UploadZone onFilesAccepted={handleFilesAccepted} />

                {files.length > 0 && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">{files.length} file(s) selected</Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleGenerate}
              disabled={isGenerating}
              sx={{ py: 2, fontSize: '1.1rem' }}
            >
              {isGenerating ? 'GENERATING...' : 'GENERATE VIDEO'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
