import React from 'react';
import {NavLink, Link} from 'react-router-dom';

let Header = (props) => {
    return(
        <header id="header">
            <div className="container">
                <nav>
                    <Link to="/" className="logo"><i className="fas fa-book-open"></i></Link>
                    <ul className="categories">
                        <li><NavLink to="/books/category/HTML">HTML</NavLink></li>
                        <li><NavLink to="/books/category/CSS">CSS</NavLink></li>
                        <li><NavLink to="/books/category/JavaScript">JavaScript</NavLink></li>
                        <li><NavLink to="/books/category/React">React</NavLink></li>
                        <li><NavLink to="/books/category/NodeJS">NodeJS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;