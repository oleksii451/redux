

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'book',
            count: 3,
            total: 150,
        },
        {
            id: 2,
            name: 'book 2',
            count: 1,
            total: 89,
        },
    ],
    orderTotal: 220
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return { ...state,
                error: null,
                books: action.payload,
                loading: false,
            };
        case 'FETCH_BOOKS_REQUEST' :
            return { ...state,
                error: null,
                books: [],
                loading: true,
            };
        case 'FETCH_BOOKS_FAILURE':
            return { ...state,
                error: action.payload,
                books: [],
                loading: false
            }
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            return { ...state,

            }
        default: return state;
    }
};

export default reducer;