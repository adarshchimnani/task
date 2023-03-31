import React from 'react'
import Grid from '@mui/material/Grid';
import BasicCard from './BasicCard';

const BasicCardList = (props) => {

    const arr = props.arr;

    return (
        <div>
            <Grid container spacing={1} >
                {arr.map((item, index) => <Grid key={index} item xs={12} sm={12} md={4}>
                    <BasicCard />
                </Grid>)}
            </Grid>
        </div>
    )
}

export default BasicCardList