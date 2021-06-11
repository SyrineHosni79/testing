import React from 'react';
import './nav.css';

const Nav = () => {
    return(
        <div className="navbar">
                <a  className="titre" >Book Store</a>
                    <ul>
                         <a className="linkss" href="/">Home</a>
                         <a className="linkss" href="/authors">Authors</a>
                         <a className="linkss" href="/books">Books</a>
                    </ul>       
        </div>
    )
}
export default Nav;