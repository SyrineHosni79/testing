import React from 'react';

const Nav = () => {
    return(
        <div className="navbar">
            <div className="container">
                <a  className="titre" >Book Store</a>
                    <ul>
                         <a href="/">Home</a>
                         <a href="/Orders">Order</a>
                         <a href="/Books">Book</a>
                         <a href="Authors">Author</a>
                    </ul>
       
            </div>
       
        </div>
    )
}
export default Nav;