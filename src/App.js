import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import BooksSectionPage from '../src/components/pages/books-section';
import BookDetailPage from '../src/components/pages/book-detail';
import PageNotFound from '../src/components/pages/page-not-found';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage} />
          <Route path="/books/category/:categoryName" exact render={(props) => {
            let {categoryName} = props.match.params;
            return <BooksSectionPage categoryName={categoryName} />
          }} />
          <Route path="/book/:bookID" render={(props) => {
            let {bookID} = props.match.params;
            return <BookDetailPage bookID={bookID} />
          } } />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
