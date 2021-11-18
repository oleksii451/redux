
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const bookAddedToCart = (bookId) => {
    return{
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId,
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    console.log('Fetching Books');
    dispatch(booksRequested());
    bookstoreService.getBooks().then
    ((data) => dispatch(booksLoaded(data))).catch
    ((error) => dispatch(booksError(error)));
    console.log ( 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' );
}


export {
    fetchBooks,
}