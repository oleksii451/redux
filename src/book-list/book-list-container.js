import React, {useEffect} from "react";
import BookListItem from "../book-list-item/book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../components/hoc/with-bookstore-service";
import {bookAddedToCart, fetchBooks} from "../actions";
import compose from "../utils/compose";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator/error-indicator";
//FOR BOOKLIST
import {ImageListItem, ListSubheader, Divider, ImageList, Paper, Card} from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';

function BookList({books, onAddedToCart}) {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
        >
            {books.map((book) => {
                return (
                     <>
                         <Card key={book.id}><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/></Card>
                     </>
                )}
            )}
        </Stack>
    );
}

const BookListContainer = ({books, loading, error, fetchBooks, onAddedToCart }) => {

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks])

    if (error) {
        return <ErrorIndicator />
    }

    if (loading) {
        return <Spinner />
    }
    if (books) {
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }

}

const mapStateToProps = ({books, loading, error}) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
