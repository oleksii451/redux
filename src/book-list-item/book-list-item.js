import React from "react";

const BookListItem = ({book}) => {

    const {author, title} = book;
    return (
        <>
            <span>{title}</span>
            <span>{author}</span>
        </>
    )
}

export default BookListItem;