import { Link } from 'react-router-dom';
import './index.css'
import logo from './logo.svg';
import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';

const NavBar = () => {
    const [menuStatus, setMenuStatus] = useState(false);

    const menuItems = () => {
        return(
            <ul className='tabs-list'>
                <Link to={'/'} className='tab-link'><li className='tab-item'>Home</li></Link>
                <Link to={'/statistics'} className='tab-link'><li className='tab-item'>Statistics</li></Link>
                <Link to={'/bar-chart'} className='tab-link'><li className='tab-item'>BarChart</li></Link>
                <Link to={'/pai-chart'} className='tab-link'><li className='tab-item'>PaiChart</li></Link>
            </ul>
        )
    }
    return(
        <>
        <div className="nav-container">
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo' />
                <h1 className='heading'>Ecom Transactions</h1>
            </div>
            <div className='tabs-container'>
                {menuItems()}
            </div>
            <div className='hamburger-menu' onClick={() => setMenuStatus(!menuStatus)}>
                {menuStatus ? (<FaBars className='menu-icon' style={{color: "white",}} />) :
                (<FaTimes className='menu-cancel-icon' style={{color: "white",}} />)}
            </div>
        </div>
        {!menuStatus ? 
            (<div className='hamburger-options-container'>
                {menuItems()}
            </div>) : null }
        </>
    )
}

export default NavBar