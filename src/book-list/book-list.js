import React, {useCallback, useEffect, useState} from "react";
import BookListItem from "../book-list-item/book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../components/hoc/with-bookstore-service";
import {booksLoaded} from "../actions";
import compose from "../utils/compose";

const BookList = ({books, bookstoreService, booksLoaded}) => {



    useEffect(() => {
        const data = bookstoreService.getBooks();
        booksLoaded(data);
        console.log ( 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' );
    }, [booksLoaded, bookstoreService])

    return (
            <ul>
            {
                books.map((book) => {
                    return (
                        <>
                            <li key={book.id}><BookListItem book={book} /></li>

                        </>
                    )
                })
            }
        </ul>
    );
}

const mapStateToProps = ({books}) => {
    return { books }
}

const mapDispatchToProps = {
    booksLoaded
}


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
