import React, { useState } from 'react';
import "./App.css";
import HamburgerIcon from "./hamburgerIcon.js";
import HamburgerMenu from './hamburgerMenu.js';

function Header() {

    return (
        <div className='header'>
            <div className='header-title'>
                < i className="fas fa-guitar"><span className='blogLogo'>キーで曲探しできるアプリ</span></i>

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