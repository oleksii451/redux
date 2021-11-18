import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../components/header/header";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BookList from "../book-list/book-list-container";

const HomePage = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header/>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Item> this block left blank intentionally </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item> <BookList /> </Item>
                </Grid>
            </Grid>
        </Box>
    )

}


export default HomePage;