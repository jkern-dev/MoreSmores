import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <>
            <Modal />
            <header className="header">
                <span ><Link to="/" ><img src={window.logo} className="logo" /></Link></span>

                <nav className="header-nav">
                    <ul>
                        <li><Link to='/sites' className="header-link">Camp</Link></li>
                        <li><Link onClick={()=>openModal('login')} className="header-link">Host</Link></li>
                        <li><Link onClick={() => openModal('login')} className="header-link">Login</Link></li>
                        <li><Link onClick={() => openModal('signup')} className="header-link">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )

    const personalGreeting = () => (
        <>
            <Modal />
            <header className="header">
                <span ><Link to="/" ><img src={window.logo} className="logo" /></Link></span>
                <nav className="header-nav">
                    <ul>
                        <li><Link to='/sites' className="header-link">Camp</Link></li>
                        <li><Link to='/site_create' className="header-link">Host</Link></li>
                        <li><Link to={`/bookings/${currentUser.id}`} className="header-link">Bookings</Link></li>
                        <div className="dropdown">
                          <li className="header-link">
                              {currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)}
                            <div className="dropdown-content">
                              <Link className="dropdown-content" to="#" onClick={logout}>Sign Out</Link>
                            </div>
                          </li>        
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;