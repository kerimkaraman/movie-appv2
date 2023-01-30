import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeSwitcher } from '../context/ThemeContext';
import Logo from '../assets/logo.png'
import DarkMode from '../assets/dark-mode.png'
import LightMode from '../assets/light-mode.png'
import { NavLink, Link, BrowserRouter, Route, Routes } from 'react-router-dom'


function Header() {
    const { theme, setTheme } = useContext(ThemeSwitcher)
    const [buttonText, setButtonText] = useState(DarkMode);

    const clickHandler = () => {
        if (theme === "light-mode") {
            console.log(theme)
            setTheme("dark-mode")
            setButtonText(LightMode)
        }
        else {
            console.log(theme)
            setTheme("light-mode")
            setButtonText(DarkMode)
        }
    }

    return (
        <div className='header'>
            <div className="logo">
                <img src={Logo} alt="" />
                <p>MOVIE APP</p>
            </div>
            <div className="search-area">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="header-links">
                <Link to="/">Popular Movies</Link>
                <Link to="top-rated">Top Rated Movies</Link>
                <Link to="upcoming">Upcoming Movies</Link>
            </div>
            <div className="theme-button">
                <button onClick={clickHandler}><img src={buttonText} alt="" /></button>
            </div>
        </div>
    )
}

export default Header