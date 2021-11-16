import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator/error-indicator";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BookList from "../book-list/book-list";

const HomePage = () => {

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
                <Item> <BookList /> </Item>
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

export default HomePage;