import React from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const App = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item> <Spinner /> </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item> <ErrorIndicator /> </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}


export default App;