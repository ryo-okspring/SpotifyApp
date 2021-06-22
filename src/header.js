import React, { useState } from 'react';
import "./App.css";
import HamburgerIcon from "./components/hamburgerIcon.js";
import HamburgerMenu from './components/hamburgerMenu.js';

function Header() {

    return (
        <div className='header'>
            <div className='header-title'>
                < i className="fas fa-guitar"><span className='blogLogo'>GeTracks</span></i>

            </div>

            <input type="checkbox" id="input" />
            <label htmlFor="input" ><HamburgerIcon /></label>
            {/* 黒幕かけてます */}
            <label htmlFor="input" className="overlay"><div className="overlay"></div></label>

            <HamburgerMenu className="hamburgerMenu" />
        </div>
    )
};

export default Header;