import React from 'react';
import BookInfo from '../book-detail/book-info';
import BookReviewContainer from '../book-detail/book-review-container';

let BookContainer = (props) => {
    //console.log(props)
    let bookInfo = {
        image: props.book.volumeInfo.imageLinks.large,
        title: props.book.volumeInfo.title,
        author: props.book.volumeInfo.authors,
        description: props.book.volumeInfo.description,
        ratings: {
            averageRating: props.book.volumeInfo.averageRating ,
            ratingsCount: props.book.volumeInfo.ratingsCount,
        }
    }
    return(
        <div className="container">
            <div className="book-container">
                <div className="book-img">
                    <img src={bookInfo.image} alt={bookInfo.title} />
                </div>
                <BookInfo title={bookInfo.title} author={bookInfo.author} 
                description={bookInfo.description}/>
                <BookReviewContainer />
            </div>
        </div>
    )
}

export default BookContainer;