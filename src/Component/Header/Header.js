import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import ActiveLink from './ActiveLink';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='aLink'>
                <ActiveLink  to="/">Shop</ActiveLink>
                <ActiveLink  to="/order-review">Order Review</ActiveLink>
                <ActiveLink  to="/manage-inventory">Manage Inventory</ActiveLink>
                <ActiveLink  to="/login">Login</ActiveLink>
                
            </div>
        </nav>
    );
};

export default Header;