import {useCallback, useEffect, useState} from "react";
import BookListItem from "../book-list-item/book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../components/hoc/with-bookstore-service";
import {booksLoaded} from "../actions";
import {bindActionCreators} from "redux";

const BookList = ({books, bookstoreService, booksLoaded}) => {

    useEffect(() => {
        const data = useCallback(() => bookstoreService.getBooks());
        booksLoaded(data);
    }, )

    return (

        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    )
                })
            }
        </ul>
    );
}

const mapStateToProps = ({books}) => {
    return { books }
}

const mapDispatchToProps = (dispatch) => {
    bindActionCreators({booksLoaded}, dispatch);
}


export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))