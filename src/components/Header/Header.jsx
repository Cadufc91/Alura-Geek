import React from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import './Header.css';

const Header = () => {
    return(
        <div className='header-container'>
            <GiConsoleController className='console'/>
            <div className='header-title'>Alura<span className='header-title-colored'>Geek</span></div>
            <button className='login-btn'>Login</button>
            <BsSearch className='search-btn'/>
            <input className='search' type="text" />
        </div>
    )
}

export default Header;