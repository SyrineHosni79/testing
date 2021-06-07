import React from 'react';
import './nav.css';

const Nav = () => {
    return(
        <div className="navbar">
            <div className="container">
                <a  className="titre" >Book Store</a>
                    <ul>
                         <a href="/">Home</a>
                         <a href="Authors">Authors</a>
                         <a href="/Books">Books</a>
                         <a href="/Orders">your orders</a>
                    </ul>
       
            </div>
       
        </div>
    )
}
export default Nav;