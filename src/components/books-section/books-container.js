import React from 'react';
import Book from '../books-section/book';

let BooksContainer = (props) => {
    return(
        <div className="books-container">
            {props.books.map((e, i) => {
                return (<Book book={e} key={i} />)
            } )}
        </div>
    )
}

export default BooksContainer;