import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <>
            <li><Link onClick={() => openModal('login')} className="header-link">Login</Link></li>
            <li><Link onClick = {() => openModal('signup')} className="header-link">Sign Up</Link></li>
        </>
    );

    const personalGreeting = () => (
        <div className="dropdown">
            <li className="header-link">
                {currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)}
                <div className="dropdown-content">
                    <Link className="dropdown-content" to="#" onClick={logout}>Sign Out</Link>
                </div>
            </li>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;