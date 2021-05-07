import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function HamburgerMenu() {
    return (
        <div className="hamburgerMenu">
            <ul className="hamburger-list">

                <li><Link to='/'>Home</Link></li>


            </ul >
        </div >

    );
}

export default HamburgerMenu;