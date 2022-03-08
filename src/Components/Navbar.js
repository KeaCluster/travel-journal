import React from 'react';
import './Navbar.css';
import logo from '../images/icon-world.png';

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div className='item--container'>
                <img className='icon--world' src={logo} alt='Logo'/>
                <p className='navbar--title'>a travel journal</p>
            </div>
        </nav>
    )
}

export default Navbar;