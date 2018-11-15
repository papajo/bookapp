import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BooksSection from '../books-section/books-section';
import axios from 'axios';
import Loader from '../loader';

/* "https://www.googleapis.com/books/v1/volumes?q=" + this.props.category + "&key=AIzaSyCP70EV45oZH3cVVcpWg8rbYLracYgmfcs"  */
class BooksSectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: true,
        }
    }
    
    componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyCP70EV45oZH3cVVcpWg8rbYLracYgmfcs")
        .then((response) => {
            this.setState({
                books: response.data.items,
                isLoading: false,
            })
        })
    }

    componentDidUpdate(previousProps){
        if(previousProps.categoryName !== this.props.categoryName){
            this.setState({
                isLoading: true,
            })
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyCP70EV45oZH3cVVcpWg8rbYLracYgmfcs")
                .then((response) => {
                    this.setState({
                        books: response.data.items,
                        isLoading: false,
                    })
                })
        }
    }

    render() {
        return(
            <div className="has-fixed-footer">
                <Header />
                {this.state.isLoading ?
                    <Loader /> :
                    <BooksSection title={this.props.categoryName} books={this.state.books} />
                }
                <Footer />
            </div>
        )
    }
}

BooksSectionPage.defaultProps = {
    categoryName: "HTML"
}

export default BooksSectionPage;