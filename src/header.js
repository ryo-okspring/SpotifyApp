import React, { useState } from 'react';
import "./App.css";
import HamburgerIcon from "./hamburgerIcon.js";
import HamburgerMenu from './hamburgerMenu.js';

function Header() {

    return (
        <div className='header'>
            <div className='header-title'>
<<<<<<< HEAD
                < i className="fas fa-guitar"><span className='blogLogo'>GeTruck</span></i>
=======
                < i className="fas fa-guitar"><span className='blogLogo'>GeTracks</span></i>
>>>>>>> ccc70baa083f1afd4d87228863952043935f861c

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