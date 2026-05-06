'use client';
import { Box, Typography, Chip } from '@mui/material';

interface StyleSelectorProps {
  selected: string;
  onChange: (style: string) => void;
}

const COMBAT_STYLES = [
  { id: 'BOXING', label: '🥊 Boxing', color: '#ff3333' },
  { id: 'MMA', label: '⚔️ MMA', color: '#ff6600' },
  { id: 'BJJ', label: '🥋 BJJ', color: '#00ff88' },
  { id: 'KICKBOXING', label: '🥊 Kickboxing', color: '#ffcc00' },
  { id: 'WRESTLING', label: '🤼 Wrestling', color: '#3366ff' },
  { id: 'MUAY_THAI', label: '🥊 Muay Thai', color: '#ff0066' },
  { id: 'JUDO', label: '🥋 Judo', color: '#ff3333' },
  { id: 'TAEKWONDO', label: '🥋 Taekwondo', color: '#00ccff' },
];

export default function StyleSelector({ selected, onChange }: StyleSelectorProps) {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>SELECT COMBAT STYLE</Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {COMBAT_STYLES.map((style) => (
          <Chip
            key={style.id}
            label={style.label}
            onClick={() => onChange(style.id)}
            sx={{
              bgcolor: selected === style.id ? style.color : 'background.paper',
              color: selected === style.id ? '#000' : 'text.primary',
              border: '1px solid',
              borderColor: selected === style.id ? style.color : 'divider',
              fontWeight: selected === style.id ? 700 : 400,
              '&:hover': { bgcolor: style.color, color: '#000' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
