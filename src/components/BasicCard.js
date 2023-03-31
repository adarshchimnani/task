import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <div style={{ background: 'linear-gradient(to right, #00c6fb, #005bea)', color: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
        <h2>Card Title</h2>
        <p>Card content goes here...</p>
        <button style={{ background: 'white', color: '#005bea', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.25rem' }}>Learn More</button>
      </div>
    </Card>
  );
}
