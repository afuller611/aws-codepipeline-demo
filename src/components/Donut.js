import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Donut = (props) => {
    const { donut } = props;
    return (
        <Grid direction="column" alignItems="center" container justify="center" item xs={3} wrap="wrap">
            <img src={`https://doughnuts.s3.amazonaws.com/Donuts/${donut.image}`} alt={donut.name} />
            <Typography>{donut.name}</Typography>
        </Grid>
    )
}
export default Donut