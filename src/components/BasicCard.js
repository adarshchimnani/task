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

export default function BasicCard(props) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <div style={{ background: 'linear-gradient(to right, #00c6fb, #005bea)', color: 'white', borderRadius: '0.5rem' }}>
        <h2>{props.currency}</h2>
        <p>{props.amount}</p>
        <button style={{ background: 'white', color: '#005bea', border: 'none', borderRadius: '0.25rem' }}>Learn More</button>
      </div>
    </Card>
  );
}
