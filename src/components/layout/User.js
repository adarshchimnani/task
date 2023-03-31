import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../BasicCard';

export default function User() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Grid container spacing={1} elevation={1} >
                <Grid item xs={12} sm={3} md={3}>
                    <Card currency="Good Evening" amount="Mr. Adarsh" />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card currency="Current Balance" amount="1234$" />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card currency="Credit" amount="1234$" />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Card currency="Debit" amount="1234$" />
                </Grid>
                <User />
            </Grid>
        </Box>
    );
}